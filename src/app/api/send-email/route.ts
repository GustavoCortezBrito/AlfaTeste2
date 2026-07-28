import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Use environment variable for API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, city, productType, message } = body;

    // Validação básica
    if (!name || !email || !phone || !city || !message) {
      return NextResponse.json(
        { error: 'Campos obrigatórios faltando' },
        { status: 400 }
      );
    }

    // Enviar e-mail via Resend
    const { data, error } = await resend.emails.send({
      from: 'Alfa Esquadrias <onboarding@resend.dev>',
      to: 'gujjgukkgameplays@gmail.com',
      replyTo: email,
      subject: `🔔 Nova Solicitação - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #1e293b;
                background-color: #f8fafc;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: white;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
                color: white;
                padding: 30px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
                font-weight: 700;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e2e8f0;
              }
              .field:last-child {
                border-bottom: none;
                margin-bottom: 0;
              }
              .label {
                font-size: 12px;
                font-weight: 700;
                text-transform: uppercase;
                color: #64748b;
                letter-spacing: 0.5px;
                margin-bottom: 6px;
              }
              .value {
                font-size: 16px;
                color: #1e293b;
                font-weight: 500;
              }
              .message-box {
                background: #f1f5f9;
                border-left: 4px solid #06b6d4;
                padding: 16px;
                border-radius: 6px;
                margin-top: 8px;
              }
              .footer {
                background: #f8fafc;
                padding: 20px;
                text-align: center;
                font-size: 12px;
                color: #64748b;
              }
              .badge {
                display: inline-block;
                background: #dcfce7;
                color: #166534;
                padding: 4px 12px;
                border-radius: 12px;
                font-size: 11px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.5px;
              }
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
                  <div class="value">
                    <a href="mailto:${email}" style="color: #06b6d4; text-decoration: none;">${email}</a>
                  </div>
                </div>

                <div class="field">
                  <div class="label">Telefone</div>
                  <div class="value">
                    <a href="tel:${phone.replace(/\D/g, '')}" style="color: #06b6d4; text-decoration: none;">${phone}</a>
                  </div>
                </div>

                ${company ? `
                <div class="field">
                  <div class="label">Empresa</div>
                  <div class="value">${company}</div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="label">Cidade</div>
                  <div class="value">${city}</div>
                </div>

                ${productType ? `
                <div class="field">
                  <div class="label">Tipo de Produto</div>
                  <div class="value">
                    <span class="badge">${productType}</span>
                  </div>
                </div>
                ` : ''}

                <div class="field">
                  <div class="label">Mensagem</div>
                  <div class="message-box">
                    ${message.replace(/\n/g, '<br>')}
                  </div>
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
        </html>
      `,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar e-mail' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro no servidor:', error);
    return NextResponse.json(
      { error: 'Erro no servidor' },
      { status: 500 }
    );
  }
}
