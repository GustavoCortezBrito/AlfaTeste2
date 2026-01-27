'use client'

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Alfa Esquadrias",
    "description": "Especialistas em esquadrias de alumínio, kit sacada, coberturas, guarda corpo, fechadas e portas em Presidente Prudente/SP",
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
    "openingHours": [
      "Mo-Fr 08:00-18:00"
    ],
    "serviceArea": {
      "@type": "State",
      "name": "São Paulo"
    },
    "priceRange": "$$",
    "image": [
      "https://alfaesquadrias.com.br/alfa-logo.svg",
      "https://alfaesquadrias.com.br/opengraph-image.svg"
    ],
    "logo": "https://alfaesquadrias.com.br/alfa-logo.svg",
    "sameAs": [
      "https://www.instagram.com/alfaesquadriaspp/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Esquadrias de Alumínio",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kit Sacada",
            "description": "Kits completos para sacadas com guarda-corpo e fechamento em vidro temperado"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Coberturas Metálicas",
            "description": "Coberturas metálicas para garagens, áreas de lazer e espaços comerciais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Guarda Corpo",
            "description": "Guarda-corpos em alumínio e vidro para segurança e elegância"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fechadas",
            "description": "Fechamento de áreas com esquadrias de alumínio e vidro"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Portas e Janelas",
            "description": "Portas e janelas de alumínio com design moderno e funcionalidade"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Alfa Esquadrias",
    "url": "https://alfaesquadrias.com.br",
    "description": "Site oficial da Alfa Esquadrias - Especialistas em esquadrias de alumínio em Presidente Prudente/SP",
    "publisher": {
      "@type": "Organization",
      "name": "Alfa Esquadrias",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alfaesquadrias.com.br/alfa-logo.svg"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://alfaesquadrias.com.br/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://alfaesquadrias.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serviços",
        "item": "https://alfaesquadrias.com.br#servicos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Sobre",
        "item": "https://alfaesquadrias.com.br#sobre"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contato",
        "item": "https://alfaesquadrias.com.br#contato"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}