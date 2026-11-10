"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

const WORD_CLASS =
  "-mt-[2vw] text-center font-heading text-[34vw] font-bold uppercase leading-[0.8] tracking-[0.02em]";

/**
 * Marca gigante do rodapé com efeito "lanterna" (como no rodapé da referência): o nome fica
 * apagado e o cursor acende um círculo de luz metálica sobre ele.
 * Só com mouse/caneta (no toque fica a marca apagada, como antes). A luz segue o cursor com
 * uma mola curta; com "reduzir movimento" ela acompanha sem atraso.
 */
export default function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const r = useMotionValue(0);
  const follow = { stiffness: 300, damping: 34, mass: 0.6 };
  const sx = useSpring(x, follow);
  const sy = useSpring(y, follow);
  const sr = useSpring(r, { stiffness: 220, damping: 30 });

  const springMask = useMotionTemplate`radial-gradient(circle ${sr}px at ${sx}px ${sy}px, #000 0%, rgba(0,0,0,0.55) 45%, transparent 75%)`;
  const directMask = useMotionTemplate`radial-gradient(circle ${r}px at ${x}px ${y}px, #000 0%, rgba(0,0,0,0.55) 45%, transparent 75%)`;
  const mask = reduce ? directMask : springMask;

  const track = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    // raio proporcional à largura da marca (≈ meia letra)
    r.set(Math.min(Math.max(rect.width * 0.17, 140), 360));
  };

  return (
    <div
      ref={ref}
      onPointerEnter={(e) => {
        if (e.pointerType === "touch" || !ref.current) return;
        // entra já na posição do cursor (sem "viajar" do canto)
        const rect = ref.current.getBoundingClientRect();
        sx.jump(e.clientX - rect.left);
        sy.jump(e.clientY - rect.top);
        track(e);
      }}
      onPointerMove={track}
      onPointerLeave={() => r.set(0)}
      className="grain relative mt-6 h-[22vw] select-none overflow-hidden"
      aria-hidden="true"
    >
      <p className={`${WORD_CLASS} text-white/[0.07]`}>Alfa</p>
      <motion.p
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className={`${WORD_CLASS} pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-white via-steel-200 to-steel-500 bg-clip-text text-transparent`}
      >
        Alfa
      </motion.p>
    </div>
  );
}
