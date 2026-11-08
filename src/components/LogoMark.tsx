import { useId } from "react";

interface LogoMarkProps {
  className?: string;
  /** "metal" = gradiente prateado (padrão); "outline" = apenas contorno (marca d'água) */
  variant?: "metal" | "outline";
  title?: string;
}

/**
 * Recriação vetorial do "A" da logotipo (dois chevrons em alumínio escovado).
 * Fundo transparente — pode ser usado sobre qualquer superfície.
 */
export default function LogoMark({ className, variant = "metal", title }: LogoMarkProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `lm-grad-${uid}`;
  const shineId = `lm-shine-${uid}`;

  const outer = "75,365 203,80 320,80 445,365 385,365 262,92 135,365";
  const inner = "262,190 352,365 300,365 262,285 225,365 172,365";

  const isOutline = variant === "outline";

  return (
    <svg
      viewBox="60 70 400 305"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      fill="none"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4f6f8" />
          <stop offset="35%" stopColor="#a9aeb7" />
          <stop offset="55%" stopColor="#e3e6ea" />
          <stop offset="100%" stopColor="#6f7580" />
        </linearGradient>
        <linearGradient id={shineId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
          <stop offset="60%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {[outer, inner].map((points, i) => (
        <g key={i}>
          <polygon
            points={points}
            fill={isOutline ? "none" : `url(#${gradId})`}
            stroke={isOutline ? "currentColor" : "none"}
            strokeWidth={isOutline ? 2 : 0}
            strokeLinejoin="round"
          />
          {!isOutline && <polygon points={points} fill={`url(#${shineId})`} />}
        </g>
      ))}
    </svg>
  );
}
