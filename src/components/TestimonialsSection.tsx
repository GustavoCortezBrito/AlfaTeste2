"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Engº Marcelo Faria",
    role: "Construtor de Casas de Alto Padrão",
    city: "Presidente Prudente",
    comment: "Trabalho com a Alfa Esquadrias há mais de 5 anos em meus projetos residenciais. A precisão dos cortes, o alinhamento dos pivôs e o atendimento técnico são exemplares. Entrega no prazo sem dor de cabeça.",
    rating: 5,
  },
  {
    name: "Arqª Juliana Silveira",
    role: "Arquitetura & Interiores",
    city: "Presidente Prudente",
    comment: "Recomendo aos meus clientes de olhos fechados. As portas pivotantes e janelas minimalistas da Alfa têm um acabamento de altíssimo nível. A equipe de instalação é limpa e extremamente cuidadosa.",
    rating: 5,
  },
  {
    name: "Carlos Eduardo Menezes",
    role: "Proprietário Residencial",
    city: "Álvares Machado",
    comment: "Fizemos todas as esquadrias em alumínio preto fosco e os boxes de vidro temperado da nossa casa com a Alfa. Orçamento transparente, preço justo e suporte pós-venda nota 10!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 section-alt border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-14 text-center px-4 sm:px-6"
        >
          <p className="section-label mb-3">Avaliações de Clientes</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            O que dizem nossos
            <br />clientes e parceiros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7,
                delay: i * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -6, scale: 1.02 }}
              key={i}
              className="card p-6 flex flex-col justify-between space-y-5 relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-500"
            >
              {/* Quote background icon */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, duration: 0.6 }}
              >
                <Quote className="w-7 h-7 text-white/5 absolute top-5 right-5 group-hover:text-cyan-500/10 transition-colors duration-500" />
              </motion.div>

              <div className="space-y-4">
                {/* Stars */}
                <motion.div 
                  className="flex items-center space-x-1"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.6, ease: "easeOut" }}
                >
                  {[...Array(rev.rating)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: i * 0.15 + 0.3 + (idx * 0.08),
                        duration: 0.5,
                        ease: "easeOut"
                      }}
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Comment */}
                <motion.p 
                  className="text-slate-300 text-sm leading-relaxed"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.4, duration: 0.7, ease: "easeOut" }}
                >
                  "{rev.comment}"
                </motion.p>
              </div>

              {/* Author info */}
              <motion.div 
                className="pt-4 border-t border-white/5 flex items-center space-x-3"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <motion.div 
                  className="w-9 h-9 rounded-full bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-xs shrink-0 group-hover:bg-cyan-500/25 group-hover:border-cyan-500/40 transition-all duration-500"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.6, duration: 0.5, type: "spring", stiffness: 200 }}
                >
                  {rev.name.charAt(0)}
                </motion.div>
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.65, duration: 0.5 }}
                >
                  <h4 className="text-white font-semibold text-xs">{rev.name}</h4>
                  <p className="text-slate-500 text-[11px]">{rev.role} · {rev.city}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
