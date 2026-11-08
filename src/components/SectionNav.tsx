"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PILL_LINKS } from "@/lib/site";

/**
 * Pílula branca flutuante (como a sub-navegação da referência).
 * Aparece depois do Hero, marca a seção ativa com sublinhado e tem "Voltar ao topo".
 */
export default function SectionNav() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = PILL_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          aria-label="Seções da página"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3"
        >
          <div className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-lg bg-paper p-2 text-ink-950 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.7)]">
            <span className="hidden px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-950 md:block">
              Alfa Esquadrias
            </span>
            {PILL_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                className={`whitespace-nowrap px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-950 transition-opacity hover:opacity-60 ${
                  active === link.id ? "underline decoration-1 underline-offset-[6px]" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#hero"
              className="whitespace-nowrap rounded bg-neutral-200 px-3 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-950 transition-colors hover:bg-neutral-300"
            >
              Voltar ao topo
            </a>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
