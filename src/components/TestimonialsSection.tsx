import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

const reviews = [
  {
    name: "Engº Marcelo Faria",
    role: "Construtor de casas de alto padrão",
    city: "Presidente Prudente",
    comment:
      "Trabalho com a Alfa Esquadrias há mais de 5 anos em meus projetos residenciais. A precisão dos cortes, o alinhamento dos pivôs e o atendimento técnico são exemplares. Entrega no prazo sem dor de cabeça.",
  },
  {
    name: "Arqª Juliana Silveira",
    role: "Arquitetura e interiores",
    city: "Presidente Prudente",
    comment:
      "Recomendo aos meus clientes de olhos fechados. As portas pivotantes e janelas minimalistas da Alfa têm um acabamento de altíssimo nível. A equipe de instalação é limpa e extremamente cuidadosa.",
  },
  {
    name: "Carlos Eduardo Menezes",
    role: "Proprietário residencial",
    city: "Álvares Machado",
    comment:
      "Fizemos todas as esquadrias em alumínio preto fosco e os boxes de vidro temperado da nossa casa com a Alfa. Orçamento transparente, preço justo e suporte pós-venda nota 10!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-t border-white/10 bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <SectionHeader title={<>O que dizem nossos<br />clientes e parceiros</>} />

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-3">
          {reviews.map((rev) => (
            <figure key={rev.name} className="flex flex-col justify-between gap-8 border-t border-white/25 pt-6">
              <div className="space-y-5">
                <div className="flex gap-0.5" role="img" aria-label="Avaliação: 5 de 5 estrelas">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-lg leading-relaxed text-steel-100">
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
              </div>
              <figcaption>
                <span className="block text-lg font-semibold text-white">{rev.name}</span>
                <span className="label-mono mt-1 block !normal-case !tracking-[0.04em] !text-steel-400">
                  {rev.role}, {rev.city}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
