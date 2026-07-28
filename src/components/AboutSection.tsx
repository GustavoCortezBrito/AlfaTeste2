"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, CheckCircle, Phone } from "lucide-react";

interface AboutSectionProps {
  onOpenFacadeModal: () => void;
}

export default function AboutSection({ onOpenFacadeModal }: AboutSectionProps) {
  const highlights = [
    "Atendimento ágil com orçamento sem enrolação",
    "Mão de obra própria — instaladores experientes",
    "Medição de precisão direto na sua obra",
    "Materiais certificados com garantia total",
  ];

  return (
    <section id="sobre" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div
              onClick={onOpenFacadeModal}
              className="relative rounded-2xl overflow-hidden cursor-pointer group border border-white/10 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-shadow duration-500"
            >
              <div className="relative aspect-[4/3] bg-slate-900">
                <Image
                  src="/fachada.png"
                  alt="Alfa Esquadrias — Fachada da loja em Presidente Prudente"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center space-x-2 text-xs text-white bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 w-fit">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Av. Joaquim Constantino, 1880 — Presidente Prudente</span>
                </div>
              </div>
            </div>

            {/* Showroom tag */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-cyan-500 to-cyan-600 text-slate-950 text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-cyan-500/50 border border-cyan-400/30">
              Showroom & Fábrica
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="section-label">Sobre a Alfa Esquadrias</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Tradição e precisão
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
                  em alumínio e vidro
                </span>
              </h2>
              <p className="text-slate-400 text-base leading-relaxed">
                Localizada em Presidente Prudente, atendemos projetos residenciais, comerciais e corporativos com soluções sob medida. Trabalhamos com as melhores linhas de perfis de alumínio (Suprema, Gold e Minimalista) e vidros temperados e laminados. Veja nossa localização no <a href="https://maps.app.goo.gl/54fdFQqZSHm7UL2r5" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Google Maps</a>.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Com mais de 15 anos de experiência no mercado, a Alfa Esquadrias se consolidou como referência em esquadrias de alumínio na região de Presidente Prudente. Nossa empresa oferece um portfólio completo de produtos que incluem portas pivotantes, janelas integradas com blackout, pele de vidro para fachadas modernas, box de banheiro em vidro temperado, guarda-corpos, cortina de vidro e muito mais.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Nosso diferencial é o cuidado em cada etapa: da medição in loco à fabricação, instalação e pós-venda — garantindo encaixe perfeito e durabilidade contra intempéries. Todos os nossos projetos são desenvolvidos sob medida, respeitando as necessidades específicas de cada cliente e garantindo acabamento impecável em alumínio preto fosco, anodizado natural ou outras cores especiais.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Utilizamos apenas materiais de primeira linha com certificação de qualidade, garantindo segurança, durabilidade e estética premium para sua obra. Nossa equipe técnica especializada realiza instalações profissionais com garantia total, oferecendo suporte completo desde o primeiro contato até a entrega final do projeto.
              </p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3.5">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-sm text-slate-300 p-3 rounded-xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="flex items-center justify-around gap-4 py-6 px-6 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10">
              {[
                { value: "+15", label: "Anos de experiência" },
                { value: "100%", label: "Sob medida" },
                { value: "Garantia", label: "Na instalação" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-br from-cyan-400 to-blue-400 text-transparent bg-clip-text">{s.value}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20ou%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 border border-white/10 hover:border-cyan-500/30 text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Falar com Nossa Equipe</span>
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
