# Alfa Esquadrias — Site Institucional

Landing page da **Alfa Esquadrias de Alumínio** (esquadrias de alumínio sob medida e vidros temperados em Presidente Prudente - SP).

- **Produção**: https://www.alfaesquadrias.com.br/
- **Repositório**: https://github.com/GustavoCortezBrito/AlfaTeste2

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide · tsParticles · canvas-confetti · Resend

## O que o site tem

- Página única com: Hero, Sobre, Produtos, Diferenciais, Portfólio (11 projetos reais, com filtros), Depoimentos, FAQ, Contato e Footer
- Loading animado, barra de progresso de scroll e partículas de fundo
- Modais: calculadora de orçamento (envia para o WhatsApp) e fachada
- Botão flutuante de WhatsApp
- Formulário de contato → e-mail via Resend (`/api/send-email/`) e redirecionamento ao WhatsApp
- Páginas `/privacidade` e `/termos`
- SEO completo: metadata, OpenGraph/Twitter, JSON-LD, sitemap, robots, `ai-context.json` (ver [docs/SEO.md](docs/SEO.md))

## Rodando localmente

Requer Node.js 20+.

```bash
git clone https://github.com/GustavoCortezBrito/AlfaTeste2.git
cd AlfaTeste2
npm install
cp .env.example .env.local   # preencha RESEND_API_KEY
npm run dev                  # http://localhost:3000
```

| Script          | O que faz                    |
| --------------- | ---------------------------- |
| `npm run dev`   | Servidor de desenvolvimento  |
| `npm run build` | Build de produção            |
| `npm start`     | Serve o build                |
| `npm run lint`  | ESLint                       |

## Variáveis de ambiente

| Variável             | Obrigatória | Descrição                                                                 |
| -------------------- | ----------- | ------------------------------------------------------------------------- |
| `RESEND_API_KEY`     | Sim         | Chave da API do Resend                                                    |
| `CONTACT_TO_EMAIL`   | Não         | Quem recebe os orçamentos (padrão: e-mail de teste)                       |
| `CONTACT_FROM_EMAIL` | Não         | Remetente; em produção use um domínio verificado no Resend                |

Nunca versione `.env.local`. Só o `.env.example` vai para o Git.

## Estrutura

```
src/
├── app/
│   ├── api/send-email/route.ts   # API do formulário (validação + Resend)
│   ├── layout.tsx                # metadata, JSON-LD, fontes
│   ├── page.tsx                  # página única
│   ├── privacidade/  termos/
│   └── globals.css
├── components/                   # seções, modais, partículas, loading...
└── lib/
    ├── contact.ts                # validação, escape de HTML, template do e-mail
    └── rate-limit.ts             # rate limit em memória
public/                           # imagens, sitemap.xml, robots.txt, ai-context.json, ícones
docs/                             # DEPLOY.md, SEO.md, DESIGN.md, RESPONSIVE.md
```

## Segurança do formulário

A API aceita só requisições da própria origem, limita tamanho e frequência (5 por 10 min por IP), usa campo honeypot anti-bot, valida todos os campos e escapa todo conteúdo do usuário antes de montar o HTML do e-mail. Detalhes em [CLAUDE.md](CLAUDE.md).

## Documentação

- [docs/DEPLOY.md](docs/DEPLOY.md) — GitHub + Vercel + domínio
- [docs/SEO.md](docs/SEO.md) — implementação, checklist e próximos passos de SEO
- [docs/DESIGN.md](docs/DESIGN.md) — design system "Atelier" (cores, tipografia, componentes, movimento)
- [docs/MEDIA.md](docs/MEDIA.md) — vídeos e imagens de ambientação via Higgsfield (`npm run media`)
- [docs/SKILLS.md](docs/SKILLS.md) — skills de design instaladas e onde foram aplicadas
- [docs/RESPONSIVE.md](docs/RESPONSIVE.md) — padrões mobile-first
- [CLAUDE.md](CLAUDE.md) — contexto técnico para desenvolvimento (arquitetura, convenções, gotchas)

## Contato

Av. Joaquim Constantino, 1880 — Presidente Prudente/SP · (18) 3904-5308 · contato@alfaesquadrias.com.br
