import manifest from "./media-manifest.json";

/**
 * Mídia de ambientação gerada no Higgsfield (npm run media).
 * Enquanto um slot não foi gerado, usa-se a imagem de fallback (foto real/WebP já no projeto).
 * O manifesto é escrito por scripts/higgsfield.mjs — não edite à mão.
 */
interface MediaEntry {
  image: string;
  image1280?: string;
  video?: string;
  width?: number;
  height?: number;
  videoWidth?: number;
  videoHeight?: number;
}

const entries = manifest as Record<string, MediaEntry | undefined>;

export function mediaImage(id: string, fallback: string): string {
  return entries[id]?.image ?? fallback;
}

export function mediaVideo(id: string): string | undefined {
  return entries[id]?.video;
}
