"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, MotionConfig } from "framer-motion";
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

export default function Home() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [calculatorProduct, setCalculatorProduct] = useState<string | undefined>(undefined);
  const [isFacadeOpen, setIsFacadeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Tela de marca curta, só por cima da página — o conteúdo já está no HTML
    // (SEO e carregamento não esperam por ela).
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenCalculator = (productName?: string) => {
    setCalculatorProduct(productName);
    setIsCalculatorOpen(true);
  };

  return (
    // reducedMotion="user": quem pede menos movimento no sistema não recebe transform
    <MotionConfig reducedMotion="user">
      <AnimatePresence>{isLoading && <Loading key="loading" />}</AnimatePresence>

      <SiteHeader onOpenCalculator={() => handleOpenCalculator()} />
      <SectionNav />

      <main className="relative flex min-h-screen flex-col bg-ink-950 text-slate-100">
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
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        initialProduct={calculatorProduct}
      />
      <FacadeModal isOpen={isFacadeOpen} onClose={() => setIsFacadeOpen(false)} />

      <WhatsAppFloating />
    </MotionConfig>
  );
}
