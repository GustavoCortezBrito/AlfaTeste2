import { Resend } from "resend";
import { NextResponse } from "next/server";
import {
  buildEmailHtml,
  buildSubject,
  validateContact,
} from "@/lib/contact";
import { isRateLimited } from "@/lib/rate-limit";

const MAX_BODY_BYTES = 20 * 1024;

// Configurável por variáveis de ambiente (ver .env.example)
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "gujjgukkgameplays@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "Alfa Esquadrias <onboarding@resend.dev>";

function fail(error: string, status: number) {
  return NextResponse.json({ error }, { status });
}

/** Aceita apenas requisições vindas do próprio site (mitiga CSRF/abuso externo). */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function clientIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    if (!isSameOrigin(request)) {
      return fail("Origem não permitida", 403);
    }

    if (!request.headers.get("content-type")?.includes("application/json")) {
      return fail("Content-Type inválido", 415);
    }

    const declaredLength = Number(request.headers.get("content-length") ?? 0);
    if (declaredLength > MAX_BODY_BYTES) {
      return fail("Requisição muito grande", 413);
    }

    if (isRateLimited(clientIp(request))) {
      return fail("Muitas solicitações. Tente novamente em alguns minutos.", 429);
    }

    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) {
      return fail("Requisição muito grande", 413);
    }

    let raw: unknown;
    try {
      raw = JSON.parse(text);
    } catch {
      return fail("JSON inválido", 400);
    }

    // Honeypot: campo invisível que humanos não preenchem. Bots caem aqui
    // e recebem "sucesso" sem que nenhum e-mail seja enviado.
    if (
      typeof raw === "object" &&
      raw !== null &&
      typeof (raw as Record<string, unknown>).website === "string" &&
      (raw as Record<string, unknown>).website !== ""
    ) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const result = validateContact(raw);
    if (!result.ok) {
      return fail(result.error, 400);
    }
    const data = result.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY não configurada");
      return fail("Serviço de e-mail indisponível no momento.", 500);
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: data.email,
      subject: buildSubject(data.name),
      html: buildEmailHtml(data),
    });

    if (error) {
      console.error("Erro ao enviar e-mail:", error);
      return fail("Erro ao enviar e-mail", 500);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return fail("Erro no servidor", 500);
  }
}


