// Validação, sanitização e template do e-mail do formulário de contato.

export const PRODUCT_TYPES = [
  "Portas Pivotantes",
  "Janelas",
  "Pele de Vidro",
  "Box de Banheiro",
  "Guarda-Corpos",
  "Cortina de Vidro",
  "Outro",
] as const;

export const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  company: 100,
  city: 100,
  message: 2000,
} as const;

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  productType: string;
  message: string;
}

const EMAIL_RE = /^[^\s@<>"',;:]+@[^\s@<>"',;:]+\.[^\s@<>"',;:]+$/;

/** Escapa caracteres especiais de HTML (evita injeção de HTML/XSS no e-mail). */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Remove caracteres de controle e quebras de linha (para assunto/cabeçalhos). */
function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001F\u007F]+/g, " ").trim();
}

/** Mantém \n (para a mensagem), mas remove os demais caracteres de controle. */
function multiLine(value: string): string {
  return value
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0009\u000B-\u001F\u007F]/g, "")
    .trim();
}

type Result =
  | { ok: true; data: ContactPayload }
  | { ok: false; error: string };

export function validateContact(raw: unknown): Result {
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
    return { ok: false, error: "Dados inválidos" };
  }
  const body = raw as Record<string, unknown>;

  const str = (key: string): string | null => {
    const v = body[key];
    if (v === undefined || v === null) return "";
    return typeof v === "string" ? v : null;
  };

  const name = str("name");
  const email = str("email");
  const phone = str("phone");
  const company = str("company");
  const city = str("city");
  const productType = str("productType");
  const message = str("message");

  if (
    name === null ||
    email === null ||
    phone === null ||
    company === null ||
    city === null ||
    productType === null ||
    message === null
  ) {
    return { ok: false, error: "Dados inválidos" };
  }

  const data: ContactPayload = {
    name: singleLine(name),
    email: singleLine(email),
    phone: singleLine(phone),
    company: singleLine(company),
    city: singleLine(city),
    productType: singleLine(productType),
    message: multiLine(message),
  };

  if (!data.name || !data.email || !data.phone || !data.city || !data.message) {
    return { ok: false, error: "Campos obrigatórios faltando" };
  }

  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (data[key].length > LIMITS[key]) {
      return { ok: false, error: "Um dos campos excede o tamanho permitido" };
    }
  }

  if (!EMAIL_RE.test(data.email)) {
    return { ok: false, error: "E-mail inválido" };
  }

  const phoneDigits = data.phone.replace(/\D/g, "");
  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    return { ok: false, error: "Telefone inválido" };
  }

  if (
    data.productType &&
    !(PRODUCT_TYPES as readonly string[]).includes(data.productType)
  ) {
    return { ok: false, error: "Tipo de produto inválido" };
  }

  return { ok: true, data };
}

export function buildSubject(name: string): string {
  return `🔔 Nova Solicitação - ${name}`.slice(0, 150);
}

export function buildEmailHtml(d: ContactPayload): string {
  const name = escapeHtml(d.name);
  const email = escapeHtml(d.email);
  const phone = escapeHtml(d.phone);
  const company = escapeHtml(d.company);
  const city = escapeHtml(d.city);
  const productType = escapeHtml(d.productType);
  const message = escapeHtml(d.message).replace(/\n/g, "<br>");
  const phoneDigits = d.phone.replace(/\D/g, "");

  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); }
      .header { background: linear-gradient(135deg, #1b2738 0%, #2b3a50 100%); color: white; padding: 30px; text-align: center; }
      .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
      .content { padding: 30px; }
      .field { margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid #e2e8f0; }
      .field:last-child { border-bottom: none; margin-bottom: 0; }
      .label { font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px; margin-bottom: 6px; }
      .value { font-size: 16px; color: #1e293b; font-weight: 500; }
      .message-box { background: #f1f5f9; border-left: 4px solid #9399a5; padding: 16px; border-radius: 6px; margin-top: 8px; }
      .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #64748b; }
      .badge { display: inline-block; background: #dcfce7; color: #166534; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>🔔 Nova Solicitação de Orçamento</h1>
        <p style="margin: 10px 0 0; opacity: 0.9; font-size: 14px;">Alfa Esquadrias - Site</p>
      </div>
      <div class="content">
        <div class="field">
          <div class="label">Nome Completo</div>
          <div class="value">${name}</div>
        </div>
        <div class="field">
          <div class="label">E-mail</div>
          <div class="value"><a href="mailto:${email}" style="color: #2b3a50; text-decoration: none;">${email}</a></div>
        </div>
        <div class="field">
          <div class="label">Telefone</div>
          <div class="value"><a href="tel:${phoneDigits}" style="color: #2b3a50; text-decoration: none;">${phone}</a></div>
        </div>
        ${d.company ? `<div class="field"><div class="label">Empresa</div><div class="value">${company}</div></div>` : ""}
        <div class="field">
          <div class="label">Cidade</div>
          <div class="value">${city}</div>
        </div>
        ${d.productType ? `<div class="field"><div class="label">Tipo de Produto</div><div class="value"><span class="badge">${productType}</span></div></div>` : ""}
        <div class="field">
          <div class="label">Mensagem</div>
          <div class="message-box">${message}</div>
        </div>
      </div>
      <div class="footer">
        <p style="margin: 0;">
          <strong>Alfa Esquadrias de Alumínio</strong><br>
          Av. Joaquim Constantino, 1880 - Presidente Prudente, SP<br>
          (18) 3904-5308
        </p>
      </div>
    </div>
  </body>
</html>`;
}
