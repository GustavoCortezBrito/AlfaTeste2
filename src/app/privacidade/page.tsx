import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Alfa Esquadrias",
  description: "Política de privacidade da Alfa Esquadrias de Alumínio. Saiba como protegemos e utilizamos seus dados pessoais.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#090d16]">
      {/* Header */}
      <header className="border-b border-white/5 bg-[#0a0f1e]/95 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Voltar ao site</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-sm">
            Última atualização: 28 de julho de 2026
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          <div className="card p-8 mb-8 space-y-8">
            
            {/* Introdução */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">1. Introdução</h2>
                  <p className="text-slate-300 leading-relaxed">
                    A <strong className="text-white">Alfa Esquadrias de Alumínio</strong> ("nós", "nosso" ou "empresa") respeita sua privacidade e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações quando você utiliza nosso site ou serviços.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Esta política está em conformidade com a <strong className="text-white">Lei Geral de Proteção de Dados (LGPD)</strong> - Lei nº 13.709/2018.
                  </p>
                </div>
              </div>
            </section>

            {/* Informações Coletadas */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Eye className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">2. Informações que Coletamos</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">2.1. Dados Fornecidos por Você</h3>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Coletamos informações que você nos fornece diretamente:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Nome completo</strong></li>
                    <li><strong className="text-white">E-mail</strong></li>
                    <li><strong className="text-white">Telefone</strong></li>
                    <li><strong className="text-white">Nome da empresa</strong> (opcional)</li>
                    <li><strong className="text-white">Cidade</strong></li>
                    <li><strong className="text-white">Mensagem/solicitação</strong></li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">2.2. Dados Coletados Automaticamente</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Endereço IP</strong></li>
                    <li><strong className="text-white">Tipo de navegador</strong></li>
                    <li><strong className="text-white">Páginas visitadas</strong></li>
                    <li><strong className="text-white">Tempo de permanência</strong></li>
                    <li><strong className="text-white">Dispositivo utilizado</strong></li>
                    <li><strong className="text-white">Cookies</strong> (veja seção específica)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Como Usamos */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <UserCheck className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">3. Como Usamos suas Informações</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Utilizamos seus dados pessoais para:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Responder suas solicitações de orçamento</li>
                    <li>Entrar em contato sobre nossos produtos e serviços</li>
                    <li>Enviar informações solicitadas</li>
                    <li>Melhorar nosso site e experiência do usuário</li>
                    <li>Análise de uso e estatísticas</li>
                    <li>Cumprir obrigações legais</li>
                  </ul>
                  <p className="text-slate-400 text-sm mt-4 p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                    <strong className="text-cyan-400">Importante:</strong> Nunca vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins de marketing sem seu consentimento explícito.
                  </p>
                </div>
              </div>
            </section>

            {/* Compartilhamento */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Lock className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">4. Compartilhamento de Dados</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Seus dados podem ser compartilhados apenas com:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Fornecedores de serviço:</strong> Provedores de email (Resend), hospedagem (Vercel), analytics</li>
                    <li><strong className="text-white">WhatsApp:</strong> Ao clicar para contato via WhatsApp</li>
                    <li><strong className="text-white">Autoridades:</strong> Quando exigido por lei</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Todos os fornecedores são cuidadosamente selecionados e possuem políticas de privacidade adequadas.
                  </p>
                </div>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Cookies</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Utilizamos cookies para melhorar sua experiência. Os cookies são pequenos arquivos armazenados em seu navegador.
                  </p>
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">Tipos de Cookies:</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Essenciais:</strong> Necessários para o funcionamento do site</li>
                    <li><strong className="text-white">Analytics:</strong> Para entender como você usa o site</li>
                    <li><strong className="text-white">Preferências:</strong> Para lembrar suas escolhas</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Você pode desabilitar cookies nas configurações do seu navegador, mas isso pode afetar a funcionalidade do site.
                  </p>
                </div>
              </div>
            </section>

            {/* Segurança */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Segurança dos Dados</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Criptografia SSL/TLS em todas as comunicações</li>
                    <li>Acesso restrito aos dados pessoais</li>
                    <li>Servidores seguros e atualizados</li>
                    <li>Backups regulares</li>
                    <li>Monitoramento de segurança</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Seus Direitos */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <UserCheck className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Seus Direitos (LGPD)</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    De acordo com a LGPD, você tem direito a:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Confirmação e acesso:</strong> Saber se processamos seus dados</li>
                    <li><strong className="text-white">Correção:</strong> Atualizar dados incompletos ou incorretos</li>
                    <li><strong className="text-white">Exclusão:</strong> Solicitar a remoção de seus dados</li>
                    <li><strong className="text-white">Portabilidade:</strong> Receber seus dados em formato estruturado</li>
                    <li><strong className="text-white">Revogação:</strong> Retirar consentimento a qualquer momento</li>
                    <li><strong className="text-white">Oposição:</strong> Opor-se ao tratamento de dados</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Para exercer seus direitos, entre em contato conosco através do email abaixo.
                  </p>
                </div>
              </div>
            </section>

            {/* Retenção */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Retenção de Dados</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Mantemos seus dados pessoais apenas pelo tempo necessário para os fins descritos nesta política, salvo se um período maior for exigido ou permitido por lei.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Após esse período, seus dados são excluídos de forma segura.
                  </p>
                </div>
              </div>
            </section>

            {/* Menores */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <UserCheck className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">9. Crianças e Adolescentes</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Nosso site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados de crianças ou adolescentes sem o consentimento dos pais ou responsáveis.
                  </p>
                </div>
              </div>
            </section>

            {/* Alterações */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">10. Alterações nesta Política</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas através do site ou por email. A data da última atualização será sempre indicada no topo da página.
                  </p>
                </div>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">11. Contato</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Para questões sobre esta Política de Privacidade ou para exercer seus direitos, entre em contato conosco:
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong className="text-white">Empresa:</strong> Alfa Esquadrias de Alumínio</p>
                    <p><strong className="text-white">Email:</strong> <a href="mailto:contato@alfaesquadrias.com.br" className="text-cyan-400 hover:text-cyan-300">contato@alfaesquadrias.com.br</a></p>
                    <p><strong className="text-white">Telefone:</strong> <a href="tel:1839045308" className="text-cyan-400 hover:text-cyan-300">(18) 3904-5308</a></p>
                    <p><strong className="text-white">Endereço:</strong> Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente - SP, 19050-220</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

        {/* Back to home */}
        <div className="text-center mt-12">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Site</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Alfa Esquadrias de Alumínio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
