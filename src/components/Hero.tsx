"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";

interface HeroProps {
  onOpenCalculator: () => void;
  onOpenFacadeModal: () => void;
}

export default function Hero({ onOpenCalculator }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background — fachada da empresa */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fachada.png"
          alt="Fachada Alfa Esquadrias de Alumínio — Presidente Prudente"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        
        {/* Overlay leve — foto aparente, texto legível */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/60 via-[#090d16]/40 to-[#090d16]/80" />
        <div className="absolute inset-0 bg-[#090d16]/20" />
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 lg:px-8 text-center pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Label — simples, sem pill */}
          <div>
            <p className="section-label tracking-[0.2em]">Presidente Prudente e Região</p>
          </div>

          {/* Headline */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-tight leading-[1.05]">
              Esquadrias de
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400">
                Alumínio
              </span>
              {" "}sob medida
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto px-4 sm:px-0">
              Portas, janelas, pele de vidro e vidros temperados com acabamento
              impecável para residências e comércios em Presidente Prudente.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 px-9 rounded-full transition-all duration-200 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 text-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Peça seu Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenCalculator}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/50 text-white font-semibold py-4 px-9 rounded-full transition-all duration-200 text-sm cursor-pointer w-full sm:w-auto"
            >
              <span>Simular Projeto</span>
            </button>
          </div>

          {/* Stats — apenas 3, clean */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-white/8">
            {[
              { value: "+15", label: "Anos de experiência" },
              { value: "100%", label: "Sob medida" },
              { value: "Garantia", label: "Total na instalação" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#sobre"
          className="flex flex-col items-center space-y-2 text-slate-400 hover:text-white transition group"
        >
          <span className="text-[11px] font-semibold tracking-widest uppercase">Explorar</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
