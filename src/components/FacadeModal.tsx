"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { mediaImage } from "@/lib/media";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF, whatsappLink } from "@/lib/site";
import { useScrollLock } from "@/lib/scroll";

interface FacadeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ease = [0.23, 1, 0.32, 1] as const;

/** Fachada da loja (foto real ampliada) + endereço e contato. */
export default function FacadeModal({ isOpen, onClose }: FacadeModalProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useScrollLock(isOpen);

  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="facade"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="facade-title"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.2, ease }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="panel relative max-h-[92vh] w-full max-w-3xl overflow-y-auto"
          >
            <div className="relative aspect-[16/9] w-full bg-ink-900">
              <Image
                src={mediaImage("about-wide", "/fachada.webp")}
                alt="Fachada da loja da Alfa Esquadrias, na Av. Joaquim Constantino, em Presidente Prudente"
                fill
                quality={85}
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1119] via-transparent to-transparent" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="absolute right-4 top-4 cursor-pointer rounded bg-black/70 p-2 text-white transition-colors hover:bg-black"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-5 p-6">
              <div>
                <p className="label-mono">Showroom e fábrica própria</p>
                <h3 id="facade-title" className="mt-2 text-4xl font-semibold text-white">
                  Alfa Esquadrias em Presidente Prudente
                </h3>
              </div>

              <p className="leading-relaxed text-steel-100">
                Venha conhecer nosso espaço: amostras dos perfis de alumínio (linhas Suprema, Gold e
                Minimalista), vidros temperados e atendimento técnico para o seu projeto.
              </p>

              <ul className="divide-y divide-white/12 border-y border-white/12">
                <li className="flex items-center gap-3 py-3 text-steel-100">
                  <MapPin className="h-4 w-4 shrink-0 text-steel-300" aria-hidden="true" />
                  {ADDRESS}
                </li>
                <li className="flex items-center gap-3 py-3">
                  <Phone className="h-4 w-4 shrink-0 text-steel-300" aria-hidden="true" />
                  <a href={PHONE_HREF} className="text-steel-100 transition-colors hover:text-white">
                    {PHONE_DISPLAY}
                  </a>
                </li>
              </ul>

              <div className="flex items-center justify-between gap-4 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="label-mono cursor-pointer !text-steel-300 transition-colors hover:!text-white"
                >
                  Fechar
                </button>
                <a
                  href={whatsappLink("Olá, gostaria de agendar uma visita ao showroom da Alfa Esquadrias.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metal label-mono flex items-center gap-2.5 rounded-md px-6 py-3.5 !text-ink-950"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Agendar visita
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
