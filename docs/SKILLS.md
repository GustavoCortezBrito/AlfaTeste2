# Skills de design instaladas

Instaladas **no projeto** em `.claude/skills/` (ignorada pelo git e pelo ESLint — é código de terceiros, 45 MB). Para reinstalar, clone a origem e copie a pasta indicada.

| Skill | Origem (versão clonada) | Pasta local | Licença |
| ----- | ----------------------- | ----------- | ------- |
| Frontend Design (oficial Anthropic) | [anthropics/skills](https://github.com/anthropics/skills) — `skills/frontend-design` (`2c5958e`, 2026-11-06) | `frontend-design/` | ver `LICENSE.txt` |
| Impeccable | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) v4.8.0 (`687bc38`, 2026-11-06) | `impeccable/` | Apache 2.0 |
| UI/UX Pro Max | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (`4f2dbb6`, 2026-11-08) | `ui-ux-pro-max/` | MIT |
| Taste Skill | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) v2.5.1 (`f6b7657`, 2026-11-07) | `design-taste-frontend/` | MIT |
| Emil Kowalski's skills | [emilkowalski/skills](https://github.com/emilkowalski/skills) (`c8a7962`, 2026-11-04) | `emil-*/` (10 skills web) | ver repositório |

**Não instalada:** Figma Skills — dependem do MCP/conta Figma e de um arquivo Figma; o projeto não tem nenhum.

## Como foram instaladas (e o que ficou de fora)

- Lidas **antes** de serem seguidas. Nenhuma instrução foi aceita às cegas.
- **Impeccable:** removidos `scripts/impeccable`, `impeccable.cmd` e `live-browser-dom.js`. O launcher baixa um binário na primeira execução; não foi executado. As playbooks em markdown (`reference/`) funcionam sem ele.
- **UI/UX Pro Max:** `scripts/*.py` foram inspecionados (sem rede/subprocess; só `import os`). A 1ª tentativa de execução foi **bloqueada** pelo classificador de permissões (código externo); depois o usuário liberou só o `search.py` por regra de permissão, e o script passou a rodar.
- **Taste Skill:** a skill traz um hook de `Stop` (executa `gate.mjs` com Node), baixa fotos de banco e impõe seu próprio sistema de página (`system.css`, `starter.html`). Serve para sites novos; **não foi executada** neste site existente, com fotos reais da empresa.
- **Emil Kowalski:** instaladas as skills web (animate, review-animations, improve-animations, find-animation-opportunities, animation-performance, choreograph, animation-vocabulary, break-ui, apple-design, emil-design-eng). Fora: Expo, Swift, mobile-native, Sonner, pick-ui-library, prototype, remove-animations.
- Algumas skills têm `disable-model-invocation` (ex.: `review-animations`): só rodam por comando do usuário.

## Onde cada uma foi aplicada

**Frontend Design (oficial)**
- Revisão do redesign contra a lista de "traços de página gerada": eyebrow em caixa-alta, destaque de uma palavra no título, fade-up em toda seção, kit de cards iguais, rótulos em caixa-alta → todos removidos.
- Hero: título numa cor só, sem bloco de KPIs; uma linha de fato; botões que dizem o que fazem.
- Tipografia deliberada: Inter → Hanken Grotesk (corpo); Montserrat mantida nos títulos por casar com o wordmark.
- Estrutura como informação: Diferenciais deixou de ser grade de cards e virou lista com divisores + amostras reais de acabamento.
- Um momento de movimento (entrada do Hero); piso de qualidade: foco visível, `prefers-reduced-motion`, contraste.
- Copy: voz ativa, frase, sem adjetivo de vitrine (títulos de Hero, Sobre, Catálogo, Contato, FAQ, Portfólio).

