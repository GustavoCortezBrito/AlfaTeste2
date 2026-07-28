"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

// Inline SVG icons
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);


const quickLinks = [
  { label: "Ir ao Início", href: "#hero" },
  { label: "Sobre a Alfa", href: "#sobre" },
  { label: "Produtos & Serviços", href: "#produtos" },
  { label: "Diferenciais Técnicos", href: "#diferenciais" },
  { label: "Portfólio de Obras", href: "#portfolio" },
];

const pages = [
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Fale Conosco", href: "#contato" },
  { label: "Solicitar Orçamento", href: "https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento." },
  { label: "Ver Portfólio", href: "#portfolio" },
];

export default function Footer() {
  const shareUrl = "https://alfaesquadrias.com.br";
  const shareText = "Confira a Alfa Esquadrias — especialista em alumínio e vidros temperados em Presidente Prudente!";

  const shareLinks = [
    {
      label: "Copiar link",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(shareUrl);
      },
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Alfa Esquadrias")}`,
      icon: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#080c14] border-t border-white/5">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-5"
          >
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="flex items-center space-x-3"
            >
              <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-white/10 p-1.5 shrink-0 overflow-hidden">
                <Image src="/logotipo.png" alt="Alfa Esquadrias" fill className="object-contain" />
              </div>
              <div>
                <span className="block text-xs font-bold tracking-widest text-white uppercase">Alfa Esquadrias</span>
                <span className="block text-[10px] text-slate-500 tracking-wider uppercase">Alumínio & Vidros</span>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-slate-400 text-xs leading-relaxed"
            >
              Especialista em esquadrias de alumínio e vidros temperados em{" "}
              <span className="text-cyan-400 font-semibold">Presidente Prudente</span> e região.
              Soluções modernas, seguras e sob medida com acabamento impecável.
            </motion.p>

            {/* Social Icons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="flex items-center space-x-3"
            >
              {[
                {
                  href: "https://www.instagram.com/",
                  label: "Instagram",
                  icon: <InstagramIcon />,
                  hoverColor: "hover:text-white"
                },
                {
                  href: "https://wa.me/551839045308",
                  label: "WhatsApp",
                  icon: (
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  hoverColor: "hover:text-emerald-400 hover:border-emerald-400/40"
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.35 + (i * 0.1),
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className={`w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-slate-400 ${social.hoverColor} transition-colors duration-300 cursor-pointer`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Share Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="pt-2"
            >
              <div className="flex items-center space-x-2 text-slate-500 text-[11px] uppercase tracking-wider font-semibold mb-3">
                <ShareIcon />
                <span>Compartilhar site</span>
              </div>
              <div className="flex items-center space-x-2">
                {shareLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target={s.href === "#" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    onClick={s.onClick}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6 + (i * 0.08),
                      ease: "easeOut"
                    }}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/25 transition-colors duration-300 cursor-pointer"
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Col 2 — Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 + (i * 0.08), ease: "easeOut" }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-2.5 text-slate-400 hover:text-white text-xs transition-colors duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 group-hover:bg-cyan-400 transition-all duration-300" />
                    <span>{link.label}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Páginas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">Páginas</h4>
            <ul className="space-y-3">
              {pages.map((link, i) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.25 + (i * 0.08), ease: "easeOut" }}
                >
                  <motion.a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-2.5 text-slate-400 hover:text-white text-xs transition-colors duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 group-hover:bg-cyan-400 transition-all duration-300" />
                    <span>{link.label}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="space-y-5"
          >
            <h4 className="text-white font-bold text-xs tracking-widest uppercase">Contato</h4>

            <div className="space-y-4">
              {/* Address */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="flex items-start space-x-3"
              >
                <div className="mt-0.5 text-cyan-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="text-white font-semibold">Presidente Prudente / SP</p>
                  <p className="text-slate-400 mt-0.5 leading-relaxed">
                    Av. Joaquim Constantino, 1880<br />
                    Vila Formosa · CEP 19050-230
                  </p>
                  <p className="text-slate-500 mt-1">
                    CNPJ: em consulta
                  </p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
                className="flex items-start space-x-3"
              >
                <div className="mt-0.5 text-emerald-500 shrink-0">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="text-xs">
                  <a
                    href="https://wa.me/551839045308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-emerald-400 transition"
                  >
                    WhatsApp: (18) 3904-5308
                  </a>
                  <p className="text-slate-500 mt-0.5">Seg–Sex 07:30–18h · Sáb 08–12h</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
                className="flex items-center space-x-3"
              >
                <div className="text-slate-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:1839045308" className="text-xs text-slate-400 hover:text-white transition font-semibold">
                  (18) 3904-5308
                </a>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-6 origin-center"
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600"
        >
          <p>
            © {new Date().getFullYear()} Alfa Esquadrias de Alumínio — Todos os direitos reservados.
          </p>

          <div className="flex items-center space-x-6">
            <Link href="/privacidade" className="hover:text-slate-400 transition">Política de Privacidade</Link>
            <Link href="/termos" className="hover:text-slate-400 transition">Termos de Serviço</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center space-x-1.5 text-slate-600 hover:text-white transition cursor-pointer group"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Topo</span>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
