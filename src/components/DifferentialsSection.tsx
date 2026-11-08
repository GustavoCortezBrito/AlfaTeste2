import SectionHeader from "./SectionHeader";

const items = [
  {
    title: "Acabamento e cores sob escolha",
    description:
      "Pintura eletrostática a pó e anodização em diversas cores: preto fosco, amadeirado, branco neve, bronze e inox.",
  },
  {
    title: "Vedação e isolamento acústico",
    description:
      "Borrachas EPDM e escovas duplas que reduzem barulho externo e infiltração, e garantem conforto térmico.",
  },
  {
    title: "Medição de precisão",
    description:
      "Nossa equipe vai até a obra, confere cada milímetro e indica a melhor linha de produto para o seu projeto.",
  },
  {
    title: "Materiais certificados",
    description:
      "Alumínio e vidro de fornecedores líderes nacionais, com certificação de resistência e segurança.",
  },
  {
    title: "Prazo combinado e cumprido",
    description:
      "Entrega e instalação no prazo acertado, com cronograma claro do início ao fim da obra.",
  },
  {
    title: "Preço justo e pós-venda",
    description:
      "Valores competitivos, facilidade de pagamento, suporte direto depois da instalação e garantia.",
  },
];

// Cores reais de acabamento do alumínio, mostradas como amostras
const finishes = [
  { name: "Preto fosco", color: "#1b1c1f", ring: "#4a4d55" },
  { name: "Amadeirado", color: "#8a5a34", ring: "#b48458" },
  { name: "Branco neve", color: "#f1f1ee", ring: "#ffffff" },
  { name: "Bronze", color: "#6c543a", ring: "#9a7c58" },
  { name: "Inox", color: "#b5b8bb", ring: "#e1e3e6" },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="border-t border-white/10 bg-ink-950 py-24 lg:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-20 lg:px-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeader
              title={<>Por que escolher<br />a Alfa Esquadrias</>}
              description="Do primeiro contato à instalação, o mesmo time cuida do seu projeto."
              className="!mb-10"
            />

            <p className="label-mono mb-4">Acabamentos do perfil</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-4">
              {finishes.map((f) => (
                <li key={f.name} className="flex items-center gap-2.5 text-steel-100">
                  <span
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 rounded-full"
                    style={{
                      background: f.color,
                      boxShadow: `inset 0 1px 1px ${f.ring}, 0 0 0 1px rgba(255,255,255,0.18)`,
                    }}
                  />
                  {f.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ol className="divide-y divide-white/12 border-y border-white/12 lg:col-span-7">
          {items.map((item) => (
            <li key={item.title} className="grid gap-x-10 gap-y-2 py-7 sm:grid-cols-[minmax(0,16rem)_1fr]">
              <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
              <p className="leading-relaxed text-steel-200">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
