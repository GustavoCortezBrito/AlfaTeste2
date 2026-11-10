import { Star } from "lucide-react";
import SectionHeader from "./SectionHeader";

// Avaliações reais do Perfil da Empresa no Google (nota 5,0 · 6 avaliações, nov/2026).
// Texto fiel ao original; só ajustei espaçamento de pontuação.
const reviews = [
  {
    name: "Flávio Ap. Teixeira Llorente",
    meta: "Local Guide · avaliação no Google",
    comment:
      "Conheci a Alfa Esquadrias em 2025, fechei um orçamento com eles e já gostei do produto entregue, qualidade dos produtos, pessoal da instalação bem educados e o melhor tem retorno no pós-venda, não deixam a gente na mão. Conclusão: em 2026 fechei outra obra com eles. Recomendo com excelência. A, o melhor, respondem rapidamente.",
  },
  {
    name: "Ligia Cesco",
    meta: "Avaliação no Google",
    comment:
      "Empresa te compromisso, entrega até antes do prazo, qualidade no material na instalação, tem pós-venda que é um grande diferencial. Parabéns Alfa Esquadrias!",
  },
  {
    name: "Talita",
    meta: "Local Guide · avaliação no Google",
    comment: "Boa tarde, gostaria de agradecer a atenção, o atendimento, e que ficou perfeita a instalação. Vocês são nota 1000.",
  },
  {
    name: "Rodrigo Ferreira de Lima",
    meta: "Avaliação no Google",
    comment: "Excelente profissionalismo e muita rapidez.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="border-t border-white/10 bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <SectionHeader title={<>O que dizem nossos<br />clientes</>} />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          {/* Nota geral */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-heading text-[7rem] font-semibold leading-[0.85] text-white sm:text-[9rem] lg:text-[11rem]">
              5,0
            </p>
            <div className="mt-6 flex gap-1" role="img" aria-label="Nota 5 de 5 estrelas">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
              ))}
            </div>
            <p className="label-mono mt-4">6 avaliações no Google</p>
          </div>

          {/* Avaliações */}
          <div className="divide-y divide-white/12 border-y border-white/12">
            {reviews.map((rev, i) => (
              <figure key={rev.name} className="grid gap-5 py-9 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10">
                <blockquote
                  className={`leading-relaxed text-steel-100 ${i === 0 ? "text-xl sm:text-2xl" : "text-lg"}`}
                >
                  &ldquo;{rev.comment}&rdquo;
                </blockquote>
                <figcaption className="sm:w-52 sm:text-right">
                  <span className="block font-semibold text-white">{rev.name}</span>
                  <span className="label-mono mt-1 block !normal-case !tracking-[0.04em] !text-steel-400">{rev.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
