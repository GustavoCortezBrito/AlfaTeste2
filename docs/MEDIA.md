# Mídia de ambientação — Higgsfield

Vídeos (MP4) e imagens (WebP) de **ambientação** do site são gerados pela API do Higgsfield. **Portfólio e catálogo usam apenas fotos reais** de obras da Alfa — a IA não aparece como se fosse trabalho entregue.

## Como funciona

```
scripts/higgsfield/scenes.json   prompts e parâmetros de cada cena
scripts/higgsfield.mjs           gerador (Node, sem dependências além do sharp)
public/media/                    saída: <id>.webp, <id>-1280.webp, <id>.mp4
src/lib/media-manifest.json      escrito pelo gerador; o site lê daqui
src/lib/media.ts                 mediaImage(id, fallback) / mediaVideo(id)
media-src/                       brutos + URLs (gitignored)
```

Enquanto uma cena não foi gerada, o site usa uma **foto real** de fallback — nunca há quadro vazio.

| Slot | Onde aparece | Origem | Saída |
| ---- | ------------ | ------ | ----- |
| `hero` | Fundo do Hero | IA (Higgsfield, via MCP): imagem `cinematic_studio_2_5` 4K; vídeo `seedance_2_0` 4K, recodificado para H.264 1080p | imagem + **vídeo 10 s** |
| `story-1` · `story-2` · `story-3` | Capítulos do StoryScroll | **foto real** de obra, tratada (abaixo) | imagem |
| `about-wide` | Imagem larga de "A Alfa" | **foto real** da fachada da loja, tratada (abaixo) | imagem |

Só o `hero` está em `scenes.json`. Não recoloque os outros slots lá: o gerador sobrescreveria as fotos reais no manifest.

## Fotos reais nos slots de ambientação

Origem: fotos de obras enviadas pela Alfa (`alfa_imagens/`, fora do git). Tratamento: recorte 16:9 → ampliação ByteDance 4K (`upscale_image` do MCP do Higgsfield, 2 créditos/imagem, conferida contra o original: letreiro, telefone, logotipo e perfis intactos) → WebP 2560 (q84) + 1280 (q80). Brutos, recortes e ampliações em `media-src/reais/` e `media-src/reais2/` (com `crops.json` e os IDs dos jobs).

| Slot | Foto (`alfa_imagens/`) | Recorte (x, y, largura × altura) | Ampliação |
| ---- | ---------------------- | -------------------------------- | --------- |
| `story-1` | `PHOTO-2026-03-13-16-26-59 9.JPG` — pátio com panos de vidro (1600×1200) | 0, 135, 1600×900 | 4K |
| `story-2` | `PHOTO-2025-09-17-10-48-55.JPG` — persiana (4032×3024) | 50, 0, 3920×2205 | não precisa |
| `story-3` | `PHOTO-2026-01-22-19-23-40.JPG` — entrada do showroom (1479×1508) | 0, 338, 1479×832 | 4K |
| `about-wide` | `PHOTO-2026-07-07-20-28-33.JPG` — fachada da loja (1080×830, a mesma de `public/fachada.webp`) | 0, 60, 1080×607 | 4K |

## Catálogo (`public/produtos/`) e portfólio (`public/projetos-reais/`)

Também fotos reais de `alfa_imagens/`: recorte 4:3 → ampliação 4K só quando o recorte tinha menos de ~1150 px → WebP de até 1600 px (q82). Nenhuma imagem gerada por IA entra aqui.

