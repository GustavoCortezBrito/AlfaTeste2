"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] bg-[#0a1128] flex items-center justify-center">
        <div className="relative z-10 flex flex-col items-center space-y-8">
          <div className="relative w-32 h-32 bg-[#1e2940] rounded-2xl flex items-center justify-center shadow-2xl">
            <Image
              src="/logotipo.png"
              alt="Alfa Esquadrias"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    );
  }

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    scale: Math.random() * 0.3 + 0.2,
    duration: Math.random() * 4 + 3,
  }));

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0a1128] flex items-center justify-center">
      {/* Background particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-0.5 h-0.5 bg-slate-500/20 rounded-full"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: particle.scale,
              opacity: 0.3,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-cyan-500/30" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-500/30" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-cyan-500/30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-500/30" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with glow effect */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Glow effect */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cyan-400/60 rounded-2xl blur-3xl"
            style={{ width: "180%", height: "180%", left: "-40%", top: "-40%" }}
          />
          
          {/* Secondary glow */}
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-blue-500/50 rounded-2xl blur-2xl"
            style={{ width: "160%", height: "160%", left: "-30%", top: "-30%" }}
          />
          
          {/* Logo square */}
          <div className="relative w-32 h-32 bg-[#1e2940] rounded-2xl flex items-center justify-center shadow-2xl">
            <Image
              src="/logotipo.png"
              alt="Alfa Esquadrias"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </motion.div>

        {/* Company name */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold text-white mb-2">
            Alfa Esquadrias
          </h1>
          <p className="text-sm text-slate-400 tracking-wide">
            Esquadrias de Alumínio
          </p>
        </motion.div>

        {/* Loading dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-cyan-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Loading bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden"
        >
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ width: "50%" }}
          />
        </motion.div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-slate-600 text-sm"
        >
          Carregando experiência...
        </motion.p>
      </div>
    </div>
  );
}
