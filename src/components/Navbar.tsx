"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ArrowRight, MessageCircle } from "lucide-react";

interface NavbarProps {
  onOpenCalculator: () => void;
}

export default function Navbar({ onOpenCalculator }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Produtos", href: "#produtos" },
    { name: "Diferenciais", href: "#diferenciais" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center space-x-3 group shrink-0">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-800/60 border border-white/10 p-1.5 transition-all group-hover:border-cyan-500/40">
              <Image src="/logotipo.png" alt="Alfa Esquadrias" fill className="object-contain" priority />
            </div>
            <div>
              <span className="block text-sm font-bold tracking-widest text-white uppercase">Alfa Esquadrias</span>
              <span className="block text-[10px] tracking-wider text-slate-400 uppercase">Alumínio & Vidros</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-200 font-medium ${
                scrolled
                  ? "text-slate-400 hover:text-white"
                  : "text-white/80 hover:text-white"
              }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:1839045308"
              className="flex items-center space-x-2 text-sm text-slate-400 hover:text-white transition"
            >
              <Phone className="w-4 h-4 text-cyan-500" />
              <span>(18) 3904-5308</span>
            </a>
            <a
              href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold px-5 py-2.5 rounded-full transition flex items-center space-x-2 shadow-lg shadow-cyan-500/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[64px] left-0 right-0 z-40 bg-[#0a0f1e]/98 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition text-sm font-medium"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                <a
                  href="tel:1839045308"
                  className="flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold py-3 px-4 rounded-xl transition"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Ligar</span>
                </a>
                <a
                  href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
