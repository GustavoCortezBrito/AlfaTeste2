'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Empresa', href: '#empresa' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection('#inicio')}
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            >
              <Logo 
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" 
                variant="white" 
              />
              <div className="hidden xs:block sm:block">
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white transition-colors duration-300">
                  Alfa Esquadrias
                </h1>
                <p className="text-xs sm:text-sm text-slate-200 transition-colors duration-300">
                  Esquadrias de Alumínio
                </p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium transition-colors duration-300 hover:text-blue-400 text-white"
                >
                  {item.name}
                </motion.button>
              ))}
            </nav>

            {/* Contact Button */}
            <div className="hidden lg:flex items-center">
              <motion.button
                onClick={() => scrollToSection('#contato')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Contato</span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors duration-300 text-white hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 lg:hidden"
          >
            <div className="bg-slate-900/95 backdrop-blur-md shadow-lg border-t border-white/10">
              <div className="container mx-auto px-4 py-6">
                <nav className="space-y-4">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      whileHover={{ x: 10 }}
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-white hover:text-blue-400 font-medium py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  {/* Mobile Contact Button */}
                  <motion.button
                    onClick={() => scrollToSection('#contato')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center justify-center space-x-2 mt-4"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Entrar em Contato</span>
                  </motion.button>
                  
                  <div className="pt-4 border-t border-white/10 space-y-3">
                    <div className="text-center">
                      <p className="text-slate-300 text-sm font-medium mb-3">Fale Conosco:</p>
                      <div className="space-y-2">
                        <a 
                          href="tel:+5518996976413"
                          className="flex items-center justify-center space-x-2 text-slate-200 hover:text-white transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">(18) 99697-6413</span>
                        </a>
                        <a 
                          href="tel:+5518996718920"
                          className="flex items-center justify-center space-x-2 text-slate-200 hover:text-white transition-colors duration-300"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">(18) 99671-8920</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}