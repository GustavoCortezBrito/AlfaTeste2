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
        <div className="space-y-8">
          {/* Label — animação de fade in com slide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-label tracking-[0.2em]">Presidente Prudente e Região</p>
          </motion.div>

          {/* Headline — animação palavra por palavra */}
          <div className="space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] font-bold text-white tracking-tight leading-[1.05]">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                Esquadrias de
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400"
              >
                Alumínio
              </motion.span>
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
              >
                sob medida
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto px-4 sm:px-0"
            >
              Portas, janelas, pele de vidro e vidros temperados com acabamento
              impecável para residências e comércios em Presidente Prudente.
            </motion.p>
          </div>

          {/* CTAs — animação com bounce suave */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.a
              href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento!"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 px-9 rounded-full transition-all duration-200 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 text-sm w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Peça seu Orçamento</span>
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.a>

            <motion.button
              onClick={onOpenCalculator}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 hover:border-white/50 text-white font-semibold py-4 px-9 rounded-full transition-all duration-200 text-sm cursor-pointer w-full sm:w-auto"
            >
              <span>Simular Projeto</span>
            </motion.button>
          </motion.div>

          {/* Stats — animação em sequência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-6 border-t border-white/8"
          >
            {[
              { value: "+15", label: "Anos de experiência" },
              { value: "100%", label: "Sob medida" },
              { value: "Garantia", label: "Total na instalação" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.6 + (i * 0.1),
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="text-center"
              >
                <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
