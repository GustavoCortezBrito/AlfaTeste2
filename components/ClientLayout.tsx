'use client'

import ScrollProgressBar from './ScrollProgressBar'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgressBar />
      {children}
    </>
  )
}