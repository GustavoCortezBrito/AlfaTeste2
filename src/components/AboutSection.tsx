"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { mediaImage } from "@/lib/media";
import { WHATSAPP_URL } from "@/lib/site";

interface AboutSectionProps {
  onOpenFacadeModal: () => void;
}

const highlights = [
  "Orçamento rápido e sem compromisso",
  "Instaladores próprios, com experiência",
  "Medição de precisão direto na sua obra",
  "Materiais certificados e garantia total",
];

/** "A Alfa": título grande + imagem larga + texto em duas colunas (bloco "Amplifying engine sounds" da referência). */
export default function AboutSection({ onOpenFacadeModal }: AboutSectionProps) {
  return (
    <section id="sobre" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <h2 className="mb-10 max-w-4xl text-5xl font-semibold text-white lg:text-7xl">
          Uma empresa nova, feita por quem vive de esquadrias há anos
        </h2>

        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-ink-900 lg:aspect-[21/9]">
          <Image
            src={mediaImage("about-wide", "/fachada.webp")}
            alt="Fachada da loja da Alfa Esquadrias, na Av. Joaquim Constantino, em Presidente Prudente"
            fill
            quality={85}
            sizes="(min-width: 1600px) 1500px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <button
            type="button"
            onClick={onOpenFacadeModal}
            className="label-mono absolute bottom-5 left-5 cursor-pointer rounded bg-paper px-4 py-3 !text-ink-950 transition-colors hover:bg-white"
          >
            Ver a fachada
          </button>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-5">
            <p className="text-xl leading-relaxed text-steel-100">
              A Alfa nasceu em Presidente Prudente pelas mãos de Claudemir e Ligia, que já trabalhavam há anos com esquadrias antes de abrir a própria empresa. Atendemos casas, comércios e obras corporativas com esquadrias de alumínio e vidros
              temperados e laminados feitos sob medida. Trabalhamos com as linhas de perfil Suprema,
              Gold e Minimalista, em preto fosco, anodizado natural e outras cores.
            </p>
            <p className="leading-relaxed text-steel-300">
              Cuidamos de cada etapa: medição na obra, fabricação, instalação e pós-venda. Por isso o
              encaixe é exato e a esquadria dura contra sol e chuva. Veja onde estamos no{" "}
              <a
                href="https://maps.app.goo.gl/54fdFQqZSHm7UL2r5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline decoration-steel-500 underline-offset-4 transition-colors hover:decoration-white"
              >
                Google Maps
              </a>
              .
            </p>
          </div>

          <div className="space-y-8">
            <ul className="divide-y divide-white/12 border-y border-white/12">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-4 py-4 text-steel-100">
                  <Check className="h-5 w-5 shrink-0 text-steel-300" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost label-mono inline-block rounded-md px-7 py-4 !text-white"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
