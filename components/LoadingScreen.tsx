'use client'

import { motion } from 'framer-motion'
import Logo from './Logo'

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Background animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: (i * 60) % 1200,
              y: (i * 40) % 800,
              scale: 0
            }}
            animate={{
              x: ((i * 60) + 200) % 1200,
              y: ((i * 40) + 150) % 800,
              scale: [0, 1, 0],
            }}
            transition={{
              duration: (i % 3) + 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 4) * 0.5
            }}
          />
        ))}
      </div>

      {/* Geometric background patterns */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rotate-12"
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo with enhanced animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            type: "spring",
            stiffness: 100
          }}
          className="mb-8 relative"
        >
          {/* Glow effect behind logo */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl"
          />
          <Logo className="w-32 h-32 mx-auto relative z-10" />
        </motion.div>
        
        {/* Company name with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-3xl font-bold text-white mb-2"
          >
            Alfa Esquadrias
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="text-slate-300 text-lg mb-8"
          >
            Esquadrias de Alumínio
          </motion.p>

          {/* Advanced loading animation */}
          <div className="flex justify-center items-center space-x-2">
            {/* Pulsing dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="w-64 mx-auto"
          >
            <div className="w-full bg-slate-700 rounded-full h-1 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity
                }}
              />
            </div>
          </motion.div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1.4
            }}
            className="text-slate-400 text-sm mt-4"
          >
            Carregando experiência...
          </motion.p>
        </motion.div>
      </div>

      {/* Animated corner accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-blue-400/50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />
        <motion.div
          className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-cyan-400/50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-blue-400/50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        />
      </div>
    </motion.div>
  )
}