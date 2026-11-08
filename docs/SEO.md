# SEO

Domínio canônico: **`https://www.alfaesquadrias.com.br/`** (com `www` e barra final — `trailingSlash: true`).

## O que está implementado

| Item | Onde |
| ---- | ---- |
| Title/description, keywords, robots, canonical, `metadataBase` | `src/app/layout.tsx` (`metadata`) |
| Canonical próprio de `/privacidade/` e `/termos/` | `metadata` de cada página |
| OpenGraph + Twitter Card (imagens `fachada.png` 1080×830 e `logotipo.png` 510×510) | `layout.tsx` |
| JSON-LD `@graph`: Organization, WebSite, LocalBusiness (+ catálogo de ofertas), BreadcrumbList | `layout.tsx` |
| Texto SEO oculto visualmente (~850 palavras, headings e links âncora) | `src/components/SeoContent.tsx` |
| `sitemap.xml` (apenas URLs reais: home, privacidade, termos) | `public/sitemap.xml` — **manual** |
| `robots.txt` (libera crawlers de IA: GPTBot, ChatGPT-User, Google-Extended, CCBot, anthropic-ai, Claude-Web, PerplexityBot; bloqueia `/api/`) | `public/robots.txt` |
| Contexto para IA (negócio, produtos, FAQ, contato) | `public/ai-context.json`, `public/README.md` |
| Ícones e PWA manifest | `public/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `site.webmanifest`, `src/app/favicon.ico` |
| Verificação Google Search Console | `public/google826bdce28952f5c3.html` + `metadata.verification` |

## Regras ao editar

- Use sempre `https://www.alfaesquadrias.com.br/…` (nunca sem `www`) em metadata, JSON-LD, sitemap e robots.
- Ao adicionar uma página: defina `title` (o template já acrescenta "| Alfa Esquadrias"), `description` e `alternates.canonical`, e inclua a URL no `public/sitemap.xml`.
- Fragmentos (`#sobre`) não entram no sitemap — o Google os ignora.
- Mantenha NAP consistente (nome, endereço, telefone) em `layout.tsx` (JSON-LD), `Footer`, `ContactSection`, `SeoContent`, `ai-context.json` e no Google Meu Negócio.
- Se alterar dimensões/arquivos das imagens OG, atualize `width`/`height` no `layout.tsx`.

## Palavras-chave alvo

- **Principais**: esquadrias de alumínio presidente prudente · vidros temperados presidente prudente · alfa esquadrias
- **Produtos**: portas pivotantes alumínio · janelas de alumínio sob medida · pele de vidro · box de vidro temperado · guarda-corpo de vidro · cortina de vidro
- **Long-tail**: instalação de esquadrias de alumínio · esquadrias de alumínio preto fosco · portas de alumínio com vidro · vidraçaria / serralheria presidente prudente

## Pendências (ação do cliente/marketing)

- [ ] Google Search Console: confirmar propriedade e enviar `sitemap.xml`; solicitar indexação
- [ ] Google Analytics 4 (ainda não instalado no código)
- [ ] Google Meu Negócio (perfil, fotos, horários, avaliações)
- [ ] Bing Webmaster Tools
- [ ] Instagram oficial: https://www.instagram.com/alfaesquadriaspp/ (já em `sameAs` e no Footer). Se existirem Facebook/Google Meu Negócio, adicione ao `sameAs`
- [ ] Backlinks locais e citações (diretórios, associações, fornecedores)
- [ ] Futuro: blog, páginas individuais por produto, rich snippets de FAQ/avaliações
- [ ] Medir Core Web Vitals (as imagens de `public/` têm 0,3–1,2 MB; considere otimizar/converter para WebP/AVIF)

## Validação

- Rich Results Test — https://search.google.com/test/rich-results
- Schema Markup Validator — https://validator.schema.org/
- PageSpeed Insights — https://pagespeed.web.dev/
- Verificador de OpenGraph — https://www.opengraph.xyz/
- Verificador de favicon — https://realfavicongenerator.net/favicon_checker

## Métricas para acompanhar

Impressões e cliques no Search Console, CTR, posição média para as palavras-chave alvo, cliques em WhatsApp/telefone, envios do formulário, Core Web Vitals.
