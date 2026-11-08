# Deploy

O site é um projeto Next.js hospedado na **Vercel**, com deploy automático a cada push na branch `main` do GitHub (`GustavoCortezBrito/AlfaTeste2`).

## 1. Publicar mudanças

```bash
git status
git add <arquivos>
git commit -m "feat: descrição da mudança"
git push origin main
```

Antes de dar push: `npx tsc --noEmit && npm run lint && npm run build` devem passar. Evite `git push --force` — ele sobrescreve o histórico remoto.

Nunca versione `.env.local`, chaves de API ou a pasta `.next/` (já estão no `.gitignore`; só `.env.example` é versionado).

## 2. Primeira configuração na Vercel

1. Em https://vercel.com, **Add New → Project** e importe o repositório.
2. Framework Next.js é detectado automaticamente (build `npm run build`, output `.next`).
3. Em **Environment Variables**, para Production/Preview/Development:

   | Variável             | Valor                                                                 |
   | -------------------- | --------------------------------------------------------------------- |
   | `RESEND_API_KEY`     | chave do Resend (https://resend.com/api-keys) — **obrigatória**       |
   | `CONTACT_TO_EMAIL`   | e-mail que recebe os orçamentos                                       |
   | `CONTACT_FROM_EMAIL` | ex.: `Alfa Esquadrias <contato@alfaesquadrias.com.br>` (domínio verificado) |

4. **Deploy**. Mudou uma variável? Faça **Redeploy** para ela valer.

## 3. Domínio personalizado

Em **Settings → Domains** adicione `www.alfaesquadrias.com.br` (principal) e `alfaesquadrias.com.br` (redirecionando para o `www`). Configure no provedor de DNS os registros que a Vercel indicar (normalmente `CNAME www → cname.vercel-dns.com` e `A @ → 76.76.21.21`). O HTTPS é emitido automaticamente.

O domínio canônico do site é **`https://www.alfaesquadrias.com.br/`**.

## 4. E-mail em produção (Resend)

O padrão `onboarding@resend.dev` só entrega para o dono da conta Resend. Para produção: verifique o domínio `alfaesquadrias.com.br` no Resend (registros DNS SPF/DKIM) e defina `CONTACT_FROM_EMAIL` e `CONTACT_TO_EMAIL`.

## 5. Checklist pós-deploy

- [ ] Home carrega e as animações funcionam
- [ ] Formulário envia e o e-mail chega (confira também a caixa de spam)
- [ ] Botão de WhatsApp e calculadora abrem a conversa com a mensagem completa
- [ ] `/robots.txt`, `/sitemap.xml`, `/site.webmanifest` e os ícones respondem 200
- [ ] Rich Results Test sem erros (veja [SEO.md](SEO.md))

## Problemas comuns

| Sintoma | Causa provável |
| ------- | -------------- |
| Formulário responde "Serviço de e-mail indisponível" | `RESEND_API_KEY` ausente no ambiente (faltou redeploy?) |
| Formulário responde 403 | Requisição de outra origem (ex.: domínio sem alias configurado no mesmo host) |
| Formulário responde 429 | Rate limit (5 envios / 10 min por IP) |
| Imagens não aparecem | Caminho errado — arquivos em `public/` são servidos a partir de `/` |
| `npm install` com `EBUSY` no Windows | OneDrive travando a DLL do sharp; tente de novo |
