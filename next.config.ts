import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
    // O Next 16 só libera qualidade 75 por padrão e rebaixa o resto: os componentes pedem
    // 85 (e o lightbox 90). Sem esta lista, tudo era servido em q=75.
    qualities: [75, 85, 90],
  },
};

export default nextConfig;
