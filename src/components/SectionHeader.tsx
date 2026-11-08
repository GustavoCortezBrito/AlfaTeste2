import type { ReactNode } from "react";

interface SectionHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Título de seção no estilo da referência: condensada em caixa-alta, sem rótulo acima,
 * com uma frase de apoio. Estático — o movimento fica para a rolagem das imagens e
 * para as respostas a ações do usuário.
 */
export default function SectionHeader({
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 max-w-3xl lg:mb-14 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <h2 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{title}</h2>
      {description && (
        <p className="mt-5 max-w-prose text-lg leading-relaxed text-steel-200/90">{description}</p>
      )}
    </div>
  );
}
