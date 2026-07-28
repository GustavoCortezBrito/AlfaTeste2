"use client";

import { motion } from "framer-motion";

const items = [
  "Portas Pivotantes",
  "Janelas de Alumínio",
  "Pele de Vidro",
  "Box de Vidro Temperado",
  "Guarda-Corpos",
  "Fechamento de Sacadas",
  "Perfis de Alumínio",
  "Vidros Laminados",
  "Esquadrias sob Medida",
  "Coberturas em Vidro",
  "Janelas Integradas",
  "Pergolados de Alumínio",
];

// Double the array for seamless looping
const doubled = [...items, ...items];

interface MarqueeProps {
  reverse?: boolean;
}

export default function Marquee({ reverse = false }: MarqueeProps) {
  return (
    <div className="relative py-5 border-y border-white/5 overflow-hidden select-none">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-[#090d16] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-[#090d16] to-transparent pointer-events-none" />

      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex items-center whitespace-nowrap"
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[11px] font-bold text-slate-500 px-5 tracking-widest uppercase hover:text-slate-300 transition duration-300 cursor-default">
              {item}
            </span>
            <span className="text-cyan-500/40 text-base font-light">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
