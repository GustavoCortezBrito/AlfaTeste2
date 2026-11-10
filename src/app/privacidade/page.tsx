import type { Metadata } from "next";
import LegalLayout, { B, h3, note, p, ul, type LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da Alfa Esquadrias de Alumínio. Saiba como protegemos e utilizamos seus dados pessoais.",
  alternates: { canonical: "/privacidade/" },
};

const sections: LegalSection[] = [
  {
    id: "introducao",
    title: "Introdução",
    blocks: [
      p(
        <>
          A <B>Alfa Esquadrias de Alumínio</B> (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;empresa&rdquo;) respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site ou serviços.
        </>,
      ),
      p(
        <>
          Esta política está em conformidade com a <B>Lei Geral de Proteção de Dados (LGPD)</B> - Lei nº 13.709/2018.
        </>,
      ),
    ],
  },
  {
    id: "coleta",
    title: "Informações que coletamos",
    blocks: [
      h3("Dados fornecidos por você"),
      p("Coletamos informações que você nos fornece diretamente:"),
      ul(
        <B>Nome completo</B>,
        <B>E-mail</B>,
        <B>Telefone</B>,
        <>
          <B>Nome da empresa</B> (opcional)
        </>,
        <B>Cidade</B>,
        <B>Mensagem/solicitação</B>,
      ),
      h3("Dados coletados automaticamente"),
      ul(
        <B>Endereço IP</B>,
        <B>Tipo de navegador</B>,
        <B>Páginas visitadas</B>,
        <B>Tempo de permanência</B>,
        <B>Dispositivo utilizado</B>,
        <>
          <B>Cookies</B> (veja a seção específica)
        </>,
      ),
    ],
  },
  {
    id: "uso",
    title: "Como usamos suas informações",
    blocks: [
      p("Utilizamos seus dados pessoais para:"),
      ul(
        "Responder suas solicitações de orçamento",
        "Entrar em contato sobre nossos produtos e serviços",
        "Enviar informações solicitadas",
        "Melhorar nosso site e experiência do usuário",
        "Análise de uso e estatísticas",
        "Cumprir obrigações legais",
      ),
      note(
        <>
          <B>Importante:</B> Nunca vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu consentimento explícito.
        </>,
      ),
    ],
  },
  {
    id: "compartilhamento",
    title: "Compartilhamento de dados",
    blocks: [
      p("Seus dados podem ser compartilhados apenas com:"),
      ul(
        <>
          <B>Fornecedores de serviço:</B> Provedores de email (Resend), hospedagem (Vercel), analytics
        </>,
        <>
          <B>WhatsApp:</B> Ao clicar para contato via WhatsApp
        </>,
        <>
          <B>Autoridades:</B> Quando exigido por lei
        </>,
      ),
      p("Todos os fornecedores são cuidadosamente selecionados e possuem políticas de privacidade adequadas."),
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    blocks: [
      p("Utilizamos cookies para melhorar sua experiência. Os cookies são pequenos arquivos armazenados em seu navegador."),
      h3("Tipos de cookies"),
      ul(
        <>
          <B>Essenciais:</B> Necessários para o funcionamento do site
        </>,
        <>
          <B>Analytics:</B> Para entender como você usa o site
        </>,
        <>
          <B>Preferências:</B> Para lembrar suas escolhas
        </>,
      ),
      p("Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site."),
    ],
  },
  {
    id: "seguranca",
    title: "Segurança dos dados",
    blocks: [
      p("Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:"),
      ul(
        "Criptografia SSL/TLS em todas as comunicações",
        "Acesso restrito aos dados pessoais",
        "Servidores seguros e atualizados",
        "Backups regulares",
        "Monitoramento de segurança",
      ),
    ],
  },
  {
    id: "direitos",
    title: "Seus direitos (LGPD)",
    blocks: [
      p("De acordo com a LGPD, você tem direito a:"),
      ul(
        <>
          <B>Confirmação e acesso:</B> Saber se processamos seus dados
        </>,
        <>
          <B>Correção:</B> Atualizar dados incompletos ou incorretos
        </>,
        <>
          <B>Exclusão:</B> Solicitar a remoção de seus dados
        </>,
        <>
          <B>Portabilidade:</B> Receber seus dados em formato estruturado
        </>,
        <>
          <B>Revogação:</B> Retirar consentimento a qualquer momento
        </>,
        <>
          <B>Oposição:</B> Opor-se ao tratamento de dados
        </>,
      ),
      p("Para exercer seus direitos, entre em contato conosco pelos canais indicados no final desta página."),
    ],
  },
  {
    id: "retencao",
    title: "Retenção de dados",
    blocks: [
      p("Mantemos seus dados pessoais apenas pelo tempo necessário para os fins descritos nesta política, salvo se um período maior for exigido ou permitido por lei."),
      p("Após esse período, seus dados são excluídos de forma segura."),
    ],
  },
  {
    id: "menores",
    title: "Crianças e adolescentes",
    blocks: [
      p("Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes sem o consentimento dos pais ou responsáveis."),
    ],
  },
  {
    id: "alteracoes",
    title: "Alterações nesta política",
    blocks: [
      p("Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através do site ou por email. A data da última atualização será sempre indicada no topo da página."),
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Política de Privacidade"
      updated="28 de julho de 2026"
      lead="Como a Alfa Esquadrias coleta, usa e protege os seus dados pessoais, de acordo com a LGPD."
      sections={sections}
      contactIntro="Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco:"
      sibling={{ href: "/termos/", label: "Termos de serviço" }}
    />
  );
}
