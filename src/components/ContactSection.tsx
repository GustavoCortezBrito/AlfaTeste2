"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Enviar e-mail via API
      const response = await fetch('/api/send-email', {
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

      // Sucesso - mostrar confetti
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });

      // Montar mensagem para WhatsApp
      const whatsappText =
        `*SOLICITAÇÃO VIA SITE - ALFA ESQUADRIAS*%0A%0A` +
        `*Nome:* ${formData.name}%0A` +
        `*E-mail:* ${formData.email}%0A` +
        `*Telefone:* ${formData.phone}%0A` +
        `*Empresa:* ${formData.company || "Não informado"}%0A` +
        `*Cidade:* ${formData.city}%0A` +
        `*Tipo de Produto:* ${formData.productType || "Não especificado"}%0A%0A` +
        `*Mensagem:* ${formData.message}`;

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
        });
        
        setIsSubmitting(false);
      }, 1000);

    } catch (error) {
      console.error('Erro:', error);
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar mensagem. Tente novamente.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 px-4 sm:px-6">
          <p className="section-label mb-3">Fale Conosco</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Envie sua{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
              Mensagem
            </span>
          </h2>
          <p className="text-slate-400 text-sm mt-4">
            Preencha o formulário ao lado e receba uma proposta personalizada em até 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left Panel - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Dark card with contact info */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Fale com a Alfa</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Nossa equipe está pronta para atender você e transformar seu projeto em realidade.
                </p>
              </div>

              {/* Contact items */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Telefone</p>
                    <a href="tel:+551839045308" className="text-white font-semibold text-sm hover:text-cyan-400 transition">
                      (18) 3904-5308
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">E-mail</p>
                    <a href="mailto:contato@alfaesquadrias.com.br" className="text-white font-semibold text-sm hover:text-cyan-400 transition">
                      contato@alfaesquadrias.com.br
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Endereço</p>
                    <a 
                      href="https://maps.app.goo.gl/54fdFQqZSHm7UL2r5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-sm hover:text-cyan-400 transition"
                    >
                      Av. Joaquim Constantino, 1880<br />
                      Vila Nova Prudente<br />
                      Pres. Prudente - SP, 19050-220
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Horário</p>
                    <p className="text-white text-sm">Segunda - Sexta: 08:00 às 18:00</p>
                    <p className="text-slate-400 text-xs">Sábado e Domingo: Fechado</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <p className="text-xs font-semibold">Resposta garantida em até 24h</p>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="card p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Nome Completo */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                    Nome Completo <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                      E-mail <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-300 mb-2">
                      Telefone <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                    />
                  </div>
                </div>

                {/* Empresa e Cidade */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-300 mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="city" className="block text-sm font-semibold text-slate-300 mb-2">
                      Cidade <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Sua cidade"
                      className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                    />
                  </div>
                </div>

                {/* Tipo de Equipamento */}
                <div>
                  <label htmlFor="productType" className="block text-sm font-semibold text-slate-300 mb-2">
                    Tipo de Equipamento
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none cursor-pointer"
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
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                    Mensagem <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva suas necessidades e como podemos ajudar..."
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 resize-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed text-white font-bold text-base py-4 px-6 rounded-xl flex items-center justify-center space-x-2 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:shadow-none cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Enviar Solicitação</span>
                    </>
                  )}
                </button>

                {submitError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <p className="text-red-400 text-sm text-center">{submitError}</p>
                  </div>
                )}

                <p className="text-center text-slate-500 text-xs">
                  * Campos obrigatórios • Seus dados estão seguros conosco
                </p>
              </form>
            </div>
          </motion.div>

        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
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
                  className="bg-cyan-500 hover:bg-cyan-400 text-white font-semibold text-sm py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
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
                style={{ border: 0 }}
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
