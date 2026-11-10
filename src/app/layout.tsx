import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SeoContent from "@/components/SeoContent";

// Corpo: Barlow · Títulos: Barlow Condensed (caixa-alta) · Rótulos de dados: JetBrains Mono
const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const label = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-label",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alfaesquadrias.com.br/"),
  
  // SEO Básico
  title: {
    default: "Alfa Esquadrias | Alumínio e Vidros - Presidente Prudente SP",
    template: "%s | Alfa Esquadrias"
  },
  description:
    "Esquadrias de alumínio sob medida em Presidente Prudente. Portas pivotantes, janelas, box, pele de vidro. Orçamento grátis!",
  
  keywords: [
    // Principais
    "esquadrias de alumínio presidente prudente",
    "vidros temperados presidente prudente",
    "alfa esquadrias",
    // Produtos específicos
    "portas pivotantes alumínio",
    "janelas de alumínio sob medida",
    "pele de vidro presidente prudente",
    "box de vidro temperado",
    "guarda corpo de vidro",
    "cortina de vidro",
    "fachada de vidro",
    "janelas integradas",
    "esquadrias modernas",
    // Localização
    "esquadrias presidente prudente sp",
    "vidraçaria presidente prudente",
    "serralheria alumínio presidente prudente",
    // Long-tail
    "instalação de esquadrias de alumínio",
    "esquadrias de alumínio preto fosco",
    "janelas de alumínio preto",
    "portas de alumínio com vidro",
    "box de banheiro vidro temperado",
  ],
  
  authors: [{ name: "Alfa Esquadrias de Alumínio", url: "https://www.alfaesquadrias.com.br/" }],
  creator: "Alfa Esquadrias de Alumínio",
  publisher: "Alfa Esquadrias de Alumínio",
  
  // Configurações de formatação
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  
  // OpenGraph (Facebook, LinkedIn)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.alfaesquadrias.com.br/",
    siteName: "Alfa Esquadrias de Alumínio",
    title: "Alfa Esquadrias | Esquadrias de Alumínio e Vidros Temperados em Presidente Prudente",
    description:
      "Especialista em esquadrias de alumínio sob medida e vidros temperados em Presidente Prudente - SP. Portas pivotantes, janelas integradas, pele de vidro, box e muito mais. Orçamento grátis!",
    images: [
      {
        url: "/fachada.png",
        width: 1080,
        height: 830,
        alt: "Alfa Esquadrias - Fachada com Esquadrias de Alumínio",
        type: "image/png",
      },
      {
        url: "/logotipo.png",
        width: 510,
        height: 510,
        alt: "Logo Alfa Esquadrias de Alumínio",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Alfa Esquadrias | Esquadrias de Alumínio em Presidente Prudente",
    description:
      "Esquadrias de alumínio sob medida, vidros temperados, portas pivotantes e muito mais. Atendimento em Presidente Prudente e região.",
    images: ["/fachada.png"],
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verificação
  verification: {
    google: "google826bdce28952f5c3",
    // Adicione outros quando tiver
  },
  
  // Informações de categoria
  category: "Construção e Reformas",
  
  // Alternativas de idioma (se tiver versões em outros idiomas)
  alternates: {
    canonical: "https://www.alfaesquadrias.com.br/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD para dados estruturados (SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Organização
      {
        "@type": "Organization",
        "@id": "https://www.alfaesquadrias.com.br/#organization",
        name: "Alfa Esquadrias de Alumínio",
        url: "https://www.alfaesquadrias.com.br/",
        logo: {
          "@type": "ImageObject",
          url: "https://www.alfaesquadrias.com.br/logotipo.png",
          width: 510,
          height: 510,
        },
        image: "https://www.alfaesquadrias.com.br/fachada.png",
        description:
          "Especialista em esquadrias de alumínio sob medida e vidros temperados em Presidente Prudente - SP",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Joaquim Constantino, 1880",
          addressLocality: "Presidente Prudente",
          addressRegion: "SP",
          postalCode: "19050-220",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -22.120583,
          longitude: -51.421629,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+55-18-3904-5308",
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: "Portuguese",
        },
        sameAs: [
          "https://www.instagram.com/alfaesquadriaspp/",
          "https://wa.me/551839045308",
        ],
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
      },
      // Website
      {
        "@type": "WebSite",
        "@id": "https://www.alfaesquadrias.com.br/#website",
        url: "https://www.alfaesquadrias.com.br/",
        name: "Alfa Esquadrias de Alumínio",
        description:
          "Esquadrias de alumínio e vidros temperados sob medida em Presidente Prudente - SP",
        publisher: {
          "@id": "https://www.alfaesquadrias.com.br/#organization",
        },
        inLanguage: "pt-BR",
      },
      // Local Business
      {
        "@type": "LocalBusiness",
        "@id": "https://www.alfaesquadrias.com.br/#localbusiness",
        name: "Alfa Esquadrias de Alumínio",
        image: "https://www.alfaesquadrias.com.br/fachada.png",
        telephone: "+55-18-3904-5308",
        email: "contato@alfaesquadrias.com.br",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Joaquim Constantino, 1880",
          addressLocality: "Presidente Prudente",
          addressRegion: "SP",
          postalCode: "19050-220",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -22.120583,
          longitude: -51.421629,
        },
        url: "https://www.alfaesquadrias.com.br/",
        priceRange: "$$",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
        ],
        areaServed: {
          "@type": "City",
          name: "Presidente Prudente",
          address: {
            "@type": "PostalAddress",
            addressRegion: "SP",
            addressCountry: "BR",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Produtos e Serviços",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Portas Pivotantes de Alumínio",
                description: "Portas pivotantes sob medida em alumínio",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Janelas Integradas",
                description: "Janelas de alumínio com blackout integrado",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pele de Vidro",
                description: "Fachadas envidraçadas com estrutura de alumínio",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Box de Vidro Temperado",
                description: "Box para banheiro em vidro temperado",
              },
            },
          ],
        },
      },
      // Breadcrumb
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.alfaesquadrias.com.br/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.alfaesquadrias.com.br/",
          },
        ],
      },
    ],
  };

  return (
    <html lang="pt-BR" className={`${body.variable} ${display.variable} ${label.variable} scroll-smooth dark`}>
      <head>
        {/* Favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#05080d" />
        <meta name="theme-color" content="#05080d" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-ink-950 text-paper antialiased selection:bg-steel-300 selection:text-ink-950 flex flex-col">
        <SeoContent />
        {children}
      </body>
    </html>
  );
}

