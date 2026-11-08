"use client";

import { motion } from "framer-motion";
import LogoMark from "./LogoMark";

/**
 * Sobreposição de marca (~1,2 s) sobre a página já renderizada.
 * Determinística (sem Math.random / window) — segura para SSR.
 */
export default function Loading() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      role="status"
      aria-label="Carregando"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
        >
          <LogoMark className="h-auto w-36 sm:w-44" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="label-mono mt-8 !text-white/80 !tracking-[0.32em]"
        >
          Alfa Esquadrias
        </motion.p>

        <div className="relative mt-8 h-px w-40 overflow-hidden bg-white/15">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
