# CLAUDE.md — Alfa Esquadrias

Site institucional (landing page única) da **Alfa Esquadrias de Alumínio**, Presidente Prudente - SP. Conteúdo, UI e comentários em **português (pt-BR)**; mantenha esse idioma em textos visíveis e commits (padrão `feat:` / `fix:`).

## Stack
Next.js 16 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS 4 · framer-motion · lenis (rolagem suave) · lucide-react · react-icons (só logotipos de marca, via `BrandIcons.tsx`) · @tsparticles · Resend (e-mail). Alias `@/*` → `src/*`.

## Comandos
```bash
npm run dev     # http://localhost:3000
npm run build   # build de produção (também faz typecheck)
npm run lint    # deve passar sem erros nem warnings
npx tsc --noEmit
```
Não há testes automatizados. Verifique mudanças com `tsc` + `lint` + `build`.
Cuidado: `next build` e `next dev` compartilham `.next/` — não rode o build com o dev server aberto.

## Arquitetura
- `src/app/page.tsx` — **client component** único: sobreposição `Loading` (animação em **CSS puro**, classes `.loader-*` em `globals.css`; some em ~1,7 s; o conteúdo já está no HTML) e `SmoothScroll` (Lenis) sobre `SiteHeader`, `SectionNav` (pílula flutuante) e, no `main`: Hero, StoryScroll, SpecsTable, About, Services, Differentials, Portfolio, Testimonials, FAQ, Contact, Footer. Guarda o estado dos modais (`CalculatorModal` remonta a cada abertura via `key`, `FacadeModal`).
- Rolagem: `src/lib/scroll.ts` guarda a instância do Lenis e expõe `useScrollLock(ativo)` (trava o fundo em modais/menu) e `scrollToId(id)`.
- Mídia de ambientação (vídeo/WebP do Higgsfield): `src/lib/media.ts` + `media-manifest.json`; gerador em `scripts/higgsfield.mjs` (veja `docs/MEDIA.md`). Sem mídia gerada, cada slot usa uma foto real de fallback.
- `src/app/layout.tsx` — metadata/SEO, JSON-LD (`@graph`: Organization, WebSite, LocalBusiness, BreadcrumbList), fontes (Inter, Montserrat), `<SeoContent />` (texto oculto fora da tela para crawlers).
- `src/app/privacidade`, `src/app/termos` — páginas estáticas (cada uma define seu próprio `canonical`).
- `src/app/api/send-email/route.ts` — recebe o formulário de `ContactSection` e envia via Resend.
- `src/lib/contact.ts` — validação, sanitização, escape de HTML e template do e-mail. `src/lib/rate-limit.ts` — limitador em memória.
- Orçamento por WhatsApp: `CalculatorModal`, `WhatsAppFloating`, `FacadeModal` e o pós-envio do `ContactSection` abrem `wa.me/551839045308?text=…`. **Sempre** use `encodeURIComponent` no texto — o helper `whatsappLink(texto)` de `src/lib/site.ts` já faz isso.

## API `/api/send-email/` (POST)
Camadas de proteção, nesta ordem: mesma origem (`Origin` == `Host`) → `Content-Type: application/json` → tamanho máx. 20 KB → rate limit (5 req/10 min/IP, best-effort em serverless) → JSON válido → honeypot (`website` preenchido = bot, responde 200 sem enviar) → validação de tipos/tamanhos/e-mail/telefone/`productType` (allowlist em `PRODUCT_TYPES`) → envio. Todo valor do usuário passa por `escapeHtml` antes de entrar no HTML do e-mail; assunto/campos de linha única têm caracteres de controle removidos.
- Se mudar os campos do formulário, atualize **juntos**: `ContactSection.tsx`, `ContactPayload`/`LIMITS`/`validateContact`/`buildEmailHtml` em `src/lib/contact.ts`, e o `<select>` ↔ `PRODUCT_TYPES`.
- `next.config.ts` usa `trailingSlash: true`: chame `/api/send-email/` (com barra) para evitar um redirect 308.
- Env vars (ver `.env.example`; `.env.local` não é versionado): `RESEND_API_KEY` (obrigatória), `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, `HF_CREDENTIALS` (só para `npm run media`; formato `KEY_ID:KEY_SECRET`). Os defaults (destinatário Gmail pessoal e remetente `onboarding@resend.dev`) são de **teste** — em produção, configurar domínio verificado no Resend e o e-mail do cliente.

## SEO — convenções
- Domínio canônico: **`https://www.alfaesquadrias.com.br/`** (com `www` e barra final). Use sempre essa forma em metadata, JSON-LD, sitemap, robots.
- `public/sitemap.xml` e `public/robots.txt` são **estáticos** (mantidos à mão; atualize `lastmod` ao mudar páginas). Não existe next-sitemap.
- `public/ai-context.json` e `public/README.md` são conteúdo para crawlers de IA (servidos publicamente) — mantenha-os coerentes com o site (telefone, endereço, produtos, FAQ).
- Dados do negócio (NAP): Av. Joaquim Constantino, 1880 – Presidente Prudente/SP – CEP 19050-220 · (18) 3904-5308 · contato@alfaesquadrias.com.br · Seg–Sex 08:00–18:00.
- Ícones (`favicon-16/32`, `apple-touch-icon`, `android-chrome-192/512`) foram gerados do `logotipo.png` (510×510). `src/app/favicon.ico` é o ícone legado.

