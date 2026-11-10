# Design System — "Atelier"

Redesign inspirado na página do **Bugatti W16 Mistral** (analisada por prints): preto de galeria, imagem/vídeo em tela cheia, tipografia condensada em caixa-alta, rótulos mono, painéis de borda fina e números gigantes. A **identidade da Alfa** (azul-marinho + aço da logotipo) vive nas cores e na marca vetorial.

> A documentação visual completa (cores, componentes ao vivo) está no artifact "Alfa Esquadrias — Design System". Este arquivo é a versão para o repositório.

## 1. Estrutura da página (da referência para a Alfa)

| Referência (Bugatti) | Alfa |
| -------------------- | ---- |
| Hero em vídeo, MENU · marca · STORE | `Hero` (vídeo Higgsfield ou foto) + `SiteHeader` (MENU · marca · ORÇAMENTO) |
| Nome do modelo + frase em mono | `LogoMark` grande + "Esquadrias de alumínio e vidro sob medida" |
| Pílula branca flutuante (Overview · Performance · …) | `SectionNav` |
| Overview: imagem fixa, texto troca ao rolar | `StoryScroll` (3 capítulos) |
| Performance: painel com valores gigantes | `SpecsTable` |
| Exterior design: 3 colunas | `ServicesSection` (produtos) |
| Interior design: 2 colunas | `PortfolioSection` (fotos reais) |
| "Amplifying engine sounds": título + imagem larga | `AboutSection` |
| Rodapé: 4 colunas + marca gigante com grão | `Footer` |

## 2. Cores

Tokens em [`src/app/globals.css`](../src/app/globals.css) (`@theme`) → classes Tailwind (`bg-ink-950`, `text-steel-300`…).

**Tinta (fundos)** — preto de galeria com subtom azul-marinho da logo

| Token | Hex | Uso |
| ----- | --- | --- |
| `ink-950` | `#05080d` | Fundo da página, véu do Hero, tela cheia do menu |
| `black` | `#000000` | Seções de imagem/números (Specs, A Alfa, Projetos, Depoimentos) |
| `ink-900` | `#0a0f16` | Placeholder de imagem |
| `ink-850` / `.panel` | `#0c1119` | Painéis (tabela, formulário, modais) |
| footer | `#0b1018` | Rodapé |
| `ink-700` / `600` | `#1b2636` / `#243247` | Detalhes, superfícies elevadas |

**Aço (texto secundário, linhas)** — prata da logo

| Token | Hex | Contraste sobre `ink-950` | Uso |
| ----- | --- | ------------------------- | --- |
| `paper` | `#f3f4f6` | 18,2:1 | Texto principal, pílula de navegação, botão sólido |
| `steel-100` | `#e8ebef` | 16,8:1 | Texto de corpo sobre painel |
| `steel-200` | `#d3d8df` | 14,0:1 | Descrições |
| `steel-300` | `#b8bfca` | 10,8:1 | Rótulos mono (`.label-mono`), ícones |
| `steel-400` | `#9399a5` | 7,0:1 | Legendas, títulos de coluna do rodapé |
| `steel-500` | `#6f7683` | 4,4:1 ⚠ | **Só** decoração (sublinhados). Nunca texto. |

Linhas e bordas: `rgba(255,255,255,.12)`. Nenhuma cor de destaque saturada: o "colorido" vem das fotos/vídeos (como na referência, onde vem do carro).

## 3. Tipografia

| Papel | Fonte | Uso |
| ----- | ----- | --- |
| Títulos | **Barlow Condensed** 500–700, **caixa-alta** (global em `h1–h4`) | Títulos de seção, produtos, números |
| Corpo | **Barlow** 400–600 | Parágrafos, listas |
| Rótulos / dados | **JetBrains Mono** 400–500 | Menu, abas, botões, legendas, texto sobre imagem (`.body-mono`) |

Escala: título de seção `text-4xl → 6xl`; "A Alfa" até `text-7xl`; valores das Especificações `text-6xl → 8xl`; rótulo `0.72rem`/`tracking .14em`.

## 4. Utilitários CSS

| Classe | Efeito |
| ------ | ------ |
| `.label-mono` | Mono caixa-alta, tracking largo, `steel-300` |
| `.body-mono` | Parágrafo mono (texto sobre imagem) |
| `.panel` | Painel de borda fina e raio 8px |
| `.card` | Compatibilidade: painel plano |
| `.btn-metal` | Botão sólido (papel + texto tinta) |
| `.btn-ghost` | Botão contorno |
| `.grain` | Grão fino (marca gigante do rodapé) |
| `.brushed` | Textura de escovado |

Botões: `:active → scale(.97)`; transições 180 ms com `--ease-out-strong`.

## 5. Componentes

