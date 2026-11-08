#!/usr/bin/env node
/**
 * Gerador de mídia de ambientação via API do Higgsfield.
 *
 *   npm run media -- plan                 # mostra o que seria gerado (NÃO gasta nada) — padrão
 *   npm run media -- estimate             # estimativa de custo da imagem (endpoint documentado, não cobra)
 *   npm run media -- images --yes         # gera imagens (Soul 4K) e converte para WebP
 *   npm run media -- videos --yes         # anima as imagens que têm "video" na cena (image-to-video)
 *   npm run media -- all --yes            # imagens + vídeos
 *   ... --only=hero                       # limita a uma cena
 *
 * Credenciais: HF_CREDENTIALS="KEY_ID:KEY_SECRET" em .env.local (nunca no chat/git).
 * Docs: https://docs.higgsfield.ai  (o console é o catálogo oficial de modelos).
 *
 * Sem --yes nada é enviado: cada geração é cobrada no saldo da conta.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const API = "https://api.higgsfield.ai";
const OUT = join(ROOT, "public", "media");
const SRC = join(ROOT, "media-src"); // brutos + URLs (gitignored)
const MANIFEST = join(ROOT, "src", "lib", "media-manifest.json");
const config = JSON.parse(readFileSync(join(ROOT, "scripts", "higgsfield", "scenes.json"), "utf8"));

// ── args ────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const command = args.find((a) => !a.startsWith("--")) ?? "plan";
const flag = (name) => args.find((a) => a.startsWith(`--${name}=`))?.split("=")[1];
const confirmed = args.includes("--yes");
const only = flag("only");
const scenes = config.scenes.filter((s) => !only || s.id === only);

// ── .env.local (sem dependências) ───────────────────────────────────────────
function loadEnv() {
  const file = join(ROOT, ".env.local");
  if (!existsSync(file)) return;
  for (const line of readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m && !(m[1] in process.env)) process.env[m[1]] = m[2].replace(/^['"]|['"]$/g, "");
  }
}
loadEnv();

const creds = process.env.HF_CREDENTIALS;
const headers = () => ({
  Authorization: `Key ${creds}`,
  "Content-Type": "application/json",
  "Idempotency-Key": randomUUID(),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (...a) => console.log(...a);

class ApiError extends Error {
  constructor(status, body) {
    super(`HTTP ${status}: ${typeof body === "string" ? body : JSON.stringify(body)}`.slice(0, 600));
    this.status = status;
  }
}

async function submit(path, body) {
  const res = await fetch(`${API}/${path}`, { method: "POST", headers: headers(), body: JSON.stringify(body) });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = text; }
  if (!res.ok) throw new ApiError(res.status, json);
  return json;
}

/** Consulta com backoff (2 s × 1,5, teto 10 s, com jitter), como a documentação recomenda. */
async function waitFor(job, timeoutMs) {
  const url = job.status_url ?? `${API}/requests/${job.request_id}/status`;
  const started = Date.now();
  let delay = 2000;
  for (;;) {
    const res = await fetch(url, { headers: { Authorization: `Key ${creds}` } });
    if (res.status >= 500) { await sleep(delay); continue; }
    if (!res.ok) throw new ApiError(res.status, await res.text());
    const data = await res.json();
    if (data.status === "completed") return data;
    if (["failed", "nsfw", "canceled"].includes(data.status)) {
      throw new Error(`Geração terminou como "${data.status}"${data.error ? `: ${data.error}` : ""} (não cobrada)`);
    }
    if (Date.now() - started > timeoutMs) throw new Error("Tempo esgotado esperando a geração");
    await sleep(delay + Math.random() * 500);
    delay = Math.min(delay * 1.5, 10000);
  }
}

