"use client";

import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import LogoMark from "./LogoMark";
import { mediaImage, mediaVideo } from "@/lib/media";
import { WHATSAPP_URL } from "@/lib/site";

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenFacadeModal: () => void;
}

const FALLBACK_POSTER = "/projetos-reais/residencial.webp";
const easeOut = [0.23, 1, 0.32, 1] as const;

// A tela de carregamento cobre a página até ~1,2 s e a cortina sobe até ~1,7 s:
// a entrada do Hero começa enquanto ela sobe.
const START = 1.0;

/**
 * Hero em tela cheia (vídeo Higgsfield 1080p quando existir; senão a foto da fachada),
 * marca ao centro e uma linha mono — a mesma economia da referência.
 */
export default function Hero({ onOpenCalculator }: HeroProps) {
  const poster = mediaImage("hero", FALLBACK_POSTER);
  const usingFallback = poster === FALLBACK_POSTER;

  return (
    <section id="hero" className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, delay: START - 0.2, ease: easeOut }}
      >
        <Backdrop
          poster={poster}
          video={mediaVideo("hero")}
          alt="Fachada contemporânea com esquadrias de alumínio e vidro"
          priority
          imageClassName={usingFallback ? "saturate-[.7] brightness-[.7]" : ""}
        />
      </motion.div>

      {/* Véus: topo para o cabeçalho, base para a leitura */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black/80" />
      <div className="absolute inset-0 bg-black/25" />

      <h1 className="sr-only">
        Alfa Esquadrias de Alumínio - Esquadrias sob medida e vidros temperados em Presidente Prudente SP
      </h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: START, ease: easeOut }}
        className="relative z-10 flex flex-col items-center px-6 pb-16 pt-24 text-center"
      >
        <LogoMark className="h-auto w-48 drop-shadow-[0_12px_50px_rgba(0,0,0,0.65)] sm:w-64 lg:w-80" />

        <p className="label-mono mt-9 !text-white/90 sm:text-[0.8rem] sm:tracking-[0.3em]">
          Esquadrias de alumínio e vidro sob medida
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-metal label-mono rounded-md px-7 py-4 !text-ink-950"
          >
            Pedir orçamento
          </a>
          <button
            type="button"
            onClick={onOpenCalculator}
            className="btn-ghost label-mono cursor-pointer rounded-md px-7 py-4 !text-white"
          >
            Simular projeto
          </button>
        </div>
      </motion.div>

      <a
        href="#visao"
        className="label-mono absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 !text-white/70 transition-colors hover:!text-white"
      >
        Role
        <span className="block h-10 w-px bg-white/50" aria-hidden="true" />
      </a>
    </section>
  );
}
