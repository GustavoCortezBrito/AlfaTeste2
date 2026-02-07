'use client'

import { NextSeo } from 'next-seo'

interface SEOProps {
  title?: string
  description?: string
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    images?: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
}

export default function SEO({
  title = 'Alfa Esquadrias - Esquadrias de Alumínio em Presidente Prudente',
  description = 'Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fachadas e portas em Presidente Prudente/SP. Qualidade, durabilidade e design moderno.',
  canonical = 'https://alfaesquadrias.com.br',
  openGraph
}: SEOProps) {
  const defaultOpenGraph = {
    type: 'website',
    locale: 'pt_BR',
    url: canonical,
    siteName: 'Alfa Esquadrias',
    title: title,
    description: description,
    images: [
      {
        url: 'https://alfaesquadrias.com.br/opengraph-image.svg',
        width: 1200,
        height: 630,
        alt: 'Alfa Esquadrias - Esquadrias de Alumínio em Presidente Prudente',
        type: 'image/svg+xml',
      },
      {
        url: 'https://alfaesquadrias.com.br/alfa-logo.svg',
        width: 512,
        height: 512,
        alt: 'Logo Alfa Esquadrias',
        type: 'image/svg+xml',
      }
    ],
  }

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        ...defaultOpenGraph,
        ...openGraph,
        images: openGraph?.images || defaultOpenGraph.images
      }}
      twitter={{
        handle: '@alfaesquadrias',
        site: '@alfaesquadrias',
        cardType: 'summary_large_image'
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: 'esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fachadas, portas e janelas, Presidente Prudente, São Paulo, vidraçaria, serralheria, alumínio, vidro temperado'
        },
        {
          name: 'author',
          content: 'Alfa Esquadrias'
        },
        {
          name: 'robots',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'googlebot',
          content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        },
        {
          name: 'geo.region',
          content: 'BR-SP'
        },
        {
          name: 'geo.placename',
          content: 'Presidente Prudente'
        },
        {
          name: 'geo.position',
          content: '-22.125600;-51.388100'
        },
        {
          name: 'ICBM',
          content: '-22.125600, -51.388100'
        },
        {
          name: 'language',
          content: 'pt-BR'
        },
        {
          name: 'revisit-after',
          content: '7 days'
        },
        {
          name: 'rating',
          content: 'general'
        },
        {
          name: 'distribution',
          content: 'global'
        },
        {
          name: 'coverage',
          content: 'worldwide'
        },
        {
          name: 'target',
          content: 'all'
        },
        {
          name: 'audience',
          content: 'all'
        },
        {
          name: 'classification',
          content: 'business'
        },
        {
          name: 'category',
          content: 'esquadrias de alumínio, construção civil'
        },
        {
          name: 'theme-color',
          content: '#1e293b'
        },
        {
          name: 'msapplication-TileColor',
          content: '#1e293b'
        }
      ]}
      additionalLinkTags={[
        {
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          href: '/favicon.svg',
          type: 'image/svg+xml'
        },
        {
          rel: 'apple-touch-icon',
          href: '/alfa-logo.svg',
          sizes: '180x180'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        }
      ]}
    />
  )
}