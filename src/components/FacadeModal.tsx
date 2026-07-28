"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, Building, ExternalLink } from "lucide-react";

interface FacadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FacadeModal({ isOpen, onClose }: FacadeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-slate-950/80 border border-slate-700 text-white p-2 rounded-full hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Facade Image */}
          <div className="relative h-80 sm:h-[400px] w-full bg-slate-950">
            <Image
              src="/fachada.png"
              alt="Alfa Esquadrias Fachada da Loja em Presidente Prudente"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          </div>

          {/* Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-xs uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Showroom & Fábrica Própria</span>
            </div>

            <h3 className="text-2xl font-bold text-white">
              Alfa Esquadrias de Alumínio - Presidente Prudente
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              Venha conhecer nosso espaço em Presidente Prudente! Contamos com catálogo físico de amostras de perfis de alumínio (Suprema, Gold, Minimalista), vidros temperados e consultoria técnica especializada para o seu projeto.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
              <div className="flex items-center space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Av. Joaquim Constantino, 1880 - Presidente Prudente</span>
              </div>

              <div className="flex items-center space-x-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Telefone/WhatsApp: (18) 3904-5308</span>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-white text-xs font-semibold"
              >
                Fechar
              </button>

              <a
                href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ao%20showroom%20da%20Alfa%20Esquadrias."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 px-5 rounded-xl flex items-center space-x-2 transition shadow-md"
              >
                <span>Falar no WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
