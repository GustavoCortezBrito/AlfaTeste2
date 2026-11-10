"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { mediaImage } from "@/lib/media";

/**
 * "Visão geral": imagem em tela cheia que fica fixa enquanto o texto troca conforme a rolagem
 * (a mesma mecânica do Overview da referência). Imagens: ambientação do Higgsfield quando
 * existirem (story-1..3); senão, fotos reais de projetos da Alfa.
 */
const chapters = [
  {
    id: "story-1",
    fallback: "/projetos-reais/marquise.webp",
    title: "Sob medida, do vão à instalação",
    text: "Cada esquadria é medida na obra e fabricada para o seu vão. Alumínio das linhas Suprema, Gold e Minimalista, vidro temperado e vedação que isola calor e barulho.",
  },
  {
    id: "story-2",
    fallback: "/projetos-reais/portadecorrer2.webp",
    title: "Cada milímetro conferido",
    text: "A equipe vai até a sua obra, confere o vão e indica a melhor linha de produto. O encaixe é exato porque o projeto nasce da medida real.",
  },
  {
    id: "story-3",
    fallback: "/projetos-reais/marquise3.webp",
    title: "Feito para durar",
    text: "Instaladores próprios, materiais certificados e garantia na instalação. Feita por Claudemir e Ligia, que trabalham com esquadrias há anos, em Presidente Prudente e região.",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function StoryScroll() {
  const ref = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(chapters.length - 1, Math.max(0, Math.floor(v * chapters.length)));
    setIndex((prev) => (prev === next ? prev : next));
  });

  return (
    <section id="visao" ref={ref} style={{ height: `${chapters.length * 100}vh` }} className="relative bg-black">
      <div className="sticky top-0 h-screen overflow-hidden">
        {chapters.map((c, k) => (
          <motion.div
            key={c.id}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: k === index ? 1 : 0 }}
            transition={{ duration: 0.8, ease }}
          >
            <Image
              src={mediaImage(c.id, c.fallback)}
              alt=""
              fill
              sizes="100vw"
              quality={85}
              className="object-cover"
            />
          </motion.div>
        ))}

        {/* Véus: leitura do texto à direita e rodapé da imagem */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 md:bg-gradient-to-l md:from-black/80 md:via-black/30 md:to-transparent" />

        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-[1600px] px-5 pb-16 sm:px-8 md:pb-0 lg:px-14">
            <div className="md:ml-auto md:w-[42%] lg:w-[36%]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease }}
                >
                  <h2 className="text-4xl font-semibold text-white sm:text-5xl">{chapters[index].title}</h2>
                  <p className="body-mono mt-5 text-white/90">{chapters[index].text}</p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex gap-2" aria-hidden="true">
                {chapters.map((c, k) => (
                  <span
                    key={c.id}
                    className={`h-px flex-1 transition-colors duration-300 ${k === index ? "bg-white" : "bg-white/25"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
