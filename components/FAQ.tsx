'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Vocês fazem a instalação dos produtos?",
      answer: "Fazemos a instalação sim! Oferecemos serviço completo, desde a fabricação até a instalação com nossa equipe técnica especializada."
    },
    {
      question: "Vocês atendem em outras cidades além de Presidente Prudente?",
      answer: "Atendemos Presidente Prudente e região. Entre em contato para verificar se atendemos sua cidade específica."
    },
    {
      question: "Como funciona o orçamento?",
      answer: "Fazemos o orçamento sem compromisso e enviamos para aprovação do cliente. O orçamento é totalmente gratuito e sem obrigação."
    },
    {
      question: "Vocês fazem manutenção dos produtos instalados?",
      answer: "Sim, fazemos manutenção dos nossos produtos caso necessário. Oferecemos suporte completo para todos os produtos que instalamos."
    },
    {
      question: "Vocês trabalham com produtos personalizados?",
      answer: "Fazemos os pedidos sob medida e personalizados de acordo com o pedido do cliente. Cada projeto é desenvolvido conforme suas necessidades específicas."
    },
    {
      question: "Qual é o prazo de entrega dos produtos?",
      answer: "Prazo de entrega a combinar. O prazo varia conforme a complexidade e personalização do projeto, sempre acordado previamente com o cliente."
    },
    {
      question: "Os produtos são resistentes às intempéries?",
      answer: "Os produtos são resistentes às intempéries! Utilizamos materiais de alta qualidade que suportam as condições climáticas."
    },
    {
      question: "Quais linhas de produtos vocês oferecem?",
      answer: "Trabalhamos com linha Suprema e linha Gold, oferecendo diferentes opções de qualidade e acabamento para atender às necessidades de cada cliente."
    },
    {
      question: "Quais tipos de portões vocês fabricam?",
      answer: "Fabricamos portão basculante e portão social, além de outros produtos em alumínio personalizados conforme a necessidade do cliente."
    },
    {
      question: "Vocês trabalham com outros produtos além de portões?",
      answer: "Sim! Trabalhamos com diversas linhas de produtos: Linha Suprema, Linha Gold, Linha Vidro Temperado, Linha Portões de Alumínio, Linha Ripado, Linha Lambril, Linha Fachada Cobertura (incluindo pergolados), ACM, Espelho, Guarda Corpo/Sacada/Corrimão, além de kit sacada, coberturas, guarda-corpos e fachadas."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
            <HelpCircle className="w-4 h-4 mr-2" />
            Perguntas Frequentes
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Dúvidas Sobre
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Esquadrias de Alumínio?
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Encontre respostas para as principais dúvidas sobre nossos produtos e serviços. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                className="w-full px-6 py-6 text-left flex items-center justify-between transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-blue-400" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="border-t border-white/10 pt-4">
                        <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/25">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas e 
              ajudar você a escolher a melhor solução em esquadrias de alumínio.
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
              Fale Conosco Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}