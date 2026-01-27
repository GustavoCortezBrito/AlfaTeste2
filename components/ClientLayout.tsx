'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ScrollProgressBar from './ScrollProgressBar'
import LoadingScreen from './LoadingScreen'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 segundos

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <ScrollProgressBar />
          {children}
        </>
      )}
    </>
  )
}