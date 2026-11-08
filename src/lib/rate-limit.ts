// Rate limit simples em memória (por instância).
// Em ambiente serverless (Vercel) cada instância tem seu próprio contador, então
// é uma proteção "best effort". Para algo mais rígido, use Upstash/Vercel KV
// ou o Vercel Firewall (Rate Limiting).

const hits = new Map<string, number[]>();

export function isRateLimited(
  key: string,
  max = 5,
  windowMs = 10 * 60 * 1000
): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);

  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // limpeza oportunista para não crescer indefinidamente
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((t) => now - t >= windowMs)) hits.delete(k);
    }
  }
  return false;
}

