import { LOGO_INNER, LOGO_OUTER, LOGO_VIEWBOX } from "./LogoMark";

/**
 * Tela de marca (~1,7 s) sobre a página já renderizada: o "A" é desenhado em traço,
 * ganha o preenchimento metálico e a cortina sobe revelando o Hero.
 *
 * Animação 100% CSS (classes .loader-* em globals.css): começa no primeiro paint, antes
 * da hidratação, e roda fora da thread principal enquanto o JS ainda carrega.
 * Determinística (sem Math.random / window) — segura para SSR.
 */
export default function Loading() {
  return (
    <div
      className="loader fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      role="status"
      aria-label="Carregando"
    >
      <div className="flex flex-col items-center">
        <svg viewBox={LOGO_VIEWBOX} className="h-auto w-32 sm:w-40" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="loader-metal" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f4f6f8" />
              <stop offset="35%" stopColor="#a9aeb7" />
              <stop offset="55%" stopColor="#e3e6ea" />
              <stop offset="100%" stopColor="#6f7580" />
            </linearGradient>
          </defs>
          {[LOGO_OUTER, LOGO_INNER].map((points, i) => (
            <g key={points}>
              <polygon points={points} fill="url(#loader-metal)" className={`loader-fill loader-fill-${i}`} />
              <polygon
                points={points}
                pathLength={1}
                stroke="#e8ebef"
                strokeWidth={2}
                strokeLinejoin="round"
                className={`loader-stroke loader-stroke-${i}`}
              />
            </g>
          ))}
        </svg>

        <p className="loader-label label-mono mt-8 !text-white/80 !tracking-[0.32em]">Alfa Esquadrias</p>

        <div className="mt-8 h-px w-40 overflow-hidden bg-white/15" aria-hidden="true">
          <div className="loader-bar h-full w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
