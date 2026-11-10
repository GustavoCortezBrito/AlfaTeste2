import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import LogoMark from "./LogoMark";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

export type Block =
  | { type: "p"; content: ReactNode }
  | { type: "h3"; content: string }
  | { type: "ul"; items: ReactNode[] }
  | { type: "note"; content: ReactNode };

export interface LegalSection {
  id: string;
  title: string;
  blocks: Block[];
}

/** Atalhos para escrever o conteúdo das páginas como dados. */
export const p = (content: ReactNode): Block => ({ type: "p", content });
export const h3 = (content: string): Block => ({ type: "h3", content });
export const ul = (...items: ReactNode[]): Block => ({ type: "ul", items });
export const note = (content: ReactNode): Block => ({ type: "note", content });

/** Termo em destaque dentro de um texto. */
export const B = ({ children }: { children: ReactNode }) => <strong className="font-semibold text-white">{children}</strong>;

interface LegalLayoutProps {
  title: string;
  updated: string;
  lead: string;
  sections: LegalSection[];
  contactIntro: string;
  /** Linhas extras no bloco de contato (além de empresa, e-mail, telefone e endereço) */
  contactExtra?: { label: string; value: ReactNode }[];
  /** Link para a outra página legal, no rodapé */
  sibling: { href: string; label: string };
}

const pad = (n: number) => String(n).padStart(2, "0");

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "p":
      return (
        <p key={i} className="max-w-3xl text-lg leading-relaxed text-steel-100">
          {block.content}
        </p>
      );
    case "h3":
      return (
        <h3 key={i} className="label-mono !text-steel-300 pt-3">
          {block.content}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="max-w-3xl divide-y divide-white/10 border-y border-white/10">
          {block.items.map((item, k) => (
            <li key={k} className="flex gap-4 py-3 leading-relaxed text-steel-100">
              <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-steel-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <p key={i} className="max-w-3xl border-l-2 border-white/60 bg-white/[0.04] px-5 py-4 leading-relaxed text-steel-100">
          {block.content}
        </p>
      );
  }
}

/** Layout das páginas legais (privacidade e termos), no padrão Atelier do site. */
export default function LegalLayout({ title, updated, lead, sections, contactIntro, contactExtra = [], sibling }: LegalLayoutProps) {
  const contactIndex = sections.length + 1;
  const toc = [...sections.map((s) => ({ id: s.id, title: s.title })), { id: "contato", title: "Contato" }];

  return (
    <div className="min-h-screen bg-ink-950 text-paper">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
          <Link href="/" aria-label="Alfa Esquadrias — início" className="flex items-center gap-3 text-white">
            <LogoMark className="h-auto w-8" />
            <span className="hidden font-heading text-2xl font-semibold uppercase leading-none tracking-[0.1em] sm:block">
              Alfa Esquadrias
            </span>
          </Link>
          <Link href="/" className="label-mono group flex items-center gap-2 transition-colors hover:!text-white">
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" aria-hidden="true" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-14">
        <div className="border-b border-white/10 py-16 lg:py-24">
          <p className="label-mono">Documento legal · Atualizado em {updated}</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-semibold text-white sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-steel-200">{lead}</p>
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-20 lg:py-20">
          <nav aria-label="Índice" className="hidden lg:block">
            <div className="sticky top-8">
              <p className="label-mono mb-5">Neste documento</p>
              <ol className="space-y-1 border-l border-white/12">
                {toc.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 border-l-2 border-transparent py-1.5 pl-4 -ml-px text-sm text-steel-300 transition-colors hover:border-white hover:text-white"
                    >
                      <span className="font-mono text-xs text-steel-400">{pad(i + 1)}</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="divide-y divide-white/10">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="grid gap-5 py-12 first:pt-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8">
                <span className="font-heading text-5xl font-medium leading-none text-steel-400" aria-hidden="true">
                  {pad(i + 1)}
                </span>
                <div className="space-y-5">
                  <h2 className="text-4xl font-semibold text-white sm:text-5xl">{section.title}</h2>
                  {section.blocks.map(renderBlock)}
                </div>
              </section>
            ))}

            <section id="contato" className="grid gap-5 py-12 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-8">
              <span className="font-heading text-5xl font-medium leading-none text-steel-400" aria-hidden="true">
                {pad(contactIndex)}
              </span>
              <div className="space-y-6">
                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Contato</h2>
                <p className="max-w-3xl text-lg leading-relaxed text-steel-100">{contactIntro}</p>

                <dl className="panel max-w-3xl divide-y divide-white/10">
                  {[
                    { label: "Empresa", value: "Alfa Esquadrias de Alumínio" },
                    {
                      label: "E-mail",
                      value: (
                        <a href={`mailto:${EMAIL}`} className="underline decoration-steel-500 underline-offset-4 transition-colors hover:decoration-white">
                          {EMAIL}
                        </a>
                      ),
                    },
                    {
                      label: "Telefone",
                      value: (
                        <a href={PHONE_HREF} className="underline decoration-steel-500 underline-offset-4 transition-colors hover:decoration-white">
                          {PHONE_DISPLAY}
                        </a>
                      ),
                    },
                    ...contactExtra,
                    { label: "Endereço", value: "Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente - SP, 19050-220" },
                  ].map((row) => (
                    <div key={row.label} className="grid gap-1 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                      <dt className="label-mono self-start pt-0.5">{row.label}</dt>
                      <dd className="text-steel-100">{row.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-metal label-mono inline-flex items-center gap-2 rounded-md px-6 py-3.5 !text-ink-950"
                >
                  Falar no WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-14">
          <p className="label-mono">© {new Date().getFullYear()} Alfa Esquadrias de Alumínio</p>
          <Link href={sibling.href} className="label-mono !text-white underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-60">
            {sibling.label}
          </Link>
        </div>
      </footer>
    </div>
  );
}
