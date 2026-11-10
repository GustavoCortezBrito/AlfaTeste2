"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Vocês atendem apenas em Presidente Prudente?",
    a: "Atendemos Presidente Prudente e região, incluindo cidades vizinhas. Nossa equipe realiza medição, fabricação e instalação em toda a região com a mesma qualidade e garantia.",
  },
  {
    q: "Quais tipos de esquadrias vocês trabalham?",
    a: "Trabalhamos com portas pivotantes, janelas (maxim-ar, basculante, de correr), pele de vidro, box de banheiro, guarda-corpos, cortina de vidro e todos os tipos de esquadrias em alumínio sob medida. Utilizamos perfis das linhas Suprema, Gold e Minimalista.",
  },
  {
    q: "Qual o prazo médio de entrega?",
    a: "O prazo varia de acordo com o tipo e complexidade do projeto. Após a medição e aprovação do orçamento, informamos o cronograma detalhado. Trabalhamos com prazos realistas e cumprimos rigorosamente o combinado.",
  },
  {
    q: "Vocês cobram para fazer orçamento?",
    a: "Não! O orçamento é totalmente gratuito e sem compromisso. Nossa equipe técnica faz a medição no local, analisa suas necessidades e apresenta uma proposta detalhada sem nenhum custo.",
  },
  {
    q: "Quais as formas de pagamento?",
    a: "Trabalhamos com diversas formas de pagamento para facilitar seu projeto: cartões de crédito (parcelamento a consultar), boleto bancário (sujeito a análise) e desconto especial para pagamento à vista via PIX ou transferência.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 section-alt border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        <SectionHeader
          title="Dúvidas sobre esquadrias de alumínio?"
          description="Respostas para as perguntas mais comuns sobre prazo, orçamento e pagamento. Se a sua não estiver aqui, chame a gente no WhatsApp."
        />

        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <motion.div
                key={index}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer group"
                >
                  <span className={`text-sm font-semibold transition ${isOpen ? "text-white" : "text-steel-200 group-hover:text-white"}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-steel-300 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-steel-200 text-sm leading-relaxed border-t border-white/10 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
