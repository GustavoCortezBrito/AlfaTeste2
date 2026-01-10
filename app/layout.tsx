import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://alfaesquadrias.com.br'),
  title: {
    default: 'Alfa Esquadrias - Esquadrias de Alumínio em Presidente Prudente',
    template: '%s | Alfa Esquadrias'
  },
  description: 'Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fechadas e portas em Presidente Prudente/SP. Qualidade, durabilidade e design moderno.',
  keywords: ['esquadrias de alumínio', 'kit sacada', 'coberturas', 'guarda corpo', 'fechadas', 'portas e janelas', 'Presidente Prudente', 'São Paulo', 'vidraçaria', 'serralheria'],
  authors: [{ name: 'Alfa Esquadrias' }],
  creator: 'Alfa Esquadrias',
  publisher: 'Alfa Esquadrias',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://alfaesquadrias.com.br',
    siteName: 'Alfa Esquadrias',
    title: 'Alfa Esquadrias - Esquadrias de Alumínio em Presidente Prudente',
    description: 'Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fechadas e portas em Presidente Prudente/SP.',
    images: [
      {
        url: 'https://alfaesquadrias.com.br/opengraph-image.svg',
        width: 1200,
        height: 630,
        alt: 'Alfa Esquadrias - Esquadrias de Alumínio',
        type: 'image/svg+xml',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alfa Esquadrias - Esquadrias de Alumínio em Presidente Prudente',
    description: 'Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fechadas e portas.',
    images: ['https://alfaesquadrias.com.br/opengraph-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/alfa-logo.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        {/* Geo tags */}
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="Presidente Prudente" />
        <meta name="geo.position" content="-22.125600;-51.388100" />
        <meta name="ICBM" content="-22.125600, -51.388100" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://alfaesquadrias.com.br" />
        
        {/* Meta tags adicionais para SEO */}
        <meta name="language" content="pt-BR" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="classification" content="business" />
        <meta name="category" content="esquadrias de alumínio, construção civil" />
        
        {/* PWA */}
        <meta name="theme-color" content="#1e293b" />
        <meta name="msapplication-TileColor" content="#1e293b" />
        
        {/* Schema.org para rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Alfa Esquadrias",
            "description": "Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo e fechadas",
            "url": "https://alfaesquadrias.com.br",
            "telephone": ["+5518996976413", "+5518996718920"],
            "email": "atendimentoalfaesquadriaspp@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. Joaquim Constantino, 1880",
              "addressLocality": "Presidente Prudente",
              "addressRegion": "SP",
              "postalCode": "19050-220",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-22.125600",
              "longitude": "-51.388100"
            },
            "serviceArea": {
              "@type": "State",
              "name": "São Paulo"
            },
            "priceRange": "$",
            "image": "https://alfaesquadrias.com.br/alfa-logo.svg",
            "logo": "https://alfaesquadrias.com.br/alfa-logo.svg",
            "sameAs": [
              "https://www.instagram.com/alfaesquadriaspp/"
            ]
          })}
        </script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}