| Componente | Função |
| ---------- | ------ |
| `SiteHeader` | MENU (abre tela cheia) · marca · ORÇAMENTO. Rola junto com a página. |
| `SectionNav` | Pílula branca fixa depois do Hero; seção ativa sublinhada; "Voltar ao topo". |
| `Backdrop` | Imagem WebP + vídeo opcional (fade quando pode tocar; só imagem com "reduzir movimento"). |
| `Hero` | Tela cheia, marca ao centro, 2 botões. Entrada única depois do loading. |
| `StoryScroll` | Imagem fixa em tela cheia, texto troca por capítulo (`useScroll` + `AnimatePresence`). |
| `SpecsTable` | Painel: rótulo mono + valor gigante. |
| `AboutSection` | Título grande + imagem larga + 2 colunas. |
| `ServicesSection` | Abas mono + grade de 3 colunas + modal de detalhes. |
| `DifferentialsSection` | Título + amostras de acabamento + lista com divisores. |
| `PortfolioSection` | Abas por tipo (Portas e janelas · Portões · Vidros · Comercial) + grade de 2 colunas (22 fotos reais) + lightbox; mostra 6 e expande. |
| `TestimonialsSection`, `FaqSection`, `ContactSection` | Texto/acordeão/formulário em painéis de borda fina. |
| `CalculatorModal`, `FacadeModal` | Modais em `.panel`: rótulo mono, título condensado, campos de borda fina, ação em `btn-metal`. |
| `Footer` | 4 colunas, legais, ícones oficiais (Instagram/WhatsApp), marca gigante com grão e efeito lanterna (`FooterWordmark`). |
| `WhatsAppFloating` | Pílula escura fixa (logotipo oficial + "WhatsApp" em mono, ponto verde da marca) que abre um painel com assuntos prontos ou mensagem livre. Sem selo falso nem pulso. |
| `BrandIcons` | Logotipos de marca (Simple Icons via react-icons), atrás de um `"use client"`. |
| `LogoMark` | "A" vetorial da logotipo (exporta a geometria para o loading). |
| `SectionHeader` | Título condensado + frase de apoio. |
| `Loading` | Sobreposição de marca (~1,7 s) sobre a página já renderizada: "A" desenhado em traço → metálico → cortina sobe. CSS puro. |
| `SmoothScroll` | Lenis (rolagem suave) só na roda do mouse/trackpad. |

## 6. Movimento (framer-motion)

| Onde | O quê | Valores |
| ---- | ----- | ------- |
| Hero | Entrada única da marca + leve assentamento da mídia (`scale 1.05 → 1`) | 0,9 s / 2 s, depois do loading |
| StoryScroll | Crossfade das imagens + troca do texto | 0,8 s / 0,28 s |
| SectionNav | Entra/sai ao passar o Hero | 220 ms, `y: -20` |
| Menu | Fade + links com atraso de 40 ms | 250 ms / 350 ms |
| Filtros, modais | Layout/fade responde à ação | 200–250 ms |
| Loading | **CSS puro** (roda antes da hidratação, fora da thread principal): traço do "A" com `stroke-dashoffset` + preenchimento + cortina `translateY(-100%)` | traço 700 ms `cubic-bezier(.77,0,.175,1)`; cortina 520 ms ease-out a partir de 1,15 s; com "reduzir movimento": marca parada e fade de 200 ms |
| Rodapé (lanterna) | Máscara radial que segue o cursor sobre a marca gigante (camada metálica sobre a apagada) | spring `stiffness 300 / damping 34`; só com mouse; sem atraso com "reduzir movimento" |
| WhatsApp | Painel nasce do botão (`transform-origin: bottom right`) | 200 ms, `scale .96 → 1` + fade |
| Rolagem | Lenis `lerp .1`, só roda do mouse/trackpad (toque nativo); âncoras suaves respeitam `scroll-padding-top`; desligado com "reduzir movimento" | — |

Regras: easing `cubic-bezier(.23,1,.32,1)`; nada de `ease-in`, `scale(0)`, `transition: all`; `MotionConfig reducedMotion="user"`; hovers só em `transform`/`opacity`/cor (≤ 1.03).

## 7. Mídia

O vídeo e o pôster do Hero vêm do Higgsfield; StoryScroll, "A Alfa", catálogo e portfólio usam **fotos reais** de obras da Alfa, recortadas e ampliadas (veja [MEDIA.md](MEDIA.md)). Todas as imagens do site são WebP.

## 8. Regras ao evoluir

1. Títulos em condensada caixa-alta; rótulos e botões em mono; corpo em Barlow.
2. Texto sobre imagem: mono, branco, com véu de gradiente (contraste ≥ 4,5:1).
3. Seções alternam `black` e `ink-950`; painéis usam `.panel`.
4. Novo movimento precisa responder a uma ação do usuário, ou ser o momento do Hero/StoryScroll.
5. Nunca `steel-500` como cor de texto.
6. Imagens: WebP, `next/image` com `sizes`, `quality` 85.

> Nota: as regras anteriores "sem caixa-alta" e "sem rótulo acima de título" foram **substituídas** — o brief pede a linguagem da referência, que usa os dois.

## 9. Pendências

- Horário e bairro inconsistentes entre seções (veja `CLAUDE.md`).
