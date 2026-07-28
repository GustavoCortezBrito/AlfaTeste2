"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";
import CalculatorModal from "@/components/CalculatorModal";
import FacadeModal from "@/components/FacadeModal";
import GlobalParticles from "@/components/GlobalParticles";
import Marquee from "@/components/Marquee";
import Loading from "@/components/Loading";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorProduct, setCalculatorProduct] = useState<string | undefined>(undefined);
  const [isFacadeOpen, setIsFacadeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenCalculator = (productName?: string) => {
    setCalculatorProduct(productName);
    setIsCalculatorOpen(true);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/*
        ── 3-layer background system ─────────────────────────────────────────
        Layer 1 (deepest):  dark bg div           z-index: -2
        Layer 2 (middle):   particle canvas        z-index: -1
        Layer 3 (top):      main content (auto)    z-index: auto / 0
        ─────────────────────────────────────────────────────────────────────
        Sections WITHOUT backgrounds → transparent → particles + dark bg show
        Sections WITH backgrounds (Hero, Footer) → cover particles (correct)
      */}

      {/* Layer 1 — solid dark background (scrollbar + FOUC fix) */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -2,
          background: "#090d16",
        }}
      />

      {/* Layer 2 — particle canvas */}
      <GlobalParticles />

      {/* Layer 3 — página content */}
      <main className="min-h-screen text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950">
        {/* Conteúdo SEO - H1 e parágrafos ocultos visualmente mas presentes no HTML */}
        <div className="sr-only" aria-hidden="false">
          <h1>Alfa Esquadrias de Alumínio - Esquadrias Sob Medida em Presidente Prudente SP</h1>
          
          <h2>Especialista em Esquadrias de Alumínio e Vidros Temperados</h2>
          <p>
            A Alfa Esquadrias é especialista em fabricação e instalação de esquadrias de alumínio sob medida e vidros temperados em Presidente Prudente - SP. 
            Com mais de 15 anos de experiência no mercado, oferecemos soluções completas para projetos residenciais, comerciais e corporativos em toda a região.
          </p>
          
          <h2>Nossos Produtos e Serviços</h2>
          <p>
            Trabalhamos com uma linha completa de produtos em alumínio: <a href="#produtos">portas pivotantes em alumínio</a>, 
            <a href="#produtos">janelas integradas com blackout</a>, <a href="#produtos">pele de vidro para fachadas modernas</a>, 
            <a href="#produtos">box de banheiro em vidro temperado</a>, <a href="#produtos">guarda-corpos</a>, 
            <a href="#produtos">cortina de vidro</a>, <a href="#produtos">portas de correr</a> e muito mais.
          </p>
          
          <h3>Perfis de Alumínio de Alta Qualidade</h3>
          <p>
            Utilizamos perfis de alumínio de alta qualidade nas linhas Suprema, Gold e Minimalista, com acabamento em preto fosco, 
            anodizado natural ou cores especiais. Todos os nossos produtos são fabricados sob medida para garantir encaixe perfeito 
            e durabilidade contra intempéries.
          </p>
          
          <h3>Garantia e Instalação Profissional</h3>
          <p>
            Atendemos toda a região de <a href="#contato">Presidente Prudente</a> com garantia de 5 anos na fabricação, 
            <a href="#contato">orçamento gratuito</a> e <a href="#diferenciais">instalação profissional</a>. 
            Nossa equipe técnica realiza medição de precisão in loco, fabricação sob medida e instalação completa com acabamento impecável.
          </p>
          
          <h3>Entre em Contato</h3>
          <p>
            Entre em contato pelo <a href="https://wa.me/551839045308">WhatsApp (18) 3904-5308</a> ou visite nosso 
            <a href="#sobre">showroom</a> na Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente - SP, CEP 19050-220. 
            Confira nosso <a href="#portfolio">portfólio de projetos realizados</a> e tire suas <a href="#faq">dúvidas frequentes</a>.
          </p>
          
          <h2>Catálogo de Produtos</h2>
          <ul>
            <li><a href="#produtos">Portas Pivotantes de Alumínio</a> - Entrada imponente com fechamento termoacústico</li>
            <li><a href="#produtos">Janelas Integradas com Blackout</a> - Controle total de iluminação</li>
            <li><a href="#produtos">Pele de Vidro e Fachadas Envidraçadas</a> - Design moderno e sofisticado</li>
            <li><a href="#produtos">Box de Banheiro em Vidro Temperado</a> - Segurança e elegância</li>
            <li><a href="#produtos">Guarda-Corpos de Vidro</a> - Proteção com visibilidade total</li>
            <li><a href="#produtos">Cortina de Vidro</a> - Integração de ambientes</li>
            <li><a href="#produtos">Portas de Correr</a> - Economia de espaço</li>
            <li><a href="#produtos">Janelas de Alumínio Sob Medida</a> - Ventilação e iluminação natural</li>
          </ul>
          
          <h2>Áreas de Atendimento</h2>
          <p>
            Atendemos Presidente Prudente e toda região do Oeste Paulista com excelência. 
            <a href="#sobre">Conheça mais sobre nossa empresa</a> e veja nossos <a href="#diferenciais">diferenciais técnicos</a>.
          </p>
          
          <nav aria-label="Links rápidos">
            <ul>
              <li><a href="#hero">Início</a></li>
              <li><a href="#sobre">Sobre a Alfa Esquadrias</a></li>
              <li><a href="#produtos">Produtos e Serviços</a></li>
              <li><a href="#diferenciais">Diferenciais Técnicos</a></li>
              <li><a href="#portfolio">Portfólio de Obras</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
              <li><a href="#contato">Contato e Orçamento</a></li>
              <li><a href="/privacidade">Política de Privacidade</a></li>
              <li><a href="/termos">Termos de Serviço</a></li>
            </ul>
          </nav>
          
          <h2>Informações de Contato</h2>
          <address>
            <strong>Alfa Esquadrias de Alumínio</strong><br />
            Av. Joaquim Constantino, 1880<br />
            Vila Nova Prudente<br />
            Presidente Prudente - SP<br />
            CEP: 19050-220<br />
            Telefone: <a href="tel:1839045308">(18) 3904-5308</a><br />
            WhatsApp: <a href="https://wa.me/551839045308">(18) 3904-5308</a><br />
            Horário: Segunda a Sexta, 08:00 às 18:00
          </address>
        </div>

        <Navbar onOpenCalculator={() => handleOpenCalculator()} />

        <Hero
          onOpenCalculator={() => handleOpenCalculator()}
          onOpenFacadeModal={() => setIsFacadeOpen(true)}
        />

        <Marquee />

        <AboutSection onOpenFacadeModal={() => setIsFacadeOpen(true)} />

        <ServicesSection
          onSelectProductForQuote={(p) => handleOpenCalculator(p)}
        />

        <Marquee reverse />

        <DifferentialsSection />

        <PortfolioSection
          onOpenCalculatorWithProduct={(p) => handleOpenCalculator(p)}
        />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection />

        <Footer />
      </main>

      {/* Modals — above main, below WA */}
      <CalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialProduct={calculatorProduct}
      />

      <FacadeModal
        isOpen={isFacadeOpen}
        onClose={() => setIsFacadeOpen(false)}
      />

      {/* WhatsApp — highest z-index */}
      <WhatsAppFloating />
    </>
  );
}
