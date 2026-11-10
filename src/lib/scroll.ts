import { useEffect } from "react";
import type Lenis from "lenis";

/**
 * Rolagem da página: guarda a instância do Lenis (criada em <SmoothScroll />) e trava o
 * fundo enquanto um modal/menu está aberto. Sem Lenis (ex.: "reduzir movimento"), cai na
 * rolagem nativa — as mesmas funções continuam funcionando.
 */
let lenis: Lenis | null = null;
let locks = 0;

export function setLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

function lockScroll() {
  locks += 1;
  if (locks > 1) return;
  lenis?.stop(); // o Lenis põe .lenis-stopped (overflow: clip) no <html>
  if (!lenis) document.documentElement.style.overflow = "hidden";
}

function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks > 0) return;
  lenis?.start();
  document.documentElement.style.overflow = "";
}

/** Trava a rolagem do fundo enquanto `active` for verdadeiro (modais, menu). */
export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return;
    lockScroll();
    return unlockScroll;
  }, [active]);
}

/** Rola até a seção (respeita o scroll-padding-top da pílula). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}
