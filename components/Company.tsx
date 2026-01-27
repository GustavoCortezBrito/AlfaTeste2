'use client'

import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const companyImages = [
  '/fotosEmpresa/WhatsApp Image 2026-01-26 at 14.44.42.jpeg',
  '/fotosEmpresa/WhatsApp Image 2026-01-26 at 14.44.26.jpeg',
  '/fotosEmpresa/WhatsApp Image 2026-01-26 at 16.12.01.jpeg',
  '/fotosEmpresa/WhatsApp Image 2026-01-26 at 16.12.011.jpeg',
]

export default function Company() {
  return (
    <section id="empresa" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Empresa</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa estrutura e ambiente de trabalho. Uma empresa moderna e bem equipada 
            para oferecer os melhores serviços em esquadrias de alumínio.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Tradição e Modernidade
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                A Alfa Esquadrias conta com uma estrutura moderna e completa para atender 
                todas as suas necessidades em esquadrias de alumínio. Nossa empresa está 
                localizada em Presidente Prudente/SP e possui equipamentos de última geração.
              </p>
              <p>
                Com 5 anos de experiência no mercado, combinamos tradição familiar com 
                tecnologia avançada para entregar produtos de alta qualidade e durabilidade.
              </p>
              <p>
                Nossa equipe é altamente qualificada e trabalha com os melhores materiais 
                do mercado, garantindo excelência em cada projeto realizado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-sm text-slate-300">Anos de Experiência</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-md border border-white/20">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-sm text-slate-300">Projetos Realizados</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <ImageCarousel 
              images={companyImages}
              className="shadow-lg"
              enableModal={true}
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Nossos Diferenciais
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Qualidade Garantida</h4>
              <p className="text-slate-300 text-sm">Materiais de primeira linha e acabamento impecável</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Prazo Cumprido</h4>
              <p className="text-slate-300 text-sm">Entrega pontual e instalação rápida</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-white mb-2">Equipe Especializada</h4>
              <p className="text-slate-300 text-sm">Profissionais experientes e qualificados</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}