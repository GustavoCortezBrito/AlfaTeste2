'use client'

import { motion } from 'framer-motion'
import ImageCarousel from './ImageCarousel'

const featuredImages = [
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.57.jpeg',
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (1).jpeg',
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (2).jpeg',
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.59 (1).jpeg',
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.00 (1).jpeg',
  '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.01 (1).jpeg',
]

export default function FeaturedWork() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trabalhos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Destaque</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos mais recentes e veja a qualidade 
            que entregamos em cada trabalho realizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ImageCarousel 
              images={featuredImages}
              className="shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h3 className="text-3xl font-bold mb-6">
              Excelência em Cada Detalhe
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                Cada projeto é único e recebe nossa atenção total. Utilizamos materiais 
                de primeira qualidade e técnicas avançadas para garantir durabilidade 
                e beleza em todas as nossas instalações.
              </p>
              <p>
                Nossa equipe especializada trabalha com precisão milimétrica, 
                desde o planejamento até a instalação final, sempre respeitando 
                prazos e orçamentos acordados.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">98%</div>
                <div className="text-sm text-slate-300">Satisfação dos Clientes</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">30 dias</div>
                <div className="text-sm text-slate-300">Garantia Total</div>
              </div>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#portfolio')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="mt-8 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Ver Portfólio Completo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}