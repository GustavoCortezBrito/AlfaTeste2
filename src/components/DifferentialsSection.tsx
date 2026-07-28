"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Palette, VolumeX, Ruler, Clock, HeartHandshake } from "lucide-react";

const items = [
  {
    icon: Palette,
    title: "Acabamento & Cores Exclusivas",
    description: "Pintura eletrostática a pó e anodização em diversas cores: Preto Fosco, Amadeirado Real, Branco Neve, Bronze e Inox.",
  },
  {
    icon: VolumeX,
    title: "Vedação & Isolamento Acústico",
    description: "Borrachas EPDM e escovas duplas que reduzem barulhos externos, infiltrações e garantem conforto térmico.",
  },
  {
    icon: Ruler,
    title: "Medição de Precisão",
    description: "Nossa equipe técnica vai até sua obra para aferir cada milímetro e orientar sobre a melhor linha de produto.",
  },
  {
    icon: ShieldCheck,
    title: "Materiais Certificados ABNT",
    description: "Alumínios e vidros de fornecedores líderes nacionais com certificação de resistência e segurança.",
  },
  {
    icon: Clock,
    title: "Prazo Rigorosamente Cumprido",
    description: "Compromisso com a sua obra. Entregamos e instalamos no prazo combinado, com cronograma transparente.",
  },
  {
    icon: HeartHandshake,
    title: "Preço Justo & Pós-Venda",
    description: "Valores competitivos, facilidade de pagamento, suporte pós-venda direto e garantia assegurada.",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="max-w-2xl mx-auto mb-14 text-center">
          <p className="section-label mb-3">Nossos Diferenciais</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Por que escolher
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
              a Alfa Esquadrias?
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="card p-6 space-y-4 group hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-7 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 border border-white/10 shadow-xl">
          <div>
            <h4 className="text-white font-bold text-base mb-2">Opções de Acabamento de Perfil</h4>
            <p className="text-slate-400 text-sm">Personalize o alumínio para combinar com a arquitetura da sua casa.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {["Preto Fosco", "Amadeirado", "Branco Neve", "Bronze", "Inox"].map((color, i) => (
              <span key={i} className="text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700 border border-white/10 hover:border-cyan-500/30 px-4 py-2 rounded-full transition-all cursor-default">
                {color}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
