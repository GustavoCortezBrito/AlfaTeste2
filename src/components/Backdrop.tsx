"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface BackdropProps {
  /** Imagem WebP — também é o quadro inicial e o fallback do vídeo */
  poster: string;
  /** MP4 (Higgsfield, 1080p). Opcional: sem ele, só a imagem. */
  video?: string;
  alt: string;
  priority?: boolean;
  imageClassName?: string;
}

/**
 * Fundo em tela cheia: imagem WebP + vídeo opcional por cima.
 * O vídeo só entra (fade) quando já pode tocar; com "reduzir movimento" fica só a imagem;
 * se o arquivo não existir ou falhar, a imagem permanece — nunca há quadro vazio.
 */
export default function Backdrop({ poster, video, alt, priority = false, imageClassName = "" }: BackdropProps) {
  const reduceMotion = useReducedMotion();
  const [ready, setReady] = useState(false);
  const showVideo = Boolean(video) && !reduceMotion;

  // O <video> já vem no HTML do servidor: o `canplay` pode disparar antes da hidratação e o
  // onCanPlay do React nunca rodar (vídeo tocando, mas com opacity 0 para sempre). Ao montar,
  // confere o estado real do elemento; o evento continua cobrindo o vídeo que ainda carrega.
  const videoRef = useCallback((el: HTMLVideoElement | null) => {
    if (el && el.readyState >= 3) setReady(true);
  }, []);

  return (
    <div className="absolute inset-0">
      <Image
        src={poster}
        alt={alt}
        fill
        priority={priority}
        quality={85}
        sizes="100vw"
        className={`object-cover ${imageClassName}`}
      />
      {showVideo && (
        <motion.video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          onError={() => setReady(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: ready ? 1 : 0 }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}
