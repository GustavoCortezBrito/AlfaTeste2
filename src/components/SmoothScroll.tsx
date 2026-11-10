"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { setLenis } from "@/lib/scroll";

/**
 * Rolagem suave (Lenis) só na roda do mouse/trackpad: no toque a rolagem continua nativa
 * (syncTouch desligado) e, com "reduzir movimento", o Lenis nem é criado.
 * Âncoras (#secao) também rolam suave e respeitam o scroll-padding-top do <html>.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const instance = new Lenis({
      autoRaf: true,
      lerp: 0.065, // menor = mais inércia (a Bugatti desliza bem mais que o padrão)
      wheelMultiplier: 0.9,
      smoothWheel: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });
    setLenis(instance);

    return () => {
      setLenis(null);
      instance.destroy();
    };
  }, []);

  return null;
}
