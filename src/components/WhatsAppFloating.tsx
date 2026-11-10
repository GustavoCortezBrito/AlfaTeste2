"use client";

import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import LogoMark from "./LogoMark";
import { WhatsAppIcon } from "./BrandIcons";
import { PHONE_DISPLAY, whatsappLink } from "@/lib/site";

const ease = [0.23, 1, 0.32, 1] as const;

const TOPICS = [
  { label: "Pedir orçamento", text: "Olá! Vim pelo site e gostaria de um orçamento de esquadrias de alumínio." },
  { label: "Tirar uma dúvida", text: "Olá! Vim pelo site e tenho uma dúvida sobre esquadrias de alumínio." },
  { label: "Visitar o showroom", text: "Olá! Gostaria de agendar uma visita ao showroom da Alfa Esquadrias." },
];

/**
 * Atalho fixo para o WhatsApp no estilo Atelier: pílula escura com o logotipo oficial
 * (Simple Icons via react-icons) e um painel com assuntos prontos ou mensagem livre.
 * Sem selo de notificação falso nem pulso infinito.
 */
export default function WhatsAppFloating() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstTopicRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    firstTopicRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const send = (text: string) => {
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
    setOpen(false);
    setMessage("");
  };

  const sendTyped = () => send(message.trim() || TOPICS[0].text);

  return (
    <div className="fixed bottom-5 right-5 z-[45] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-label="Conversar no WhatsApp"
            initial={{ opacity: 0, scale: 0.96, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.2, ease }}
            style={{ transformOrigin: "bottom right" }}
            data-lenis-prevent
            className="panel w-[min(340px,calc(100vw-2.5rem))] overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.85)]"
          >
            <div className="flex items-center justify-between gap-3 border-b border-white/12 px-5 py-4">
              <div className="flex items-center gap-3">
                <LogoMark className="h-auto w-8" />
                <div>
                  <p className="font-heading text-xl font-semibold uppercase leading-none text-white">Alfa Esquadrias</p>
                  <p className="label-mono mt-1.5 !text-[0.66rem]">WhatsApp · {PHONE_DISPLAY}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                aria-label="Fechar"
                className="cursor-pointer rounded p-1.5 text-steel-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="px-5 pt-4 text-sm leading-relaxed text-steel-200">
              Escolha um assunto ou escreva sua mensagem. A conversa abre no WhatsApp.
            </p>

            <ul className="mt-3 divide-y divide-white/10 border-y border-white/10">
              {TOPICS.map((t, i) => (
                <li key={t.label}>
                  <button
                    ref={i === 0 ? firstTopicRef : undefined}
                    type="button"
                    onClick={() => send(t.text)}
                    className="group flex w-full cursor-pointer items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-white/[0.05]"
                  >
                    <span className="label-mono !text-white">{t.label}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-steel-300 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-3 p-5">
              <label htmlFor={`${panelId}-msg`} className="label-mono block">
                Ou escreva
              </label>
              <textarea
                id={`${panelId}-msg`}
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendTyped();
                  }
                }}
                placeholder="Ex.: preciso de uma porta de correr de 2 m"
                className="w-full resize-none rounded-md border border-white/15 bg-transparent px-3.5 py-3 text-sm text-white"
              />
              <button
                type="button"
                onClick={sendTyped}
                className="btn-metal label-mono flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-md px-5 py-3.5 !text-ink-950"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Abrir no WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        aria-label={open ? "Fechar conversa do WhatsApp" : "Conversar no WhatsApp"}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.7, ease }}
        whileTap={{ scale: 0.97, transition: { duration: 0.12 } }}
        className="flex h-14 min-w-14 cursor-pointer items-center justify-center gap-3 rounded-full border border-white/15 bg-ink-900/85 px-4 text-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md transition-colors duration-200 hover:border-white/35 hover:bg-ink-800 sm:px-5"
      >
        <span className="relative h-6 w-6" aria-hidden="true">
          <span
            className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-200 ${
              open ? "scale-75 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <WhatsAppIcon className="h-6 w-6" />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform] duration-200 ${
              open ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            <X className="h-5 w-5" />
          </span>
          {/* toque da cor da marca, sem selo de notificação */}
          <span className="absolute -right-1 -top-0.5 h-2 w-2 rounded-full bg-[#25D366] ring-2 ring-ink-900" />
        </span>
        <span className="label-mono hidden !text-white sm:inline">WhatsApp</span>
      </motion.button>
    </div>
  );
}