async function download(url, file) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Falha ao baixar (${res.status})`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(file, buf);
  return buf;
}

/** Lê largura/altura da trilha de vídeo do MP4 (maior tkhd) — para registrar a resolução real. */
function mp4Size(buf) {
  let best = { w: 0, h: 0 };
  let i = 0;
  while ((i = buf.indexOf("tkhd", i)) !== -1) {
    const version = buf[i + 4];
    const off = i + 4 + (version === 1 ? 88 : 76);
    if (off + 8 <= buf.length) {
      const w = buf.readUInt32BE(off) / 65536;
      const h = buf.readUInt32BE(off + 4) / 65536;
      if (w * h > best.w * best.h) best = { w, h };
    }
    i += 4;
  }
  return best;
}

const readManifest = () => (existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, "utf8")) : {});
const writeManifest = (m) => writeFileSync(MANIFEST, JSON.stringify(m, null, 2) + "\n");

// ── imagens (Soul) ──────────────────────────────────────────────────────────
// A documentação mostra dois caminhos (…/soul/v2/standard e …/soul/standard): tenta na ordem.
const imageVariants = (prompt) => {
  const { resolution, aspect_ratio } = config.imageDefaults;
  return [
    { path: "higgsfield-ai/soul/v2/standard", body: { prompt, aspect_ratio, resolution } },
    { path: "higgsfield-ai/soul/v2/standard", body: { prompt } },
    { path: "higgsfield-ai/soul/standard", body: { prompt, num_images: 1, aspect_ratio, resolution } },
  ];
};

async function generateImage(scene) {
  let job, used;
  for (const v of imageVariants(scene.image)) {
    try {
      job = await submit(v.path, v.body);
      used = v.path + (Object.keys(v.body).length > 1 ? " (com resolução/proporção)" : " (só prompt)");
      break;
    } catch (e) {
      if (![400, 404, 422].includes(e.status)) throw e;
      log(`   · ${v.path} recusou (${e.status}); tentando outra variante`);
    }
  }
  if (!job) throw new Error("Nenhuma variante do Soul foi aceita — confira o catálogo no console do Higgsfield");
  log(`   enviado via ${used}`);
  const done = await waitFor(job, 5 * 60_000);
  const url = done.images?.[0]?.url;
  if (!url) throw new Error("Resposta sem imagem");

  mkdirSync(SRC, { recursive: true });
  mkdirSync(OUT, { recursive: true });
  const raw = await download(url, join(SRC, `${scene.id}.jpg`));
  writeFileSync(join(SRC, `${scene.id}.json`), JSON.stringify({ url, expires_at: done.expires_at }, null, 2));

  const img = sharp(raw).rotate();
  const meta = await img.metadata();
  await img.clone().resize({ width: 2560, withoutEnlargement: true }).webp({ quality: 84, effort: 6 }).toFile(join(OUT, `${scene.id}.webp`));
  await img.clone().resize({ width: 1280, withoutEnlargement: true }).webp({ quality: 80, effort: 6 }).toFile(join(OUT, `${scene.id}-1280.webp`));

  const m = readManifest();
  m[scene.id] = { ...(m[scene.id] ?? {}), image: `/media/${scene.id}.webp`, image1280: `/media/${scene.id}-1280.webp`, width: meta.width, height: meta.height };
  writeManifest(m);
  log(`   ✓ ${scene.id}.webp (${meta.width}×${meta.height} de origem)`);
}

// ── vídeos (image-to-video) ─────────────────────────────────────────────────
async function generateVideo(scene) {
  const ref = join(SRC, `${scene.id}.json`);
  if (!existsSync(ref)) throw new Error(`Gere a imagem de "${scene.id}" antes (a URL dela alimenta o vídeo)`);
  const { url: imageUrl, expires_at } = JSON.parse(readFileSync(ref, "utf8"));
  if (expires_at && Date.parse(expires_at) < Date.now()) throw new Error("A URL da imagem expirou (7 dias) — gere a imagem de novo");

  const job = await submit(config.videoModel, {
    prompt: scene.video.prompt,
    image_url: imageUrl,
    duration: scene.video.duration ?? 5,
    cfg_scale: 0.5,
    negative_prompt: config.negative,
  });
  const done = await waitFor(job, 15 * 60_000);
  const url = done.video?.url;
  if (!url) throw new Error("Resposta sem vídeo");

  mkdirSync(OUT, { recursive: true });
  const buf = await download(url, join(OUT, `${scene.id}.mp4`));
  const { w, h } = mp4Size(buf);

  const m = readManifest();
  m[scene.id] = { ...(m[scene.id] ?? {}), video: `/media/${scene.id}.mp4`, videoWidth: w || undefined, videoHeight: h || undefined };
  writeManifest(m);
  log(`   ✓ ${scene.id}.mp4 — resolução real: ${w}×${h}${h >= 1080 ? " (1080p ✓)" : "  ⚠ abaixo de 1080p"}`);
}

// ── main ────────────────────────────────────────────────────────────────────
async function main() {
  const wantImages = ["images", "all"].includes(command);
  const wantVideos = ["videos", "all"].includes(command);
  const videoScenes = scenes.filter((s) => s.video);

  if (command === "plan" || (!wantImages && !wantVideos && command !== "estimate")) {
    log("PLANO (nada foi enviado)\n");
    log(`Imagens: ${scenes.length} × Soul ${config.imageDefaults.resolution} ${config.imageDefaults.aspect_ratio} → WebP 2560 + 1280`);
    for (const s of scenes) log(`  - ${s.id}${s.video ? `  (+ vídeo ${s.video.duration}s)` : ""}`);
    log(`Vídeos: ${videoScenes.length} × ${config.videoModel}`);
    log(`\nCredenciais (HF_CREDENTIALS): ${creds ? "encontradas" : "NÃO encontradas em .env.local"}`);
    log("Para gerar: npm run media -- all --yes   (cada geração é cobrada no saldo)");
    return;
  }

  if (!creds || !creds.includes(":")) {
    console.error('HF_CREDENTIALS ausente ou inválida. Em .env.local: HF_CREDENTIALS="KEY_ID:KEY_SECRET"');
    process.exit(1);
  }

  if (command === "estimate") {
    const res = await submit("estimate/higgsfield-ai/soul/v2/standard", { prompt: scenes[0]?.image ?? "test" });
    log("Estimativa por imagem Soul:", res);
    return;
  }

  if (!confirmed) {
    console.error(`Isto gastaria crédito. Rode de novo com --yes (veja o plano com: npm run media -- plan).`);
    process.exit(1);
  }

  if (wantImages) {
    for (const s of scenes) {
      log(`\n▶ imagem: ${s.id}`);
      try { await generateImage(s); } catch (e) { console.error(`   ✗ ${s.id}: ${e.message}`); }
    }
  }
  if (wantVideos) {
    for (const s of videoScenes) {
      log(`\n▶ vídeo: ${s.id}`);
      try { await generateVideo(s); } catch (e) { console.error(`   ✗ ${s.id}: ${e.message}`); }
    }
  }
  log("\nConcluído. Confira public/media/ e src/lib/media-manifest.json.");
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
