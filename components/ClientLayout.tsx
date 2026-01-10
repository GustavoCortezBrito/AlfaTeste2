'use client'

import { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import ScrollProgressBar from './ScrollProgressBar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  )
}