| Arquivo | Foto (`alfa_imagens/`) | Recorte 4:3 | Ampliação |
| ------- | ---------------------- | ----------- | --------- |
| `produtos/porta-pivotante.webp` | `PHOTO-2025-11-26-10-20-26.JPG` | 0, 162, 1226×920 | não |
| `produtos/janela-integrada.webp` | `PHOTO-2025-09-17-10-48-54 2.JPG` | 0, 0, 1600×1200 | não |
| `produtos/pele-de-vidro.webp` | `PHOTO-2025-09-30-09-48-44 55.JPG` | 0, 338, 1005×754 | 4K |
| `produtos/box-banheiro.webp` | `PHOTO-2025-07-10-18-04-59 10.JPG` | 0, 315, 1200×900 | não |
| `produtos/fechamento-varanda.webp` | `PHOTO-2025-11-26-10-21-56 4.JPG` | 0, 2, 1600×1200 | não |
| `produtos/guarda-corpo.webp` | `PHOTO-2025-09-30-09-48-43 7.JPG` | 0, 183, 749×562 | 4K |
| `projetos-reais/porta-vidro-veneziana.webp` | `PHOTO-2026-01-22-19-22-40 2.JPG` | 0, 323, 902×677 | 4K |
| `projetos-reais/porta-correr-veneziana.webp` | `PHOTO-2025-09-30-09-48-44 19.JPG` | 0, 224, 960×720 | 4K |
| `projetos-reais/piscina-esquadrias-pretas.webp` | `PHOTO-2025-09-30-09-48-44 47.JPG` | 0, 253, 867×650 | 4K |
| `projetos-reais/janela-cozinha.webp` | `PHOTO-2025-11-26-10-21-56 16.JPG` | 0, 20, 975×731 | 4K |
| `projetos-reais/janela-veneziana-branca.webp` | `PHOTO-2025-09-30-09-48-45 13.JPG` | 0, 0, 1600×1200 | não |
| `projetos-reais/portao-garagem-preto.webp` | `PHOTO-2025-09-30-09-34-41 4.JPG` | 0, 279, 963×722 | 4K |
| `projetos-reais/portao-social-preto.webp` | `PHOTO-2025-09-30-09-34-41 9.JPG` | 0, 315, 1200×900 | não |
| `projetos-reais/portao-garagem-branco.webp` | `PHOTO-2025-09-30-09-48-45 10.JPG` | 0, 0, 1600×1200 | não |
| `projetos-reais/fachada-ripada.webp` | `PHOTO-2025-09-30-09-48-45 8.JPG` | 0, 350, 1200×900 | não |
| `projetos-reais/porta-enrolar-comercial.webp` | `PHOTO-2026-07-13-21-02-29 2.JPG` | 0, 349, 1204×903 | não |
| `projetos-reais/pergolado-vidro.webp` | `PHOTO-2026-10-03-17-36-40 2.JPG` | 0, 198, 888×666 | 4K |
| `projetos-reais/showroom-alfa.webp` | `PHOTO-2026-01-22-19-21-51 2.JPG` | 0, 361, 1170×878 | não |

As 10 fotos que já estavam no portfólio continuam; o antigo `portao.webp` era um render 3D (não uma obra) e foi removido, assim como as 4 imagens geradas por IA do catálogo.

## Credenciais

Crie a chave no Console do Higgsfield e salve no `.env.local` (**nunca** no git nem no chat; o secret só aparece uma vez):

```
HF_CREDENTIALS=SEU_KEY_ID:SEU_KEY_SECRET
```

## Comandos

```bash
npm run media -- plan                 # mostra o que seria gerado (não gasta nada) — padrão
npm run media -- estimate             # estimativa de custo por imagem (não cobra)
npm run media -- images --yes         # imagens (Soul 4K 16:9) → WebP 2560 + 1280
npm run media -- videos --yes         # anima as cenas com "video" (image-to-video)
npm run media -- all --yes            # tudo
npm run media -- all --yes --only=hero
```

Sem `--yes` nada é enviado: **cada geração é cobrada** no saldo da conta (falhas e conteúdo recusado não são cobrados).

## O que a documentação do Higgsfield confirma (e o que não)

- Base `https://api.higgsfield.ai`; header `Authorization: Key ID:SECRET`; envio → consulta de status (`queued`, `in_progress`, `completed`, `failed`, `nsfw`, `canceled`) → download. Links do resultado **expiram em 7 dias**: o gerador baixa e guarda no projeto.
- **Imagens:** modelo Soul, resolução `2K`/`4K`, proporções incluindo `16:9` e `21:9`. A documentação mostra dois caminhos (`soul/v2/standard` e `soul/standard`); o gerador tenta ambos.
- **Vídeo:** `kling-video/v2.5-turbo/pro/image-to-video` (5 ou 10 s) e `minimax/hailuo-2.3/standard/image-to-video` (**fixo em 768p**). **1080p não está documentado** para nenhum modelo público. O gerador lê a resolução real do MP4 e avisa se vier abaixo de 1080p.
- O console (`console.higgsfield.ai` → `open.higgsfield.ai`) é o catálogo oficial. Se ele listar um modelo com 1080p, troque `videoModel` em `scenes.json`.

## Prompts

Todos pedem: sem pessoas, sem texto, sem logos, geometria estável (esquadrias não podem "derreter"). Para ajustar, edite `scenes.json` e gere só a cena (`--only=<id>`).

## Entrega de vídeo no site

`Backdrop` mostra o WebP (poster) e faz fade para o MP4 quando ele pode tocar; `muted`, `loop`, `playsInline`, `preload="metadata"`. Com "reduzir movimento" fica só a imagem. Mantenha o MP4 do Hero abaixo de ~8 MB (instalar `ffmpeg` permite recomprimir).
