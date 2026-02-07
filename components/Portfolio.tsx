'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Gallery from './Gallery'

// Tipos de categoria
type Category = 'todos' | 'kit-sacada' | 'coberturas' | 'guarda-corpo' | 'fachadas' | 'portas-janelas'

// Interface para imagens do portfólio
interface PortfolioImage {
  src: string
  category: Category
  title?: string
}

// Dados das imagens com suas respectivas categorias
// TODO: Categorizar as imagens conforme o conteúdo real de cada foto
const portfolioImages: PortfolioImage[] = [
  // IMPORTANTE: Revisar e categorizar cada imagem conforme seu conteúdo real
  // Categorias disponíveis: 'kit-sacada', 'coberturas', 'guarda-corpo', 'fachadas', 'portas-janelas'
  
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.57.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58 (4).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.58.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.59 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.59 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.59 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.47.59.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.00 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.00 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.00 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.00.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.01 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.01 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.01 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.01.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.02 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.02 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.02 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.02 (4).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.02.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.03 (1).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.03 (2).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.03 (3).jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.03.jpeg', category: 'todos' },
  { src: '/fotosServicos/WhatsApp Image 2026-01-26 at 14.48.04.jpeg', category: 'todos' },
]

// Configuração das categorias
const categories = [
  { id: 'todos' as Category, name: 'Todos', icon: '🏠' },
  { id: 'kit-sacada' as Category, name: 'Kit Sacada', icon: '🏢' },
  { id: 'coberturas' as Category, name: 'Coberturas', icon: '🏠' },
  { id: 'guarda-corpo' as Category, name: 'Guarda Corpo', icon: '🛡️' },
  { id: 'fachadas' as Category, name: 'Fachadas', icon: '🏢' },
  { id: 'portas-janelas' as Category, name: 'Portas e Janelas', icon: '🪟' },
]

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('todos')
  
  // Função para determinar quantas imagens mostrar baseado no tamanho da tela
  const getInitialImageCount = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? 6 : 12 // 6 no mobile, 12 no desktop
    }
    return 12 // Fallback para SSR
  }

  const [visibleImages, setVisibleImages] = useState(getInitialImageCount())

  // Filtrar imagens baseado na categoria selecionada
  const filteredImages = selectedCategory === 'todos' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory || img.category === 'todos')

  // Resetar visibleImages quando a categoria mudar
  useEffect(() => {
    setVisibleImages(getInitialImageCount())
  }, [selectedCategory])

  // Ajustar quando a tela for redimensionada
  useEffect(() => {
    const handleResize = () => {
      const newCount = window.innerWidth < 768 ? 6 : 12
      if (visibleImages === getInitialImageCount()) {
        setVisibleImages(newCount)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [visibleImages])

  const loadMoreImages = () => {
    const increment = typeof window !== 'undefined' && window.innerWidth < 768 ? 4 : 8
    setVisibleImages(prev => Math.min(prev + increment, filteredImages.length))
  }

  const displayedImages = filteredImages.slice(0, visibleImages).map(img => img.src)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Portfólio</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Confira alguns dos nossos trabalhos realizados. Cada projeto é executado com 
            máxima qualidade e atenção aos detalhes.
          </p>

          {/* Filtros de categoria */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm">{category.icon}</span>
                <span className="text-sm md:text-base">{category.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Contador de resultados */}
          <p className="text-slate-400 text-sm">
            {selectedCategory === 'todos' 
              ? `${portfolioImages.length} projetos no total`
              : `${filteredImages.length} projetos em ${categories.find(c => c.id === selectedCategory)?.name}`
            }
          </p>
        </motion.div>

        {/* Galeria de imagens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Gallery 
            images={displayedImages}
            className="mb-12"
          />
        </motion.div>

        {/* Botão carregar mais */}
        {visibleImages < filteredImages.length && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              onClick={loadMoreImages}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Carregar Mais Imagens
              <span className="ml-2">({filteredImages.length - visibleImages} restantes)</span>
            </button>
          </motion.div>
        )}

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-sm md:text-base opacity-90">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">5+</div>
              <div className="text-sm md:text-base opacity-90">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">100%</div>
              <div className="text-sm md:text-base opacity-90">Clientes Satisfeitos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">Pós Venda</div>
              <div className="text-sm md:text-base opacity-90">Suporte Completo</div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Gostou do que viu?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e solicite um orçamento personalizado para seu projeto. 
            Transformamos suas ideias em realidade com qualidade e excelência.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contato')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  )
}