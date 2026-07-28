"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowUpRight, Info, X } from "lucide-react";

interface ServiceItem {
  id: string;
  category: string;
  tag: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface ServicesSectionProps {
  onSelectProductForQuote: (productName: string) => void;
}

export default function ServicesSection({ onSelectProductForQuote }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>("todos");
  const [selectedProduct, setSelectedProduct] = useState<ServiceItem | null>(null);

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "esquadrias", label: "Esquadrias" },
    { id: "vidros", label: "Vidros Temperados" },
    { id: "fachadas", label: "Pele de Vidro" },
    { id: "guardacorpo", label: "Guarda-Corpos" },
  ];

  const products: ServiceItem[] = [
    {
      id: "1",
      category: "esquadrias",
      tag: "Linha High-End",
      title: "Portas Pivotantes & Painéis Ripados",
      description: "Portas de entrada imponentes em alumínio de alta espessura com pivôs reforçados, fechaduras digitais e puxadores em aço inox. Resistentes ao sol e à chuva.",
      features: ["Linha Suprema, Gold ou Minimalista", "Pintura eletrostática (Preto Fosco, Amadeirado, Inox)", "Alturas sob medida até 6 metros", "Fechamento termoacústico vedado"],
      image: "/porta-pivotante.png",
      popular: true,
    },
    {
      id: "2",
      category: "esquadrias",
      tag: "Blackout Total",
      title: "Janelas Integradas Automáticas",
      description: "Janelas com persianas integradas de enrolar em alumínio. Isolamento acústico e blackout total para dormitórios, acionadas via controle remoto ou assistente virtual.",
      features: ["Palhetas de alumínio com preenchimento", "Isolamento térmico e acústico superior", "Automação silenciosa bivolt", "Telas mosquiteiras integradas opcionais"],
      image: "/janela-integrada.png",
      popular: true,
    },
    {
      id: "3",
      category: "fachadas",
      tag: "Fachada Envidraçada",
      title: "Pele de Vidro (Curtain Wall)",
      description: "Sistema de fachadas estruturais em vidro espelhado ou laminado com perfis oculares de alumínio. Valorizam a arquitetura e aproveitam a iluminação natural.",
      features: ["Vidros refletivos de controle solar", "Vedação EPDM com estanqueidade total", "Projeto estrutural e medição de precisão", "Zero manutenção externa recorrente"],
      image: "/pele-de-vidro.png",
    },
    {
      id: "4",
      category: "vidros",
      tag: "Vidro Temperado",
      title: "Box para Banheiro & Divisórias",
      description: "Box de banheiro em vidro temperado 8mm/10mm com roldanas de latão ou inox. Divisórias de vidro para escritórios e ambientes gourmet.",
      features: ["Vidro temperado 8mm e 10mm certificado", "Kits de roldanas aparente inox / preto / bronze", "Película de segurança opcional", "Vedação contra vazamentos de água"],
      image: "/box-banheiro.png",
      popular: true,
    },
    {
      id: "5",
      category: "vidros",
      tag: "Cortina de Vidro",
      title: "Fechamento de Sacadas & Varandas",
      description: "Painéis de vidro retráteis sem perfis verticais para fechamento de sacadas, varandas e áreas gourmet. Abertura 100% dos painéis.",
      features: ["Abertura total deslizante e articulada", "Proteção contra chuva, vento e poeira", "Trava de segurança para crianças", "Trilhos em alumínio anodizado de alta resistência"],
      image: "/janela-integrada.png",
    },
    {
      id: "6",
      category: "guardacorpo",
      tag: "Segurança",
      title: "Guarda-Corpos & Pergolados",
      description: "Guarda-corpos para sacadas, escadas e mezaninos em alumínio anodizado e vidro laminado temperado. Coberturas e pergolados com vidro de controle solar.",
      features: ["Norma ABNT NBR 14718 atendida", "Fixações em inox imunes à corrosão", "Colunas minimalistas ou torre botom inox", "Design elegante sem poluição visual"],
      image: "/porta-pivotante.png",
    },
  ];

  const filteredProducts =
    activeTab === "todos" ? products : products.filter((p) => p.category === activeTab);

  return (
    <section id="produtos" className="relative py-24 section-alt border-t border-white/5 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <p className="section-label mb-3">Catálogo & Soluções</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Esquadrias de alumínio e<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500 animate-gradient">
              vidros sob medida
            </span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Projetos sob medida com matérias-primas de alta durabilidade, estética e isolamento termoacústico.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center flex-wrap gap-2.5 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat.id
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                  : "bg-slate-800/70 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              key={product.id}
              className="card flex flex-col group hover:border-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden rounded-t-[1.2rem] bg-slate-950">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
                {product.popular && (
                  <motion.span
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="absolute top-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/50"
                  >
                    Destaque
                  </motion.span>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  className="text-[11px] font-semibold text-cyan-500 uppercase tracking-wider mb-1"
                >
                  {product.tag}
                </motion.p>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  className="text-base font-bold text-white mb-2 leading-snug"
                >
                  {product.title}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-4"
                >
                  {product.description}
                </motion.p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.4 + (i * 0.1) }}
                      className="flex items-center space-x-2 text-xs text-slate-400"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.7 }}
                  className="flex items-center gap-2 pt-4 border-t border-white/5"
                >
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center space-x-1.5 transition cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Detalhes</span>
                  </button>
                  <button
                    onClick={() => onSelectProductForQuote(product.title)}
                    className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold py-2.5 px-4 rounded-xl flex items-center space-x-1 transition cursor-pointer"
                  >
                    <span>Cotar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0f1623] border border-white/8 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <div className="relative h-56 w-full bg-slate-950">
                <Image src={selectedProduct.image} alt={selectedProduct.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f1623] via-[#0f1623]/40 to-transparent" />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-slate-950/80 border border-white/10 text-white p-2 rounded-full hover:bg-slate-800 transition cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-5 left-6">
                  <p className="text-xs font-bold uppercase text-cyan-500 tracking-wider mb-1">{selectedProduct.tag}</p>
                  <h3 className="text-xl font-bold text-white">{selectedProduct.title}</h3>
                </div>
              </div>

              <div className="p-6 space-y-5 overflow-y-auto">
                <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center space-x-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-slate-950/50 border-t border-white/5 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="text-slate-400 hover:text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition cursor-pointer"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const title = selectedProduct.title;
                    setSelectedProduct(null);
                    onSelectProductForQuote(title);
                  }}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs py-2.5 px-6 rounded-xl flex items-center space-x-2 transition cursor-pointer"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
