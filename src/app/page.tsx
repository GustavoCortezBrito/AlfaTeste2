"use client";

import { useState, useEffect } from "react";
import { MotionConfig } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SectionNav from "@/components/SectionNav";
import Hero from "@/components/Hero";
import StoryScroll from "@/components/StoryScroll";
import SpecsTable from "@/components/SpecsTable";
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
import Loading from "@/components/Loading";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorProduct, setCalculatorProduct] = useState<string | undefined>(undefined);
  // Remonta o simulador a cada abertura: volta ao passo 1 e pré-seleciona o produto clicado
  const [calculatorKey, setCalculatorKey] = useState(0);
  const [isFacadeOpen, setIsFacadeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tela de marca curta, só por cima da página — o conteúdo já está no HTML
    // (SEO e carregamento não esperam por ela). A saída é animada em CSS (some em ~1,7 s
    // após o 1º paint); aqui só desmontamos depois disso.
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenCalculator = (productName?: string) => {
    setCalculatorProduct(productName);
    setCalculatorKey((k) => k + 1);
    setIsCalculatorOpen(true);
  };

  return (
    // reducedMotion="user": quem pede menos movimento no sistema não recebe transform
    <MotionConfig reducedMotion="user">
      {isLoading && <Loading />}
      <SmoothScroll />

      <SiteHeader onOpenCalculator={() => handleOpenCalculator()} />
      <SectionNav />

      <main className="relative flex min-h-screen flex-col bg-ink-950 text-paper">
        <Hero
          onOpenCalculator={() => handleOpenCalculator()}
          onOpenFacadeModal={() => setIsFacadeOpen(true)}
        />
        <StoryScroll />
        <SpecsTable />
        <AboutSection onOpenFacadeModal={() => setIsFacadeOpen(true)} />
        <ServicesSection onSelectProductForQuote={(p) => handleOpenCalculator(p)} />
        <DifferentialsSection />
        <PortfolioSection onOpenCalculatorWithProduct={(p) => handleOpenCalculator(p)} />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
      </main>

      <CalculatorModal
        key={calculatorKey}
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialProduct={calculatorProduct}
      />
      <FacadeModal isOpen={isFacadeOpen} onClose={() => setIsFacadeOpen(false)} />

      <WhatsAppFloating />
    </MotionConfig>
  );
}
