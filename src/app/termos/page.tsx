import type { Metadata } from "next";
import LegalLayout, { B, h3, note, p, ul, type LegalSection } from "@/components/LegalLayout";
import { WHATSAPP_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Termos de serviço da Alfa Esquadrias de Alumínio. Conheça as condições de uso de nossos serviços.",
  alternates: { canonical: "/termos/" },
};

const sections: LegalSection[] = [
  {
    id: "aceitacao",
    title: "Aceitação dos termos",
    blocks: [
      p(
        <>
          Bem-vindo à <B>Alfa Esquadrias de Alumínio</B>. Ao acessar e usar nosso site e serviços, você concorda em cumprir e estar vinculado aos seguintes Termos de Serviço.
        </>,
      ),
      p("Se você não concordar com qualquer parte destes termos, por favor, não use nosso site ou serviços."),
    ],
  },
  {
    id: "servicos",
    title: "Nossos serviços",
    blocks: [
      p("A Alfa Esquadrias oferece:"),
      ul(
        "Fabricação e instalação de esquadrias de alumínio sob medida",
        "Instalação de vidros temperados e laminados",
        "Portas pivotantes, janelas integradas, pele de vidro",
        "Box de banheiro, guarda-corpos, cortina de vidro",
        "Orçamentos gratuitos",
        "Consultoria técnica",
      ),
    ],
  },
  {
    id: "orcamentos",
    title: "Orçamentos e contratação",
    blocks: [
      h3("Solicitação de orçamento"),
      ul(
        <>
          Orçamentos são <B>gratuitos e sem compromisso</B>
        </>,
        <>
          Válidos por <B>30 dias</B> a partir da emissão
        </>,
        "Sujeitos a alterações em caso de mudança de especificações",
        "Requerem visita técnica para medições precisas",
      ),
      h3("Contratação"),
      ul(
        "Contrato formal será fornecido após aprovação do orçamento",
        "Pagamento conforme condições especificadas no contrato",
        "Prazo de entrega informado no momento da contratação",
        "Possibilidade de alterações mediante acordo mútuo",
      ),
    ],
  },
  {
    id: "prazos",
    title: "Prazos e entrega",
    blocks: [
      p("Nossos prazos de execução:"),
      ul(
        <>
          <B>Medição:</B> Agendada em até 48 horas úteis após aprovação
        </>,
        <>
          <B>Fabricação:</B> 20 a 45 dias úteis (conforme complexidade)
        </>,
        <>
          <B>Instalação:</B> Agendada após conclusão da fabricação
        </>,
      ),
      p("Os prazos podem variar devido a fatores externos como condições climáticas, disponibilidade de materiais especiais ou alterações no projeto."),
      note(
        <>
          <B>Importante:</B> Atrasos serão comunicados com antecedência sempre que possível.
        </>,
      ),
    ],
  },
  {
    id: "garantia",
    title: "Garantia",
    blocks: [
      h3("Cobertura"),
      p("Oferecemos garantia de:"),
      ul(
        <>
          <B>5 anos:</B> Defeitos de fabricação em perfis de alumínio
        </>,
        <>
          <B>1 ano:</B> Instalação e vedação
        </>,
        <>
          <B>90 dias:</B> Ferragens e acessórios
        </>,
        <>
          <B>Conforme fabricante:</B> Vidros temperados
        </>,
      ),
      h3("Exclusões"),
      p(
        <>
          A garantia <B>não cobre</B>:
        </>,
      ),
      ul(
        "Danos causados por uso inadequado ou acidentes",
        "Desgaste natural pelo uso",
        "Alterações feitas por terceiros não autorizados",
        "Falta de manutenção recomendada",
        "Fenômenos da natureza (raios, vendavais extremos, etc.)",
      ),
    ],
  },
  {
    id: "pagamento",
    title: "Pagamento",
    blocks: [
      h3("Formas de pagamento"),
      ul("Dinheiro", "PIX", "Cartão de crédito (até 10x)", "Cartão de débito", "Boleto bancário"),
      h3("Condições"),
      ul(
        <>
          <B>Sinal:</B> 50% na aprovação do orçamento
        </>,
        <>
          <B>Restante:</B> Na entrega/instalação
        </>,
        "Parcelamento conforme disponibilidade",
        "Atraso no pagamento pode resultar em suspensão do serviço",
      ),
    ],
  },
  {
    id: "cancelamento",
    title: "Cancelamento e devolução",
    blocks: [
      h3("Cancelamento pelo cliente"),
      ul(
        <>
          <B>Antes da fabricação:</B> Reembolso de 100% (descontadas taxas administrativas de 10%)
        </>,
        <>
          <B>Após início da fabricação:</B> Reembolso de 50%
        </>,
        <>
          <B>Após instalação:</B> Não há reembolso
        </>,
      ),
      h3("Cancelamento pela empresa"),
      p("Reservamos o direito de cancelar ou recusar serviços em casos de:"),
      ul("Informações falsas fornecidas", "Impossibilidade técnica de execução", "Inadimplência", "Comportamento inadequado"),
      p("Em caso de cancelamento pela empresa, haverá reembolso integral dos valores pagos."),
    ],
  },
  {
    id: "responsabilidades",
    title: "Responsabilidades",
    blocks: [
      h3("Da empresa"),
      ul(
        "Fornecer produtos de qualidade conforme especificações",
        "Cumprir prazos acordados (salvo imprevistos)",
        "Realizar instalação profissional",
        "Prestar suporte pós-venda",
        "Honrar a garantia nos termos estabelecidos",
      ),
      h3("Do cliente"),
      ul(
        "Fornecer informações precisas e completas",
        "Garantir acesso ao local para medições e instalação",
        "Efetuar pagamentos nos prazos acordados",
        "Permitir condições adequadas para instalação",
        "Realizar manutenção conforme orientações",
      ),
    ],
  },
  {
    id: "limitacao",
    title: "Limitação de responsabilidade",
    blocks: [
      p("A Alfa Esquadrias não se responsabiliza por:"),
      ul(
        "Danos indiretos ou consequenciais",
        "Problemas causados por estruturas pré-existentes inadequadas",
        "Instalações realizadas por terceiros não autorizados",
        "Mudanças nas normas técnicas após a instalação",
      ),
      p("Nossa responsabilidade está limitada ao valor pago pelo serviço contratado."),
    ],
  },
  {
    id: "propriedade",
    title: "Propriedade intelectual",
    blocks: [
      p("Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é propriedade da Alfa Esquadrias e está protegido por leis de direitos autorais. É proibido copiar, reproduzir ou distribuir sem autorização prévia."),
    ],
  },
  {
    id: "foro",
    title: "Lei aplicável e foro",
    blocks: [
      p(
        <>
          Estes Termos de Serviço são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de <B>Presidente Prudente - SP</B> para dirimir quaisquer questões decorrentes destes termos.
        </>,
      ),
    ],
  },
  {
    id: "alteracoes",
    title: "Alterações nos termos",
    blocks: [
      p("Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. Alterações serão publicadas nesta página com a data da última atualização. O uso continuado de nossos serviços após as alterações constitui aceitação dos novos termos."),
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Termos de Serviço"
      updated="28 de julho de 2026"
      lead="As condições para usar o site e contratar os serviços da Alfa Esquadrias: orçamento, prazos, garantia, pagamento e cancelamento."
      sections={sections}
      contactIntro="Para dúvidas sobre estes Termos de Serviço, entre em contato:"
      contactExtra={[
        {
          label: "WhatsApp",
          value: (
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="underline decoration-steel-500 underline-offset-4 transition-colors hover:decoration-white">
              (18) 3904-5308
            </a>
          ),
        },
        { label: "Horário", value: "Segunda a Sexta, 08:00 às 18:00" },
      ]}
      sibling={{ href: "/privacidade/", label: "Política de privacidade" }}
    />
  );
}