## Gotchas
- Windows + OneDrive: `npm install` às vezes falha com `EBUSY` (DLL do sharp travada) — tente de novo / pause o sync.
- Alguns arquivos usam CRLF; ao editar via script, normalize ou use a ferramenta de edição.
- React Compiler lint (`react-hooks/purity`, `set-state-in-effect`) está ativo: nada de `Math.random()`/`window` durante render nem `setState` síncrono em `useEffect`. Se precisar de valores aleatórios/do navegador, use inicializador lazy de `useState` ou `useSyncExternalStore` (o `Loading.tsx` é determinístico por isso).
- Versões fixas (sem `^`): `next`, `react`, `react-dom`, `eslint-config-next`. `@tsparticles/engine` é dependência direta (peer do `@tsparticles/react`).
- Deliberadamente fora da atualização: `typescript` 7, `eslint` 10, `@types/node` 26 (saltos de major; `@types/node` fica em 20 para casar com o Node em uso).
- Existem 2 `<h1>` na página: um `sr-only` no `Hero` e outro oculto em `SeoContent`. Cuidado ao mexer na hierarquia de headings.
- `npm run media` **gasta crédito** do Higgsfield: sem `--yes` só mostra o plano. Nunca imprima nem versione `HF_CREDENTIALS`. 1080p de vídeo não está documentado para os modelos públicos — o gerador mede a resolução real do MP4.
- Imagens em `public/` **não podem começar com ponto** (o servidor responde 400).
- Lenis: com um modal aberto ele **para** e bloqueia a roda do mouse fora de áreas com `data-lenis-prevent`. Todo overlay novo precisa de `useScrollLock(aberto)` e `data-lenis-prevent` no contêiner que rola. Links de âncora dentro de overlays: role **depois** de fechar (veja o `SiteHeader`).
- `next/image`: o Next 16 só aceita as qualidades de `images.qualities` (`next.config.ts`: 75, 85, 90). Outro valor é rebaixado em silêncio.
- Trocar uma imagem mantendo o mesmo nome em `public/` deixa o dev server servindo a versão antiga otimizada (`.next/dev/cache/images`) — apague esse cache.
- `react-icons` cria um React Context ao carregar: use só pelos wrappers de `src/components/BrandIcons.tsx` (client), nunca direto num Server Component.
- Dados inconsistentes no site que pedem confirmação do cliente: horário (Footer diz Seg–Sex 07:30–18h e Sáb 08–12h; JSON-LD/SeoContent/ai-context dizem Seg–Sex 08–18h) e bairro (Footer: Vila Formosa; ContactSection/ai-context: Vila Nova Prudente).

## Design (resumo — detalhes em `docs/DESIGN.md` e no artifact "Alfa Esquadrias — Design System")
Linguagem "Atelier", inspirada na página do Bugatti W16 Mistral: preto de galeria (`ink-*`, `black`), aço (`steel-*`) para texto secundário, `paper` (#f3f4f6) para pílula/botões. Fontes: **Barlow Condensed** (títulos, caixa-alta global em h1–h4), **Barlow** (corpo), **JetBrains Mono** (rótulos/botões/texto sobre imagem). Classes: `.label-mono`, `.body-mono`, `.panel`, `.btn-metal` (sólido), `.btn-ghost`, `.grain`. Título de seção via `<SectionHeader />`; marca via `<LogoMark />` (não use `/logotipo.png` em UI). Movimento com framer-motion: easing `[0.23,1,0.32,1]`, ≤ 300 ms em UI, `MotionConfig reducedMotion="user"`, nada de `transition-all`/`ease-in`/`scale(0)`. **Nunca** `steel-500` como cor de texto (contraste 4,4:1). Imagens sempre WebP. Portfólio e catálogo = fotos reais; IA só em ambientação.

## Docs
`README.md` (visão geral/setup) · `docs/DEPLOY.md` (GitHub + Vercel) · `docs/SEO.md` (implementação, checklist, próximos passos) · `docs/DESIGN.md` (design system) · `docs/MEDIA.md` (pipeline Higgsfield) · `docs/SKILLS.md` (skills de design instaladas em `.claude/skills/`, ignoradas no git) · `docs/RESPONSIVE.md` (padrões mobile-first).
