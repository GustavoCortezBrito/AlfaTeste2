"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Check, ArrowRight, ArrowLeft, Send, Ruler, Layers, Palette, Phone } from "lucide-react";
import confetti from "canvas-confetti";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export default function CalculatorModal({ isOpen, onClose, initialProduct }: CalculatorModalProps) {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(initialProduct || "Porta Pivotante / Painel Alumínio");
  const [finishColor, setFinishColor] = useState("Preto Fosco");
  const [dimensions, setDimensions] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientCity, setClientCity] = useState("Presidente Prudente");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const projectOptions = [
    "Porta Pivotante / Painel Alumínio",
    "Janelas Integradas Automáticas",
    "Pele de Vidro / Fachada ACM",
    "Box para Banheiro Elegance/Vidro",
    "Fechamento de Sacada / Varanda",
    "Guarda-Corpo & Corrimão",
    "Cobertura / Pergolado em Vidro",
    "Outro Projeto Sob Medida",
  ];

  const colorOptions = [
    "Preto Fosco (Blackout)",
    "Amadeirado Nobre",
    "Branco Neve",
    "Bronze Industrial",
    "Anodizado Inox / Prata",
  ];

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });

    const message = `*SOLICITAÇÃO DE ORÇAMENTO - ALFA ESQUADRIAS*%0A%0A` +
      `*Cliente:* ${clientName || "Não informado"}%0A` +
      `*Cidade/Região:* ${clientCity}%0A` +
      `*Projeto:* ${projectType}%0A` +
      `*Acabamento/Cor:* ${finishColor}%0A` +
      `*Medidas/Quantidades:* ${dimensions || "A combinar na medição"}%0A` +
      `*Observações:* ${additionalNotes || "Nenhuma"}%0A%0A` +
      `_Enviado pelo site oficial Alfa Esquadrias_`;

    const whatsappUrl = `https://wa.me/551839045308?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      onClose();
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="bg-slate-900 border border-slate-700/80 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl relative"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Simulador de Orçamento Interativo</h3>
              <p className="text-slate-400 text-xs">Passo {step} de 3 • Rápido & Sem Compromisso</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 h-1.5">
          <div
            className="bg-gradient-to-r from-cyan-400 to-blue-600 h-full transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-sm font-semibold text-cyan-400">
                  <Layers className="w-4 h-4" />
                  <span>1. Qual tipo de projeto você precisa?</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[300px] overflow-y-auto pr-1">
                  {projectOptions.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setProjectType(opt)}
                      className={`p-3 rounded-2xl text-xs font-medium text-left transition flex items-center justify-between border cursor-pointer ${
                        projectType === opt
                          ? "bg-cyan-500/20 border-cyan-400 text-white font-semibold shadow-md"
                          : "bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"
                      }`}
                    >
                      <span className="truncate">{opt}</span>
                      {projectType === opt && <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />}
                    </button>
                  ))}
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Próximo Passo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-sm font-semibold text-cyan-400">
                  <Palette className="w-4 h-4" />
                  <span>2. Escolha o acabamento e informe as medidas (opcional)</span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Acabamento / Cor do Alumínio
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {colorOptions.map((color) => (
                      <button
                        key={color}
                        onClick={() => setFinishColor(color)}
                        className={`p-2.5 rounded-xl text-xs font-medium text-left border transition flex items-center justify-between cursor-pointer ${
                          finishColor === color
                            ? "bg-cyan-500/20 border-cyan-400 text-white"
                            : "bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                      >
                        <span>{color}</span>
                        {finishColor === color && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Medidas Aproximadas ou Quantidade</span>
                    <span className="text-[10px] text-slate-500 font-normal">Ex: 2 janelas 1.50x1.20m</span>
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder="Ex: Porta 1.20m x 2.40m ou Medição no local"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-slate-400 hover:text-white text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Voltar</span>
                  </button>

                  <button
                    onClick={() => setStep(3)}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs py-3 px-6 rounded-xl shadow-md flex items-center space-x-2 cursor-pointer"
                  >
                    <span>Próximo Passo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 text-sm font-semibold text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <span>3. Dados para envio no WhatsApp</span>
                </div>

                <form onSubmit={handleSendToWhatsApp} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="Ex: Roberto Alves"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Sua Cidade / Bairro
                    </label>
                    <input
                      type="text"
                      required
                      value={clientCity}
                      onChange={(e) => setClientCity(e.target.value)}
                      placeholder="Ex: Presidente Prudente - Jardim Bongiovani"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Observações Adicionais (opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Gostaria de agendar uma medição sem compromisso na obra..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  {/* Summary Box */}
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                    <span className="font-semibold text-cyan-400 block">Resumo da Solicitação:</span>
                    <p className="truncate">• Projeto: <strong className="text-white">{projectType}</strong></p>
                    <p className="truncate">• Cor: <strong className="text-white">{finishColor}</strong></p>
                  </div>

                  <div className="pt-3 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="text-slate-400 hover:text-white text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Voltar</span>
                    </button>

                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3.5 px-6 rounded-xl shadow-lg shadow-emerald-900/30 flex items-center justify-center space-x-2 transition cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Enviar Orçamento via WhatsApp</span>
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
