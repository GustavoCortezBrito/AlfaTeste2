"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, PhoneCall } from "lucide-react";

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

const projects: PortfolioItem[] = [
  { 
    id: "1", 
    title: "Esquadrias de Alumínio Residencial — Acabamento Premium", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/.jpeg", 
    description: "Projeto residencial completo com esquadrias de alumínio em acabamento premium, incluindo janelas integradas e portas com design moderno." 
  },
  { 
    id: "2", 
    title: "Box de Banheiro em Vidro Temperado — Suíte Master", 
    category: "vidros", 
    categoryLabel: "Vidros & Interiores", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/box.jpeg", 
    description: "Box de banheiro em vidro temperado 8mm com ferragens de alta qualidade e acabamento impecável." 
  },
  { 
    id: "3", 
    title: "Box de Vidro Premium — Banheiro Moderno", 
    category: "vidros", 
    categoryLabel: "Vidros & Interiores", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/box2.jpeg", 
    description: "Box de vidro temperado incolor com acabamento sofisticado e ferragens cromadas de primeira linha." 
  },
  { 
    id: "4", 
    title: "Marquise em Vidro e Alumínio — Entrada Principal", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/marquise.jpeg", 
    description: "Marquise moderna em vidro temperado com estrutura de alumínio, proporcionando proteção e elegância na entrada." 
  },
  { 
    id: "5", 
    title: "Cobertura em Vidro — Área Externa", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/marquise2.jpeg", 
    description: "Cobertura em vidro temperado com perfis de alumínio, ideal para áreas externas e varandas." 
  },
  { 
    id: "6", 
    title: "Marquise de Vidro — Design Arquitetônico", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/marquise3.jpeg", 
    description: "Sistema de cobertura em vidro com estrutura minimalista em alumínio, desenvolvido sob medida." 
  },
  { 
    id: "7", 
    title: "Porta de Alumínio Premium — Entrada Residencial", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/porta.jpeg", 
    description: "Porta de entrada em alumínio com vidro temperado, design sofisticado e segurança garantida." 
  },
  { 
    id: "8", 
    title: "Porta de Correr em Alumínio — Área Interna", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/portadecorrer.jpeg", 
    description: "Porta de correr em alumínio de alta performance com excelente vedação e design clean." 
  },
  { 
    id: "9", 
    title: "Sistema de Portas de Correr — Divisória Elegante", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/portadecorrer2.jpeg", 
    description: "Portas de correr em alumínio com vidro, perfeitas para integração de ambientes com estilo." 
  },
  { 
    id: "10", 
    title: "Portão de Alumínio Residencial — Entrada Principal", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/portao.jpeg", 
    description: "Portão de alumínio robusto com design moderno, ideal para entradas residenciais de alto padrão." 
  },
  { 
    id: "11", 
    title: "Portão em Alumínio Premium — Segurança e Design", 
    category: "residencial", 
    categoryLabel: "Residencial", 
    location: "Presidente Prudente · SP", 
    image: "/projetos-reais/portao2.jpeg", 
    description: "Portão de entrada em alumínio de alta resistência com acabamento premium e sistema de segurança integrado." 
  },
];

const filters = [
  { id: "todos", label: "Todos" },
  { id: "residencial", label: "Residencial" },
  { id: "comercial", label: "Comercial" },
  { id: "vidros", label: "Vidros" },
];

export default function PortfolioSection({ onOpenCalculatorWithProduct }: PortfolioSectionProps) {
  const [filter, setFilter] = useState<string>("todos");
  const [activeImage, setActiveImage] = useState<PortfolioItem | null>(null);

  const filtered = filter === "todos" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center max-w-3xl mx-auto px-4 sm:px-6"
        >
          <p className="section-label mb-3">Portfólio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
            Projetos concluídos em
            <br />Presidente Prudente
          </h2>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 px-4 sm:px-0">
            {filters.map((btn, index) => (
              <motion.button
                key={btn.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                  filter === btn.id
                    ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25"
                    : "bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10"
                }`}
              >
                {btn.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              key={project.id}
              onClick={() => setActiveImage(project)}
              className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-cyan-500/30 transition-colors duration-500"
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent group-hover:from-slate-950/95 transition-all duration-500" />

              <motion.div 
                className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/50 border border-white/10 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              </motion.div>

              <motion.div 
                className="absolute bottom-4 left-4 right-4"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.6, ease: "easeOut" }}
              >
                <motion.p 
                  className="text-[10px] font-bold uppercase text-cyan-400 tracking-wider mb-1"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  {project.categoryLabel}
                </motion.p>
                <motion.h3 
                  className="text-white font-semibold text-sm leading-snug line-clamp-2"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0f1623] border border-white/8 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
            >
              <div className="relative h-72 bg-slate-950">
                <Image src={activeImage.image} alt={activeImage.title} fill className="object-cover" />
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-4 bg-black/60 border border-white/10 text-white p-2 rounded-full hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6 space-y-3">
                <p className="text-xs font-bold uppercase text-cyan-500 tracking-wider">{activeImage.categoryLabel} · {activeImage.location}</p>
                <h3 className="text-lg font-bold text-white">{activeImage.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{activeImage.description}</p>

                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <button
                    onClick={() => setActiveImage(null)}
                    className="text-slate-500 hover:text-white text-xs font-semibold cursor-pointer transition"
                  >
                    Fechar
                  </button>
                  <button
                    onClick={() => {
                      const t = activeImage.title;
                      setActiveImage(null);
                      onOpenCalculatorWithProduct(t);
                    }}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2.5 px-5 rounded-xl flex items-center space-x-2 transition cursor-pointer"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Quero um Projeto Semelhante</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
