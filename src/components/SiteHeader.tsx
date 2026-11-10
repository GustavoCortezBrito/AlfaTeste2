"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import LogoMark from "./LogoMark";
import { ADDRESS, EMAIL, MENU_LINKS, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/site";
import { scrollToId, useScrollLock } from "@/lib/scroll";

interface SiteHeaderProps {
  onOpenCalculator: () => void;
}

const ease = [0.23, 1, 0.32, 1] as const;

/**
 * Cabeçalho do topo (rola junto com a página, como na referência):
 * MENU à esquerda · marca ao centro · ORÇAMENTO à direita.
 * O MENU abre uma tela cheia; depois do Hero quem navega é a SectionNav (pílula).
 */
export default function SiteHeader({ onOpenCalculator }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  // Seção escolhida no menu: só rola depois que o menu fecha e a rolagem é destravada
  const pendingTarget = useRef<string | null>(null);

  useScrollLock(open);

  useEffect(() => {
    if (!open) {
      const target = pendingTarget.current;
      pendingTarget.current = null;
      if (target) scrollToId(target);
      return;
    }
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-40 bg-gradient-to-b from-black/60 to-transparent">
        <div className="mx-auto grid max-w-[1600px] grid-cols-[1fr_auto_1fr] items-center px-5 py-5 sm:px-8 lg:px-14 lg:py-7">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="group flex w-fit cursor-pointer items-center gap-3 text-white"
          >
            <span className="flex flex-col gap-[6px]" aria-hidden="true">
              <span className="block h-px w-6 bg-white" />
              <span className="block h-px w-6 bg-white transition-transform duration-200 group-hover:translate-x-1" />
            </span>
            <span className="label-mono !text-white">Menu</span>
          </button>

          <a href="#hero" aria-label="Alfa Esquadrias — início" className="flex items-center gap-3 text-white">
            <LogoMark className="h-auto w-9" />
            <span className="hidden font-heading text-[1.7rem] font-semibold uppercase leading-none tracking-[0.1em] sm:block">
              Alfa Esquadrias
            </span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group ml-auto flex w-fit items-center gap-3 text-white"
          >
            <span className="label-mono !text-white">Orçamento</span>
            <MessageCircle className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease }}
            data-lenis-prevent
            className="fixed inset-0 z-[70] overflow-y-auto bg-ink-950"
          >
            <div className="mx-auto flex min-h-full max-w-[1600px] flex-col px-5 py-5 sm:px-8 lg:px-14 lg:py-7">
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                className="flex w-fit cursor-pointer items-center gap-3 text-white"
              >
                <X className="h-6 w-6" aria-hidden="true" />
                <span className="label-mono !text-white">Fechar</span>
              </button>

              <div className="grid flex-1 grid-cols-1 gap-12 py-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20 lg:py-16">
                <nav aria-label="Seções" className="flex flex-col">
                  {MENU_LINKS.map((link, i) => (
                    <motion.a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        pendingTarget.current = link.id;
                        setOpen(false);
                      }}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: 0.05 + i * 0.04, ease }}
                      className="border-b border-white/10 py-3 font-heading text-5xl font-semibold uppercase leading-none text-white transition-colors hover:text-steel-300 sm:text-6xl lg:text-7xl"
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </nav>

                <div className="flex flex-col gap-8 self-end text-sm text-steel-200">
                  <div>
                    <p className="label-mono mb-2">Atendimento</p>
                    <a href={PHONE_HREF} className="block text-lg text-white hover:text-steel-300">{PHONE_DISPLAY}</a>
                    <a href={`mailto:${EMAIL}`} className="block text-white hover:text-steel-300">{EMAIL}</a>
                  </div>
                  <div>
                    <p className="label-mono mb-2">Loja</p>
                    <p className="text-white">{ADDRESS}</p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-metal label-mono !text-ink-950 rounded-md px-6 py-4 text-center"
                    >
                      Pedir orçamento
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        onOpenCalculator();
                      }}
                      className="btn-ghost label-mono !text-white cursor-pointer rounded-md px-6 py-4"
                    >
                      Simular projeto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
