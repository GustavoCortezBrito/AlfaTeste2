"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { X } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "residencial" | "comercial" | "vidros";
  categoryLabel: string;
  location: string;
  image: string;
  description: string;
}

interface PortfolioSectionProps {
  onOpenCalculatorWithProduct: (productName: string) => void;
}

// Fotos reais de projetos da Alfa (a IA do Higgsfield NÃO entra aqui)
const projects: PortfolioItem[] = [
  { id: "1", title: "Esquadrias de alumínio residencial, acabamento premium", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/residencial.webp", description: "Projeto residencial completo com esquadrias de alumínio em acabamento premium, incluindo janelas integradas e portas com design moderno." },
  { id: "2", title: "Box de banheiro em vidro temperado, suíte master", category: "vidros", categoryLabel: "Vidros e interiores", location: "Presidente Prudente, SP", image: "/projetos-reais/box.webp", description: "Box de banheiro em vidro temperado 8 mm com ferragens de alta qualidade e acabamento impecável." },
  { id: "3", title: "Box de vidro premium, banheiro moderno", category: "vidros", categoryLabel: "Vidros e interiores", location: "Presidente Prudente, SP", image: "/projetos-reais/box2.webp", description: "Box de vidro temperado incolor com acabamento sofisticado e ferragens cromadas de primeira linha." },
  { id: "4", title: "Marquise em vidro e alumínio, entrada principal", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/marquise.webp", description: "Marquise moderna em vidro temperado com estrutura de alumínio, proporcionando proteção e elegância na entrada." },
  { id: "5", title: "Cobertura em vidro, área externa", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/marquise2.webp", description: "Cobertura em vidro temperado com perfis de alumínio, ideal para áreas externas e varandas." },
  { id: "6", title: "Marquise de vidro, design arquitetônico", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/marquise3.webp", description: "Sistema de cobertura em vidro com estrutura minimalista em alumínio, desenvolvido sob medida." },
  { id: "7", title: "Porta de alumínio premium, entrada residencial", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/porta.webp", description: "Porta de entrada em alumínio com vidro temperado, design sofisticado e segurança garantida." },
  { id: "8", title: "Porta de correr em alumínio, área interna", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/portadecorrer.webp", description: "Porta de correr em alumínio de alta performance com excelente vedação e design clean." },
  { id: "9", title: "Sistema de portas de correr, divisória elegante", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/portadecorrer2.webp", description: "Portas de correr em alumínio com vidro, perfeitas para integração de ambientes com estilo." },
  { id: "10", title: "Portão de alumínio residencial, entrada principal", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/portao.webp", description: "Portão de alumínio robusto com design moderno, ideal para entradas residenciais de alto padrão." },
  { id: "11", title: "Portão em alumínio premium, segurança e design", category: "residencial", categoryLabel: "Residencial", location: "Presidente Prudente, SP", image: "/projetos-reais/portao2.webp", description: "Portão de entrada em alumínio de alta resistência com acabamento premium e sistema de segurança integrado." },
];

const filters = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "vidros", label: "Vidros" },
];

const ease = [0.23, 1, 0.32, 1] as const;
const INITIAL_COUNT = 6;

export default function PortfolioSection({ onOpenCalculatorWithProduct }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<string>("todos");
  const [activeImage, setActiveImage] = useState<PortfolioItem | null>(null);
  const [expanded, setExpanded] = useState(false);

  const filtered = filter === "todos" ? projects : projects.filter((p) => p.category === filter);
  const visible = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="portfolio" className="border-t border-white/10 bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <SectionHeader
          title="Projetos entregues"
          description="Fotos reais de obras da Alfa em Presidente Prudente e região."
          className="!mb-8"
        />

        <div role="tablist" aria-label="Filtrar projetos" className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-white/12 pb-4">
          {filters.map((btn) => (
            <button
              key={btn.id}
              role="tab"
              aria-selected={filter === btn.id}
              onClick={() => {
                setFilter(btn.id);
                setExpanded(false);
              }}
              className={`label-mono cursor-pointer pb-1 transition-colors ${
                filter === btn.id ? "!text-white underline decoration-1 underline-offset-[10px]" : "hover:!text-white"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2">
          {visible.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease }}
              className="group"
            >
              <button
                type="button"
                onClick={() => setActiveImage(project)}
                aria-label={`Ampliar: ${project.title}`}
                className="relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-md bg-ink-900"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  quality={85}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>
              <p className="label-mono mt-6">
                {project.categoryLabel}, {project.location}
              </p>
              <h3 className="mt-2 text-3xl font-semibold leading-[1.02] text-white">{project.title}</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-steel-200">{project.description}</p>
            </motion.article>
          ))}
        </div>

        {filtered.length > INITIAL_COUNT && (
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className="btn-ghost label-mono cursor-pointer rounded-md px-8 py-4 !text-white"
            >
              {expanded ? "Ver menos projetos" : `Ver todos os ${filtered.length} projetos`}
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2, ease }}
              onClick={(e) => e.stopPropagation()}
              className="panel w-full max-w-3xl overflow-hidden"
            >
              <div className="relative aspect-[16/10] bg-ink-900">
                <Image src={activeImage.image} alt={activeImage.title} fill quality={90} sizes="768px" className="object-cover" />
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  aria-label="Fechar"
                  className="absolute right-4 top-4 cursor-pointer rounded bg-black/70 p-2 text-white transition-colors hover:bg-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-3 p-6">
                <p className="label-mono">
                  {activeImage.categoryLabel}, {activeImage.location}
                </p>
                <h3 className="text-3xl font-semibold text-white">{activeImage.title}</h3>
                <p className="leading-relaxed text-steel-200">{activeImage.description}</p>

                <div className="flex items-center justify-between border-t border-white/12 pt-4">
                  <button
                    type="button"
                    onClick={() => setActiveImage(null)}
                    className="label-mono cursor-pointer !text-steel-300 transition-colors hover:!text-white"
                  >
                    Fechar
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const t = activeImage.title;
                      setActiveImage(null);
                      onOpenCalculatorWithProduct(t);
                    }}
                    className="btn-metal label-mono cursor-pointer rounded-md px-6 py-3.5 !text-ink-950"
                  >
                    Quero um projeto parecido
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
