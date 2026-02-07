
'use client'
import { motion } from 'framer-motion'
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp
} from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ]

  const services = [
    'Kit Sacada',
    'Coberturas',
    'Guarda Corpo',
    'Fachadas',
    'Portas e Janelas',
    'Pós Venda'
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-32 w-24 h-24 border border-white rotate-12"
        />
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-32 left-32 w-40 h-40 border border-white -rotate-12"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-28 h-28 border border-white rotate-45"
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="flex items-center space-x-3 mb-6"
              >
                <Logo 
                  className="w-12 h-12" 
                  variant="white" 
                />
                <div>
                  <h3 className="text-2xl font-bold">Alfa Esquadrias</h3>
                  <p className="text-slate-400">Esquadrias de Alumínio</p>
                </div>
              </motion.div>

              <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                Especialistas em esquadrias de alumínio, oferecendo soluções completas 
                em kit sacada, coberturas, guarda corpo, fachadas e portas para projetos 
                residenciais e comerciais em Presidente Prudente e região.
              </p>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <motion.a
                  href="tel:+5518390453080"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300 hover:text-white transition-colors duration-300">(18) 3904-5308</span>
                </motion.a>
                <motion.a
                  href="tel:+5518996718920"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300 hover:text-white transition-colors duration-300">(18) 99671-8920</span>
                </motion.a>
                <motion.a
                  href="mailto:atendimentoalfaesquadraispp@gmail.com"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-3 cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 hover:text-white transition-colors duration-300 text-sm leading-relaxed break-words">
                    atendimentoalfaesquadraispp@gmail.com
                  </span>
                </motion.a>
                <motion.a
                  href="https://maps.app.goo.gl/F6hmnDNDgG3Jgw6g7"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start space-x-3 cursor-pointer hover:text-white transition-colors duration-300"
                >
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 hover:text-white transition-colors duration-300 text-sm leading-relaxed">
                    Av. Joaquim Constantino, 1880<br />
                    Vila Nova Prudente - Presidente Prudente/SP
                  </span>
                </motion.a>
              </motion.div>

              {/* Social Media */}
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-3">Siga-nos</h4>
                <motion.a
                  href="https://www.instagram.com/alfaesquadriaspp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>@alfaesquadriaspp</span>
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Links Rápidos
              </motion.h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"
                      />
                      {link.name}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h4 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg font-semibold mb-6"
              >
                Nossos Serviços
              </motion.h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index * 0.1) + 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      onClick={() => scrollToSection('#servicos')}
                      whileHover={{ x: 5, scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                      className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center group cursor-pointer"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:bg-white transition-colors"
                      />
                      {service}
                    </motion.button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 text-slate-400 text-center sm:text-left">
                <span className="text-xs sm:text-sm">© 2026 Alfa Esquadrias. Todos os direitos reservados.</span>
                <span className="hidden sm:inline">|</span>
                <span className="text-xs sm:text-sm">
                  Desenvolvido por{' '}
                  <motion.a
                    href="https://www.instagram.com/gustavocortez.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 2 }}
                    transition={{ duration: 0.2 }}
                    className="text-blue-400 font-semibold hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Gustavo Cortez de Brito
                  </motion.a>
                  <span className="text-slate-500">, Dev Web</span>
                </span>
              </div>

              <div className="flex flex-col xs:flex-row items-center space-y-2 xs:space-y-0 xs:space-x-4 lg:space-x-6">
                <motion.a
                  href="/politica-privacidade"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer text-xs sm:text-sm"
                >
                  <span className="hidden xs:inline">Política de Privacidade</span>
                  <span className="xs:hidden">Privacidade</span>
                </motion.a>
                <motion.a
                  href="/termos-servico"
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="text-slate-400 hover:text-white transition-colors duration-300 cursor-pointer text-xs sm:text-sm"
                >
                  <span className="hidden xs:inline">Termos de Serviço</span>
                  <span className="xs:hidden">Termos</span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)"
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  )
}