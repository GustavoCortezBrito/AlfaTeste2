import Link from "next/link";
import LogoMark from "./LogoMark";
import FooterWordmark from "./FooterWordmark";
import { InstagramIcon, WhatsAppIcon } from "./BrandIcons";
import { ADDRESS, EMAIL, INSTAGRAM_URL, PHONE_DISPLAY, PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

const columns = [
  {
    title: "Produtos",
    links: [
      { label: "Portas pivotantes", href: "#produtos" },
      { label: "Janelas integradas", href: "#produtos" },
      { label: "Pele de vidro", href: "#produtos" },
      { label: "Box de banheiro", href: "#produtos" },
      { label: "Fechamento de sacadas", href: "#produtos" },
      { label: "Guarda-corpos e pergolados", href: "#produtos" },
    ],
  },
  {
    title: "A Alfa",
    links: [
      { label: "Visão geral", href: "#visao" },
      { label: "Especificações", href: "#especificacoes" },
      { label: "Projetos", href: "#portfolio" },
      { label: "Dúvidas frequentes", href: "#faq" },
      { label: "Contato", href: "#contato" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "WhatsApp", href: WHATSAPP_URL, external: true },
      { label: PHONE_DISPLAY, href: PHONE_HREF },
      { label: EMAIL, href: `mailto:${EMAIL}` },
    ],
  },
  {
    title: "Redes",
    links: [{ label: "Instagram", href: INSTAGRAM_URL, external: true }],
  },
];

/**
 * Rodapé no estilo da referência: 4 colunas com títulos mono, linha legal, ícones sociais
 * e a marca gigante cortada na base, com grão.
 */
export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#0b1018]">
      <div className="mx-auto max-w-[1600px] px-5 pt-20 sm:px-8 lg:px-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="label-mono !font-medium !leading-normal !tracking-[0.14em] !text-steel-400">{col.title}</h2>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-lg font-medium leading-snug text-white transition-colors hover:text-steel-300"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <address className="mt-12 text-steel-300 not-italic">{ADDRESS}</address>

        <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-lg font-semibold uppercase tracking-wide text-white">
              © 2026 Alfa Esquadrias de Alumínio
            </p>
            <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2 text-steel-200">
              <Link href="/privacidade/" className="transition-colors hover:text-white">Política de privacidade</Link>
              <Link href="/termos/" className="transition-colors hover:text-white">Termos de serviço</Link>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LogoMark className="mr-3 hidden h-auto w-10 sm:block" />
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Alfa Esquadrias"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper text-ink-950 transition-colors hover:bg-white"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp da Alfa Esquadrias"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-paper text-ink-950 transition-colors hover:bg-white"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>
      </div>

      {/* Marca gigante cortada, com grão — o cursor funciona como lanterna */}
      <FooterWordmark />
    </footer>
  );
}
