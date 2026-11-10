"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { X } from "lucide-react";
import { useScrollLock } from "@/lib/scroll";

type Category = "portas" | "portoes" | "vidros" | "comercial";

const CATEGORY_LABEL: Record<Category, string> = {
  portas: "Portas e janelas",
  portoes: "Portões",
  vidros: "Vidros",
  comercial: "Comercial",
};

interface PortfolioItem {
  id: string;
  title: string;
  category: Category;
  location: string;
  image: string;
  description: string;
}

interface PortfolioSectionProps {
  onOpenCalculatorWithProduct: (productName: string) => void;
}

const PP = "Presidente Prudente, SP";
const REGIAO = "Presidente Prudente e região";

// Fotos reais de obras da Alfa (a IA do Higgsfield NÃO entra aqui). A ordem é a de "Todos":
// os 6 primeiros (visíveis antes de expandir) cobrem tipos diferentes de obra.
const projects: PortfolioItem[] = [
  { id: "piscina", title: "Esquadrias pretas na área da piscina", category: "portas", location: REGIAO, image: "/projetos-reais/piscina-esquadrias-pretas.webp", description: "Janela de correr e porta em alumínio preto voltadas para a área da piscina." },
  { id: "patio", title: "Panos de vidro em volta do pátio", category: "portas", location: PP, image: "/projetos-reais/residencial.webp", description: "Portas de correr em alumínio preto, do piso ao teto, fechando o pátio interno da casa." },
  { id: "ripado", title: "Portão ripado amadeirado", category: "portoes", location: REGIAO, image: "/projetos-reais/fachada-ripada.webp", description: "Portão e painel em alumínio ripado com acabamento amadeirado, na fachada de uma residência." },
  { id: "showroom", title: "Showroom da Alfa", category: "comercial", location: PP, image: "/projetos-reais/showroom-alfa.webp", description: "Janela de perfil preto do piso ao teto e painel ripado no nosso showroom, na Av. Joaquim Constantino." },
  { id: "portao-social", title: "Portão social em alumínio preto", category: "portoes", location: REGIAO, image: "/projetos-reais/portao-social-preto.webp", description: "Portão de pedestres em alumínio preto com lâminas horizontais." },
  { id: "box-dourado", title: "Box de vidro com perfis dourados", category: "vidros", location: PP, image: "/projetos-reais/box2.webp", description: "Box de vidro temperado incolor com perfis em acabamento dourado, em banheiro de mármore." },
  { id: "porta-veneziana-vidro", title: "Porta com vidro jateado e veneziana", category: "portas", location: REGIAO, image: "/projetos-reais/porta-vidro-veneziana.webp", description: "Porta de alumínio preto com vidros jateados e painel de veneziana." },
  { id: "garagem-preto", title: "Portão de garagem preto", category: "portoes", location: REGIAO, image: "/projetos-reais/portao-garagem-preto.webp", description: "Portão de garagem em alumínio preto com lâminas horizontais e ventilação na base." },
  { id: "janela-cozinha", title: "Janela de correr na cozinha", category: "portas", location: REGIAO, image: "/projetos-reais/janela-cozinha.webp", description: "Janela de correr de quatro folhas em alumínio preto sobre a bancada da cozinha." },
  { id: "pergolado", title: "Pergolado com cobertura de vidro", category: "vidros", location: REGIAO, image: "/projetos-reais/pergolado-vidro.webp", description: "Cobertura de vidro sobre estrutura de alumínio preto num corredor externo." },
  { id: "porta-correr-veneziana", title: "Porta de correr com veneziana", category: "portas", location: REGIAO, image: "/projetos-reais/porta-correr-veneziana.webp", description: "Porta de correr em alumínio preto com folhas de veneziana para ventilar e escurecer o ambiente." },
  { id: "garagem-branco", title: "Portão de garagem branco", category: "portoes", location: REGIAO, image: "/projetos-reais/portao-garagem-branco.webp", description: "Portão de garagem em alumínio branco com lâminas de ventilação." },
  { id: "janela-branca", title: "Janela veneziana branca", category: "portas", location: REGIAO, image: "/projetos-reais/janela-veneziana-branca.webp", description: "Janela de correr com folhas de veneziana em alumínio branco." },
  { id: "porta-enrolar", title: "Porta de enrolar comercial", category: "comercial", location: REGIAO, image: "/projetos-reais/porta-enrolar-comercial.webp", description: "Porta de enrolar em alumínio preto na fachada de um prédio comercial." },
  { id: "portadecorrer", title: "Porta de correr em alumínio, área interna", category: "comercial", location: PP, image: "/projetos-reais/portadecorrer.webp", description: "Portas de correr em alumínio preto com vidro, separando ambientes de um salão." },
  { id: "portadecorrer2", title: "Sistema de portas de correr, divisória elegante", category: "comercial", location: PP, image: "/projetos-reais/portadecorrer2.webp", description: "Portas de correr em alumínio com vidro integrando ambientes." },
  { id: "porta-entrada", title: "Porta de entrada em alumínio preto", category: "portas", location: PP, image: "/projetos-reais/porta.webp", description: "Porta de entrada em alumínio preto com puxador vertical." },
  { id: "portao-almofadado", title: "Portão de alumínio almofadado", category: "portoes", location: PP, image: "/projetos-reais/portao2.webp", description: "Portão de garagem em alumínio preto com painéis almofadados." },
  { id: "box-preto", title: "Box de canto com perfis pretos", category: "vidros", location: PP, image: "/projetos-reais/box.webp", description: "Box de canto em vidro temperado com perfis pretos." },
  { id: "marquise", title: "Marquise em vidro e alumínio, entrada principal", category: "vidros", location: PP, image: "/projetos-reais/marquise.webp", description: "Marquise em vidro temperado com estrutura de alumínio, protegendo a entrada." },
  { id: "cobertura", title: "Cobertura em vidro, área externa", category: "vidros", location: PP, image: "/projetos-reais/marquise2.webp", description: "Cobertura em vidro temperado com perfis de alumínio sobre área externa." },
  { id: "marquise-vista-de-cima", title: "Marquise de vidro, design arquitetônico", category: "vidros", location: PP, image: "/projetos-reais/marquise3.webp", description: "Cobertura em vidro com estrutura minimalista em alumínio, feita sob medida." },
];

const filters: { id: "todos" | Category; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "portas", label: CATEGORY_LABEL.portas },
  { id: "portoes", label: CATEGORY_LABEL.portoes },
  { id: "vidros", label: CATEGORY_LABEL.vidros },
  { id: "comercial", label: CATEGORY_LABEL.comercial },
];

const ease = [0.23, 1, 0.32, 1] as const;
const INITIAL_COUNT = 6;

export default function PortfolioSection({ onOpenCalculatorWithProduct }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<string>("todos");
  const [activeImage, setActiveImage] = useState<PortfolioItem | null>(null);
  const [expanded, setExpanded] = useState(false);

  useScrollLock(activeImage !== null);

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
                {CATEGORY_LABEL[project.category]} · {project.location}
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
                  {CATEGORY_LABEL[activeImage.category]} · {activeImage.location}
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