**Impeccable** (playbooks lidas à mão: `SKILL.md` e `reference/craft-floor.md`; `critique`/`audit` **não** foram lidas)
- Modo *Persuade* (landing page) como critério de ambição.
- "Craft floor": proibições (eyebrow, gradiente em texto, cards iguais de ícone, métrica de hero), contraste, hierarquia de espaço, medida de leitura, estados.
- "Browser surfaces": `::selection`, `::placeholder`, anel de foco, scrollbar temados na paleta.

**UI/UX Pro Max** (script liberado pelo usuário por regra de permissão; `--design-system`, `--domain` e `--stack` executados)
- **1ª busca (`--design-system`)** devolveu resultado **sem encaixe** (paleta verde + laranja de uma linha "serviço local", tipografia "Inter para AR/VR/glassmorphism"). Por regra do próprio skill, não foi aplicado.
- **2ª busca (mais estreita, produto/estilo/cor)** encaixou: *Construction/Architecture* → **Minimalism & Swiss Style**, padrão Hero-Centric + Feature-Rich, cinza + azul "blueprint". Confirma a direção atual (variance baixo, movimento sutil, grade clara, contraste ≥ 4,5:1, foco visível, reduced-motion).
- **Divergências deliberadas:** acento laranja ("safety orange") não usado — o brief é a logo (azul-marinho + aço); o skill pede sem gradiente/raio 0, mas o botão em chapa metálica e os cantos `rounded-md` são o material da marca. Tipografia sugerida não passou na verificação: mantidas Montserrat + Hanken Grotesk.
- **Aplicado do skill:** (1) `role="alert"` + foco no aviso de erro do formulário (`Focusable Error Summary`, `Error Messages`); (2) mensagem de sucesso visível com `role="status"` (`Submit Feedback`); (3) regra "Avoid: no map + hidden reviews" — o site tem mapa e depoimentos visíveis; (4) `next/image` em todas as imagens (nenhum `<img>` no código); (5) `next/font` já em uso; (6) reduced-motion, `scroll-padding-top` e contraste, como antes.
- `loading.tsx` (sugestão do stack Next) **não** se aplica: o loading é uma sobreposição de marca de 1,2 s, não um estado de rota.

**Taste Skill** (lido o `SKILL.md`; pipeline não executado)
- Regra "sem legenda/descrição sobre imagem": removidos o selo "Showroom & Fábrica" e o chip de endereço da foto do Sobre.
- Regra de micro-interações: botões "dão passo" no hover e afundam no clique; foto amplia ≤ 1.02–1.03; cards sobem ≤ 2 px.
- Copy simples e uma só ação principal por tela (CTA do WhatsApp).
- **Não aplicada:** regra 9 (omitir número/CEP do endereço) — o endereço é dado real do negócio (SEO local).

**Emil Kowalski** (`review-animations` e `emil-design-eng` lidas)
- Auditoria de movimento contra os "10 padrões não negociáveis": removidos giro de entrada (`rotate: -180`, `scale: 0`), `transition: all` (16 ocorrências → `transition`), `whileHover` com escala 1.05–1.1, stagger por índice e animações de layout fora de ação do usuário.
- Easing padrão trocado para ease-out forte (`cubic-bezier(.23,1,.32,1)`), duração padrão 180 ms; filtro do catálogo 250 ms.
- `:active { scale(.97) }` em botões; `MotionConfig reducedMotion="user"`.
- Princípio de frequência: o loading não bloqueia mais a página (sobreposição de 1,2 s, conteúdo já no HTML).

## Nota sobre o redesign "Atelier"

O redesign seguinte seguiu a página do Bugatti W16 Mistral, a pedido do usuário. As regras das skills contra rótulos em caixa-alta e eyebrow acima de título foram **substituídas pelo brief** (a referência usa os dois) — as próprias skills dizem que "o brief vence". Continuam valendo: foco visível, contraste ≥ 4,5:1, `prefers-reduced-motion`, easing ease-out, sem `transition-all` e sem animação decorativa fora do Hero/StoryScroll.
