"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Check, X } from "lucide-react";

interface ServiceItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ServicesSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

const categories = [
  { id: "todos", label: "Todos" },
  { id: "esquadrias", label: "Esquadrias" },
  { id: "vidros", label: "Vidros temperados" },
  { id: "fachadas", label: "Pele de vidro" },
  { id: "guardacorpo", label: "Guarda-corpos" },
];

const products: ServiceItem[] = [
  {
    id: "1",
    category: "esquadrias",
    tag: "Linha high-end",
    title: "Portas pivotantes e painéis ripados",
    description:
      "Portas de entrada imponentes em alumínio de alta espessura com pivôs reforçados, fechaduras digitais e puxadores em aço inox. Resistentes ao sol e à chuva.",
    features: ["Linha Suprema, Gold ou Minimalista", "Pintura eletrostática (preto fosco, amadeirado, inox)", "Alturas sob medida até 6 metros", "Fechamento termoacústico vedado"],
    image: "/porta-pivotante.webp",
  },
  {
    id: "2",
    category: "esquadrias",
    tag: "Blackout total",
    title: "Janelas integradas automáticas",
    description:
      "Janelas com persianas integradas de enrolar em alumínio. Isolamento acústico e blackout total para dormitórios, acionadas via controle remoto ou assistente virtual.",
    features: ["Palhetas de alumínio com preenchimento", "Isolamento térmico e acústico superior", "Automação silenciosa bivolt", "Telas mosquiteiras integradas opcionais"],
    image: "/janela-integrada.webp",
  },
  {
    id: "3",
    category: "fachadas",
    tag: "Fachada envidraçada",
    title: "Pele de vidro (curtain wall)",
    description:
      "Sistema de fachadas estruturais em vidro espelhado ou laminado com perfis ocultos de alumínio. Valorizam a arquitetura e aproveitam a iluminação natural.",
    features: ["Vidros refletivos de controle solar", "Vedação EPDM com estanqueidade total", "Projeto estrutural e medição de precisão", "Sem manutenção externa recorrente"],
    image: "/pele-de-vidro.webp",
  },
  {
    id: "4",
    category: "vidros",
    tag: "Vidro temperado",
    title: "Box para banheiro e divisórias",
    description:
      "Box de banheiro em vidro temperado 8 mm e 10 mm com roldanas de latão ou inox. Divisórias de vidro para escritórios e ambientes gourmet.",
    features: ["Vidro temperado 8 mm e 10 mm certificado", "Kits de roldanas aparente inox, preto ou bronze", "Película de segurança opcional", "Vedação contra vazamentos de água"],
    image: "/box-banheiro.webp",
  },
  {
    id: "5",
    category: "vidros",
    tag: "Cortina de vidro",
    title: "Fechamento de sacadas e varandas",
    description:
      "Painéis de vidro retráteis sem perfis verticais para fechamento de sacadas, varandas e áreas gourmet. Abertura de 100% dos painéis.",
    features: ["Abertura total deslizante e articulada", "Proteção contra chuva, vento e poeira", "Trava de segurança para crianças", "Trilhos em alumínio anodizado de alta resistência"],
    image: "/janela-integrada.webp",
  },
  {
    id: "6",
    category: "guardacorpo",
    tag: "Segurança",
    title: "Guarda-corpos e pergolados",
    description:
      "Guarda-corpos para sacadas, escadas e mezaninos em alumínio anodizado e vidro laminado temperado. Coberturas e pergolados com vidro de controle solar.",
    features: ["Norma ABNT NBR 14718 atendida", "Fixações em inox imunes à corrosão", "Colunas minimalistas ou torre botom inox", "Design elegante sem poluição visual"],
    image: "/porta-pivotante.webp",
  },
];

const ease = [0.23, 1, 0.32, 1] as const;

export default function ServicesSection({ onSelectProductForQuote }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [selectedProduct, setSelectedProduct] = useState<ServiceItem | null>(null);

  const filtered = activeTab === "todos" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section id="produtos" className="border-t border-white/10 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <SectionHeader
          title="Produtos"
          description="Cada projeto é medido na obra e fabricado para o seu vão, com perfis de alta durabilidade e vedação que isola calor e barulho."
          className="!mb-8"
        />

        <div role="tablist" aria-label="Filtrar produtos" className="mb-12 flex flex-wrap gap-x-7 gap-y-3 border-b border-white/12 pb-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeTab === cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`label-mono cursor-pointer pb-1 transition-colors ${
                activeTab === cat.id
                  ? "!text-white underline decoration-1 underline-offset-[10px]"
                  : "hover:!text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <motion.article
              layout
              key={product.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, ease }}
              className="group flex flex-col"
            >
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                aria-label={`Ver detalhes: ${product.title}`}
                className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden rounded-md bg-ink-900"
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  quality={85}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </button>

              <p className="label-mono mt-6">{product.tag}</p>
              <h3 className="mt-2 text-3xl font-semibold leading-[1.02] text-white">{product.title}</h3>
              <p className="mt-4 line-clamp-4 leading-relaxed text-steel-200">{product.description}</p>

              <div className="mt-6 flex items-center gap-6">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(product)}
                  className="label-mono cursor-pointer !text-white underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-60"
                >
                  Detalhes
                </button>
                <button
                  type="button"
                  onClick={() => onSelectProductForQuote(product.title)}
                  className="label-mono cursor-pointer !text-white underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-60"
                >
                  Pedir orçamento
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            key="product-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease }}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.title}
            onClick={() => setSelectedProduct(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 8 }}
              transition={{ duration: 0.2, ease }}
              onClick={(e) => e.stopPropagation()}
              className="panel relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden"
            >
              <div className="relative h-56 w-full shrink-0 bg-ink-900">
                <Image src={selectedProduct.image} alt={selectedProduct.title} fill quality={85} sizes="672px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1119] via-transparent to-transparent" />
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  aria-label="Fechar"
                  className="absolute right-4 top-4 cursor-pointer rounded bg-black/70 p-2 text-white transition-colors hover:bg-black"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-5 overflow-y-auto p-6">
                <div>
                  <p className="label-mono">{selectedProduct.tag}</p>
                  <h3 className="mt-2 text-4xl font-semibold text-white">{selectedProduct.title}</h3>
                </div>
                <p className="leading-relaxed text-steel-100">{selectedProduct.description}</p>
                <ul className="divide-y divide-white/12 border-y border-white/12">
                  {selectedProduct.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 py-3 text-steel-100">
                      <Check className="h-4 w-4 shrink-0 text-steel-300" aria-hidden="true" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/12 p-5">
                <button
                  type="button"
                  onClick={() => setSelectedProduct(null)}
                  className="label-mono cursor-pointer !text-steel-300 transition-colors hover:!text-white"
                >
                  Fechar
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedProduct.title;
                    setSelectedProduct(null);
                    onSelectProductForQuote(title);
                  }}
                  className="btn-metal label-mono cursor-pointer rounded-md px-6 py-3.5 !text-ink-950"
                >
                  Pedir orçamento
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
