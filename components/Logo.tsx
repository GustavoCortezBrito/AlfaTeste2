'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  className?: string
  variant?: 'default' | 'white' | 'dark'
}

export default function Logo({ className = "w-12 h-12", variant = 'default' }: LogoProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={`flex items-center ${className}`}
    >
      <Image
        src="/alfa-logo.svg"
        alt="Alfa Esquadrias Logo"
        width={48}
        height={48}
        className="w-full h-full object-contain"
        priority
      />
    </motion.div>
  )
}