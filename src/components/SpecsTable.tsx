/**
 * "Especificações": painel de borda fina com rótulo mono à esquerda e valor gigante à direita
 * (o bloco "Performance" da referência). Valores tirados do catálogo do próprio site.
 */
const specs = [
  { label: "Experiência", value: "+15 anos" },
  { label: "Vidro temperado", value: "8 e 10 mm" },
  { label: "Altura sob medida", value: "até 6 m" },
  { label: "Acabamentos", value: "5 cores" },
  { label: "Linhas de perfil", value: "Suprema · Gold · Minimalista" },
];

export default function SpecsTable() {
  return (
    <section id="especificacoes" className="bg-black py-24 lg:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-14">
        <h2 className="mb-10 text-5xl font-semibold text-white lg:text-6xl">Especificações</h2>

        <dl className="panel divide-y divide-white/12 overflow-hidden">
          {specs.map((s) => (
            <div key={s.label} className="grid gap-2 px-5 py-6 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-8 md:px-7 md:py-8">
              <dt className="label-mono self-start !text-steel-400 !normal-case !tracking-[0.06em] !text-[0.8rem]">{s.label}</dt>
              <dd
                className={`font-heading font-medium uppercase leading-[0.95] text-white ${
                  s.value.length > 12 ? "text-4xl md:text-6xl" : "text-6xl md:text-8xl"
                }`}
              >
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="label-mono mt-5 !text-steel-400 !normal-case !tracking-[0.04em]">
          Referências do catálogo. Medidas, vidro e acabamento finais são definidos no orçamento.
        </p>
      </div>
    </section>
  );
}
