'use client'

import { motion } from 'framer-motion'
import { 
  ArrowRight,
  CheckCircle,
  Wrench
} from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.57.jpeg',
      title: 'Kit Sacada',
      description: 'Kits completos para sacadas com guarda-corpo e fechamento em vidro temperado.',
      features: ['Vidros temperados', 'Perfis de alta qualidade', 'Instalação completa'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (1).jpeg',
      title: 'Coberturas',
      description: 'Coberturas metálicas para garagens, áreas de lazer e espaços comerciais.',
      features: ['Estrutura robusta', 'Telhas de qualidade', 'Projeto personalizado'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (2).jpeg',
      title: 'Guarda Corpo',
      description: 'Guarda-corpos em alumínio e vidro para segurança e elegância.',
      features: ['Normas de segurança', 'Design moderno', 'Vidro temperado'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (3).jpeg',
      title: 'Fachadas',
      description: 'Fechamento de áreas com esquadrias de alumínio e vidro.',
      features: ['Isolamento térmico', 'Proteção contra intempéries', 'Ventilação controlada'],
      color: 'from-orange-500 to-red-500'
    },
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (4).jpeg',
      title: 'Portas e Janelas',
      description: 'Portas e janelas de alumínio com design moderno e funcionalidade.',
      features: ['Diversos modelos', 'Fechaduras de segurança', 'Acabamento premium'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      image: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58.jpeg',
      title: 'Pós Venda',
      description: 'Suporte completo após a instalação com atendimento especializado.',
      features: ['Suporte técnico especializado', 'Manutenção quando necessário', 'Soluções rápidas e eficazes'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="servicos" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 left-16 w-28 h-28 border border-white/20 rotate-45"></div>
        <div className="absolute top-64 right-24 w-36 h-36 border border-white/20 -rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-32 h-32 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 border border-white/20 -rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
          >
            <Wrench className="w-4 h-4 mr-2" />
            Nossos Serviços
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Soluções Completas em
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Esquadrias de Alumínio
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Oferecemos uma ampla gama de serviços especializados em esquadrias de alumínio, 
            desde projetos residenciais até soluções industriais complexas.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-white/20 cursor-pointer"
            >
              {/* Service Image */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl overflow-hidden mb-6 shadow-lg shadow-blue-500/25 relative"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-400 font-semibold hover:text-blue-300 transition-colors"
              >
                Solicitar Orçamento
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/25">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              Precisa de um Orçamento Personalizado?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-sm sm:text-base px-4 sm:px-0">
              Nossa equipe está pronta para desenvolver a solução ideal para seu projeto. 
              Entre em contato e receba uma proposta sem compromisso.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contato')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Solicitar Orçamento Gratuito
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}