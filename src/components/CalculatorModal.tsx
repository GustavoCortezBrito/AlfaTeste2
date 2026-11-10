"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight, ArrowLeft } from "lucide-react";
import { WhatsAppIcon } from "./BrandIcons";
import { whatsappLink } from "@/lib/site";
import { useScrollLock } from "@/lib/scroll";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

const ease = [0.23, 1, 0.32, 1] as const;

const projectOptions = [
  "Porta pivotante / painel ripado",
  "Janelas integradas",
  "Pele de vidro / fachada",
  "Box para banheiro",
  "Fechamento de sacada / varanda",
  "Guarda-corpo e corrimão",
  "Cobertura / pergolado em vidro",
  "Outro projeto sob medida",
];

const colorOptions = ["Preto fosco", "Amadeirado", "Branco", "Bronze", "Anodizado natural"];

const fieldClass =
  "w-full rounded-md border border-white/15 bg-transparent px-4 py-3 text-sm text-white transition-colors hover:border-white/30";

const optionClass = (selected: boolean) =>
  `flex w-full cursor-pointer items-center justify-between gap-3 rounded-md border px-4 py-3 text-left text-sm transition-colors ${
    selected
      ? "border-white bg-white/[0.06] text-white"
      : "border-white/12 text-steel-200 hover:border-white/35 hover:text-white"
  }`;

/** Simulador em 3 passos que monta a mensagem de orçamento e abre o WhatsApp. */
export default function CalculatorModal({ isOpen, onClose, initialProduct }: CalculatorModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(initialProduct || projectOptions[0]);
  const [finishColor, setFinishColor] = useState(colorOptions[0]);
  const [dimensions, setDimensions] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCity, setClientCity] = useState("Presidente Prudente");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const closeRef = useRef<HTMLButtonElement>(null);

  useScrollLock(isOpen);

  // Foco no "fechar" só ao abrir (o onClose do pai muda a cada render)
  useEffect(() => {
    if (isOpen) closeRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message =
      `*SOLICITAÇÃO DE ORÇAMENTO - ALFA ESQUADRIAS*\n\n` +
      `*Cliente:* ${clientName || "Não informado"}\n` +
      `*Cidade/Região:* ${clientCity}\n` +
      `*Projeto:* ${projectType}\n` +
      `*Acabamento/Cor:* ${finishColor}\n` +
      `*Medidas/Quantidades:* ${dimensions || "A combinar na medição"}\n` +
      `*Observações:* ${additionalNotes || "Nenhuma"}\n\n` +
      `_Enviado pelo site oficial Alfa Esquadrias_`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    onClose();
  };

  const stepMotion = {
    initial: { opacity: 0, x: 12 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -12 },
    transition: { duration: 0.2, ease },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="calculator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="calc-title"
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.2, ease }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="panel relative flex max-h-[92vh] w-full max-w-xl flex-col overflow-hidden"
          >
            {/* Cabeçalho */}
            <div className="flex items-start justify-between gap-4 border-b border-white/12 px-6 py-5">
              <div>
                <p className="label-mono">Passo {step} de 3</p>
                <h3 id="calc-title" className="mt-2 text-4xl font-semibold text-white">
                  Simular projeto
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Fechar"
                className="cursor-pointer rounded p-2 text-steel-300 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Progresso */}
            <div className="h-px w-full bg-white/12" aria-hidden="true">
              <div
                className="h-full origin-left bg-white transition-transform duration-300"
                style={{ transform: `scaleX(${step / 3})` }}
              />
            </div>

            <div className="overflow-y-auto p-6">
              <AnimatePresence mode="wait" initial={false}>
                {step === 1 && (
                  <motion.div key="step1" {...stepMotion} className="space-y-5">
                    <p className="text-lg text-steel-100">Qual projeto você precisa?</p>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {projectOptions.map((opt) => (
                        <button key={opt} type="button" onClick={() => setProjectType(opt)} className={optionClass(projectType === opt)}>
                          <span>{opt}</span>
                          {projectType === opt && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                        </button>
                      ))}
                    </div>
                    {!projectOptions.includes(projectType) && (
                      <p className="label-mono">Selecionado: {projectType}</p>
                    )}
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn-metal label-mono flex cursor-pointer items-center gap-2 rounded-md px-6 py-3.5 !text-ink-950"
                      >
                        Próximo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" {...stepMotion} className="space-y-5">
                    <div>
                      <p className="label-mono mb-3">Acabamento do alumínio</p>
                      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {colorOptions.map((color) => (
                          <button key={color} type="button" onClick={() => setFinishColor(color)} className={optionClass(finishColor === color)}>
                            <span>{color}</span>
                            {finishColor === color && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="calc-dimensions" className="label-mono mb-2 flex items-center justify-between gap-3">
                        <span>Medidas ou quantidade</span>
                        <span className="normal-case tracking-normal !text-steel-400">opcional</span>
                      </label>
                      <input
                        id="calc-dimensions"
                        type="text"
                        value={dimensions}
                        onChange={(e) => setDimensions(e.target.value)}
                        placeholder="Ex.: 2 janelas de 1,50 × 1,20 m"
                        className={fieldClass}
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="label-mono flex cursor-pointer items-center gap-2 transition-colors hover:!text-white"
                      >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn-metal label-mono flex cursor-pointer items-center gap-2 rounded-md px-6 py-3.5 !text-ink-950"
                      >
                        Próximo <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" {...stepMotion}>
                    <form onSubmit={handleSendToWhatsApp} className="space-y-4">
                      <div>
                        <label htmlFor="calc-name" className="label-mono mb-2 block">Seu nome</label>
                        <input
                          id="calc-name"
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          autoComplete="name"
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="calc-city" className="label-mono mb-2 block">Cidade / bairro</label>
                        <input
                          id="calc-city"
                          type="text"
                          required
                          value={clientCity}
                          onChange={(e) => setClientCity(e.target.value)}
                          className={fieldClass}
                        />
                      </div>

                      <div>
                        <label htmlFor="calc-notes" className="label-mono mb-2 block">Observações (opcional)</label>
                        <textarea
                          id="calc-notes"
                          rows={2}
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          placeholder="Ex.: quero agendar uma medição na obra"
                          className={`${fieldClass} resize-none`}
                        />
                      </div>

                      <dl className="divide-y divide-white/10 border-y border-white/12 text-sm">
                        <div className="flex justify-between gap-4 py-2.5">
                          <dt className="label-mono">Projeto</dt>
                          <dd className="truncate text-right text-white">{projectType}</dd>
                        </div>
                        <div className="flex justify-between gap-4 py-2.5">
                          <dt className="label-mono">Acabamento</dt>
                          <dd className="text-right text-white">{finishColor}</dd>
                        </div>
                      </dl>

                      <div className="flex items-center justify-between gap-4 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="label-mono flex cursor-pointer items-center gap-2 transition-colors hover:!text-white"
                        >
                          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Voltar
                        </button>
                        <button
                          type="submit"
                          className="btn-metal label-mono flex cursor-pointer items-center gap-2.5 rounded-md px-6 py-3.5 !text-ink-950"
                        >
                          <WhatsAppIcon className="h-4 w-4" />
                          Enviar no WhatsApp
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
