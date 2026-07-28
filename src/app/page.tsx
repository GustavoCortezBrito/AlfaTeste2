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

      {/* Layer 3 — page content */}
      <main className="min-h-screen text-slate-100 flex flex-col relative selection:bg-cyan-500 selection:text-slate-950">
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
