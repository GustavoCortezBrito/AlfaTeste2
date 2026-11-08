"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { MapPin, Phone, Clock, Mail, Send, CheckCircle2, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    city: "",
    productType: "",
    message: "",
    website: "", // honeypot anti-bot (deve ficar vazio)
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const errorRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError("");
    setSubmitSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Enviar e-mail via API
      const response = await fetch('/api/send-email/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar mensagem');
      }

      // Sucesso — mensagem visível (e anunciada) + confetti
      setSubmitSuccess(true);
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

      // Montar mensagem para WhatsApp
      const whatsappText = encodeURIComponent(
        `*SOLICITAÇÃO VIA SITE - ALFA ESQUADRIAS*\n\n` +
        `*Nome:* ${formData.name}\n` +
        `*E-mail:* ${formData.email}\n` +
        `*Telefone:* ${formData.phone}\n` +
        `*Empresa:* ${formData.company || "Não informado"}\n` +
        `*Cidade:* ${formData.city}\n` +
        `*Tipo de Produto:* ${formData.productType || "Não especificado"}\n\n` +
        `*Mensagem:* ${formData.message}`
      );

      // Aguardar 1 segundo e redirecionar para WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/551839045308?text=${whatsappText}`, "_blank");
        
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          city: "",
          productType: "",
          message: "",
          website: "",
        });
        
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Erro:', error);
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.');
      setIsSubmitting(false);
      // leva o foco ao aviso para teclado e leitor de tela
      requestAnimationFrame(() => errorRef.current?.focus());
    }
  };

  return (
    <section id="contato" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-steel-300/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <SectionHeader
          title="Peça seu orçamento"
          description="Conte o que você precisa. A equipe responde com uma proposta em até 24 horas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left Panel - Info */}
          <motion.div
            className="lg:col-span-2 space-y-6"
          >
            {/* Dark card with contact info */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-lg p-6 sm:p-8 space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Fale com a Alfa</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nossa equipe está pronta para atender você e transformar seu projeto em realidade.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-md bg-steel-300/10 border border-steel-300/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-steel-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">Telefone</p>
                    <a href="tel:+551839045308" className="text-white font-semibold text-sm hover:text-steel-300 transition">
                      (18) 3904-5308
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-md bg-steel-300/10 border border-steel-300/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-steel-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">E-mail</p>
                    <a href="mailto:contato@alfaesquadrias.com.br" className="text-white font-semibold text-sm hover:text-steel-300 transition">
                      contato@alfaesquadrias.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-md bg-steel-300/10 border border-steel-300/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-steel-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">Endereço</p>
                    <a 
                      href="https://maps.app.goo.gl/54fdFQqZSHm7UL2r5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-steel-300 transition"
                    >
                      Av. Joaquim Constantino, 1880<br />
                      Vila Nova Prudente<br />
                      Pres. Prudente - SP, 19050-220
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-md bg-steel-300/10 border border-steel-300/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-steel-300" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 mb-1">Horário</p>
                    <p className="text-white text-sm">Segunda - Sexta: 08:00 às 18:00</p>
                    <p className="text-slate-400 text-xs">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-steel-300">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <p className="text-xs font-semibold">Resposta garantida em até 24h</p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            className="lg:col-span-3"
          >
            <div className="card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Honeypot anti-bot: invisível para humanos */}
                <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="website">Não preencha este campo</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Nome Completo */}
                <div>
                  <label htmlFor="name" className="label-mono block mb-2">
                    Nome Completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="label-mono block mb-2">
                      E-mail <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      maxLength={254}
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-mono block mb-2">
                      Telefone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      maxLength={30}
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                    />
                  </div>
                </div>

                {/* Empresa e Cidade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="label-mono block mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      maxLength={100}
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="label-mono block mb-2">
                      Cidade <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      maxLength={100}
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                    />
                  </div>
                </div>

                {/* Tipo de Equipamento */}
                <div>
                  <label htmlFor="productType" className="label-mono block mb-2">
                    Tipo de Equipamento
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none cursor-pointer"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Portas Pivotantes">Portas Pivotantes</option>
                    <option value="Janelas">Janelas</option>
                    <option value="Pele de Vidro">Pele de Vidro</option>
                    <option value="Box de Banheiro">Box de Banheiro</option>
                    <option value="Guarda-Corpos">Guarda-Corpos</option>
                    <option value="Cortina de Vidro">Cortina de Vidro</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="label-mono block mb-2">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    maxLength={2000}
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva suas necessidades e como podemos ajudar..."
                    className="w-full bg-black border border-white/20 rounded-md px-4 py-3 text-sm text-white resize-none focus:border-steel-300/50 focus:ring-2 focus:ring-steel-300/20 transition outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-metal disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-base py-4 px-6 rounded-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar solicitação</span>
                    </>
                  )}
                </button>

                {submitError && (
                  <div
                    ref={errorRef}
                    role="alert"
                    tabIndex={-1}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg"
                  >
                    <p className="text-red-300 text-sm font-semibold">Não foi possível enviar</p>
                    <p className="text-red-200 text-sm mt-1">{submitError}</p>
                  </div>
                )}

                {submitSuccess && (
                  <div role="status" className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                    <p className="text-emerald-300 text-sm font-semibold">Mensagem enviada</p>
                    <p className="text-emerald-200 text-sm mt-1">
                      Abrindo o WhatsApp para você continuar a conversa com a equipe.
                    </p>
                  </div>
                )}

                <p className="text-center text-slate-400 text-xs">
                  * Campos obrigatórios • Seus dados estão seguros conosco
                </p>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Google Maps */}
        <motion.div
          className="mt-12"
        >
          <div className="card overflow-hidden">
            <div className="p-6 border-b border-white/5">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Localização</h3>
                  <p className="text-slate-400 text-sm">Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Pres. Prudente - SP</p>
                </div>
                <a
                  href="https://maps.app.goo.gl/54fdFQqZSHm7UL2r5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-steel-300 hover:bg-steel-300 text-white font-semibold text-sm py-2.5 px-5 rounded-md transition shadow-lg shadow-steel-300/20 hover:shadow-steel-300/40"
                >
                  Ver no Google Maps
                </a>
              </div>
            </div>
            <div className="relative h-96 bg-slate-950">
              <iframe
                title="Localização Alfa Esquadrias - Presidente Prudente"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.356!2d-51.421629!3d-22.120583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f6d18c7fffff%3A0x91ed8c9e60ebdb7!2sAlfa%20Esquadrias%20de%20Alum%C3%ADnio!5e0!3m2!1spt-BR!2sbr!4v1738097123456!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) grayscale(0.35) contrast(0.9) brightness(0.95)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
