'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface ImageCarouselProps {
  images: string[]
  autoPlay?: boolean
  interval?: number
  className?: string
  enableModal?: boolean
}

export default function ImageCarousel({ 
  images, 
  autoPlay = true, 
  interval = 5000,
  className = '',
  enableModal = false
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const openModal = (index: number) => {
    console.log('openModal called', { enableModal, index })
    if (enableModal) {
      setModalIndex(index)
      setIsModalOpen(true)
    }
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const nextModalImage = () => {
    setModalIndex(modalIndex === images.length - 1 ? 0 : modalIndex + 1)
  }

  const prevModalImage = () => {
    setModalIndex(modalIndex === 0 ? images.length - 1 : modalIndex - 1)
  }

  return (
    <>
      <div className={`relative overflow-hidden rounded-xl ${className}`}>
        {/* Imagens */}
        <div 
          className="relative aspect-video cursor-pointer"
          onClick={() => enableModal && openModal(currentIndex)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 60vw"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Botões de navegação */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-300 backdrop-blur-sm z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-300 backdrop-blur-sm z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>

          {/* Contador */}
          <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full z-10">
            <span className="text-white text-sm font-medium">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Indicador de clique (se modal habilitado) */}
          {enableModal && (
            <div className="absolute top-4 left-4 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full z-10">
              <span className="text-white text-xs">
                Clique para ampliar
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Botão fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navegação anterior */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                prevModalImage()
              }}
              className="absolute left-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            {/* Navegação próxima */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                nextModalImage()
              }}
              className="absolute right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Imagem principal */}
            <motion.div
              key={modalIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[modalIndex]}
                alt={`Imagem ${modalIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </motion.div>

            {/* Contador */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="text-white text-sm">
                {modalIndex + 1} / {images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}