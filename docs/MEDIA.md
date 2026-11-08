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

| Cena | Onde aparece | Saída |
| ---- | ------------ | ----- |
| `hero` | Fundo do Hero | imagem + **vídeo 10 s** |
| `story-1` · `story-2` · `story-3` | Capítulos do StoryScroll | imagem |
| `about-wide` | Imagem larga de "A Alfa" | imagem |

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
