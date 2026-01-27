'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Clock } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.querySelector('#servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-16 lg:pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/20"></div>
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"
          />
          <motion.div 
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"
          />
          <motion.div 
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.15, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 -rotate-12"
          />
          <motion.div 
            animate={{ 
              rotate: [0, -360],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rotate-45"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight px-4 sm:px-0"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Transformamos
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Seus Projetos
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              em Realidade
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Kit sacada, coberturas, guarda corpo, fechadas e portas de alumínio de alta qualidade em Presidente Prudente/SP
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 px-4 sm:px-0"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 w-full sm:w-auto justify-center"
            >
              <span>Solicitar Orçamento</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="group bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 w-full sm:w-auto justify-center flex items-center"
            >
              Nossos Serviços
            </motion.button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4 sm:px-0 mb-20 sm:mb-24 lg:mb-32"
          >
            <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
              <motion.div 
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20"
              >
                <Shield className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-3">Qualidade Garantida</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Materiais de primeira linha e acabamento impecável</p>
            </div>

            <div className="flex flex-col items-center text-center mb-8 sm:mb-0">
              <motion.div 
                whileHover={{ 
                  scale: 1.1, 
                  rotate: -5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20"
              >
                <Clock className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-3">Entrega Rápida</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Prazos cumpridos e instalação eficiente</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <motion.div 
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20"
              >
                <Award className="w-8 h-8 text-blue-400" />
              </motion.div>
              <h3 className="text-white font-semibold mb-3">Experiência</h3>
              <p className="text-slate-400 text-sm leading-relaxed">5 anos de experiência no mercado de esquadrias</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}