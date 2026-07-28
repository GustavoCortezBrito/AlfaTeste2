import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Ban, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Serviço | Alfa Esquadrias",
  description: "Termos de serviço da Alfa Esquadrias de Alumínio. Conheça as condições de uso de nossos serviços.",
};

export default function TermsPage() {
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
            <Scale className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Termos de Serviço
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
                  <h2 className="text-2xl font-bold text-white mb-3">1. Aceitação dos Termos</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Bem-vindo à <strong className="text-white">Alfa Esquadrias de Alumínio</strong>. Ao acessar e usar nosso site e serviços, você concorda em cumprir e estar vinculado aos seguintes Termos de Serviço.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Se você não concordar com qualquer parte destes termos, por favor, não use nosso site ou serviços.
                  </p>
                </div>
              </div>
            </section>

            {/* Serviços */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Zap className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">2. Nossos Serviços</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    A Alfa Esquadrias oferece:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Fabricação e instalação de esquadrias de alumínio sob medida</li>
                    <li>Instalação de vidros temperados e laminados</li>
                    <li>Portas pivotantes, janelas integradas, pele de vidro</li>
                    <li>Box de banheiro, guarda-corpos, cortina de vidro</li>
                    <li>Orçamentos gratuitos</li>
                    <li>Consultoria técnica</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Orçamentos */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">3. Orçamentos e Contratação</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">3.1. Solicitação de Orçamento</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Orçamentos são <strong className="text-white">gratuitos e sem compromisso</strong></li>
                    <li>Válidos por <strong className="text-white">30 dias</strong> a partir da emissão</li>
                    <li>Sujeitos a alterações em caso de mudança de especificações</li>
                    <li>Requerem visita técnica para medições precisas</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">3.2. Contratação</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Contrato formal será fornecido após aprovação do orçamento</li>
                    <li>Pagamento conforme condições especificadas no contrato</li>
                    <li>Prazo de entrega informado no momento da contratação</li>
                    <li>Possibilidade de alterações mediante acordo mútuo</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Prazos */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">4. Prazos e Entrega</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    Nossos prazos de execução:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Medição:</strong> Agendada em até 48 horas úteis após aprovação</li>
                    <li><strong className="text-white">Fabricação:</strong> 20 a 45 dias úteis (conforme complexidade)</li>
                    <li><strong className="text-white">Instalação:</strong> Agendada após conclusão da fabricação</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Os prazos podem variar devido a fatores externos como condições climáticas, disponibilidade de materiais especiais ou alterações no projeto.
                  </p>
                  <div className="p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg mt-4">
                    <p className="text-amber-300 text-sm">
                      <strong>Importante:</strong> Atrasos serão comunicados com antecedência sempre que possível.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Garantia */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Garantia</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">5.1. Cobertura</h3>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    Oferecemos garantia de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">5 anos:</strong> Defeitos de fabricação em perfis de alumínio</li>
                    <li><strong className="text-white">1 ano:</strong> Instalação e vedação</li>
                    <li><strong className="text-white">90 dias:</strong> Ferragens e acessórios</li>
                    <li><strong className="text-white">Conforme fabricante:</strong> Vidros temperados</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">5.2. Exclusões</h3>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    A garantia <strong className="text-white">não cobre</strong>:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Danos causados por uso inadequado ou acidentes</li>
                    <li>Desgaste natural pelo uso</li>
                    <li>Alterações feitas por terceiros não autorizados</li>
                    <li>Falta de manutenção recomendada</li>
                    <li>Fenômenos da natureza (raios, vendavais extremos, etc.)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pagamento */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Pagamento</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">6.1. Formas de Pagamento</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Dinheiro</li>
                    <li>PIX</li>
                    <li>Cartão de crédito (até 10x)</li>
                    <li>Cartão de débito</li>
                    <li>Boleto bancário</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">6.2. Condições</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Sinal:</strong> 50% na aprovação do orçamento</li>
                    <li><strong className="text-white">Restante:</strong> Na entrega/instalação</li>
                    <li>Parcelamento conforme disponibilidade</li>
                    <li>Atraso no pagamento pode resultar em suspensão do serviço</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cancelamento */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Ban className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Cancelamento e Devolução</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">7.1. Cancelamento pelo Cliente</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li><strong className="text-white">Antes da fabricação:</strong> Reembolso de 100% (descontadas taxas administrativas de 10%)</li>
                    <li><strong className="text-white">Após início da fabricação:</strong> Reembolso de 50%</li>
                    <li><strong className="text-white">Após instalação:</strong> Não há reembolso</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">7.2. Cancelamento pela Empresa</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Reservamos o direito de cancelar ou recusar serviços em casos de:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4 mt-2">
                    <li>Informações falsas fornecidas</li>
                    <li>Impossibilidade técnica de execução</li>
                    <li>Inadimplência</li>
                    <li>Comportamento inadequado</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Em caso de cancelamento pela empresa, haverá reembolso integral dos valores pagos.
                  </p>
                </div>
              </div>
            </section>

            {/* Responsabilidades */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Scale className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Responsabilidades</h2>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 mt-4">8.1. Da Empresa</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Fornecer produtos de qualidade conforme especificações</li>
                    <li>Cumprir prazos acordados (salvo imprevistos)</li>
                    <li>Realizar instalação profissional</li>
                    <li>Prestar suporte pós-venda</li>
                    <li>Honrar a garantia nos termos estabelecidos</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-white mb-2 mt-6">8.2. Do Cliente</h3>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Fornecer informações precisas e completas</li>
                    <li>Garantir acesso ao local para medições e instalação</li>
                    <li>Efetuar pagamentos nos prazos acordados</li>
                    <li>Permitir condições adequadas para instalação</li>
                    <li>Realizar manutenção conforme orientações</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Limitação */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <AlertCircle className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">9. Limitação de Responsabilidade</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    A Alfa Esquadrias não se responsabiliza por:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-slate-300 ml-4">
                    <li>Danos indiretos ou consequenciais</li>
                    <li>Problemas causados por estruturas pré-existentes inadequadas</li>
                    <li>Instalações realizadas por terceiros não autorizados</li>
                    <li>Mudanças nas normas técnicas após a instalação</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-4">
                    Nossa responsabilidade está limitada ao valor pago pelo serviço contratado.
                  </p>
                </div>
              </div>
            </section>

            {/* Propriedade Intelectual */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">10. Propriedade Intelectual</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Todo o conteúdo deste site, incluindo textos, imagens, logos e design, é propriedade da Alfa Esquadrias e está protegido por leis de direitos autorais. É proibido copiar, reproduzir ou distribuir sem autorização prévia.
                  </p>
                </div>
              </div>
            </section>

            {/* Lei Aplicável */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <Scale className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">11. Lei Aplicável e Foro</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Estes Termos de Serviço são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de <strong className="text-white">Presidente Prudente - SP</strong> para dirimir quaisquer questões decorrentes destes termos.
                  </p>
                </div>
              </div>
            </section>

            {/* Alterações */}
            <section>
              <div className="flex items-start space-x-3 mb-4">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">12. Alterações nos Termos</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Reservamos o direito de modificar estes Termos de Serviço a qualquer momento. Alterações serão publicadas nesta página com a data da última atualização. O uso continuado de nossos serviços após as alterações constitui aceitação dos novos termos.
                  </p>
                </div>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <FileText className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">13. Contato</h2>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Para dúvidas sobre estes Termos de Serviço, entre em contato:
                  </p>
                  <div className="space-y-2 text-slate-300">
                    <p><strong className="text-white">Empresa:</strong> Alfa Esquadrias de Alumínio</p>
                    <p><strong className="text-white">Email:</strong> <a href="mailto:contato@alfaesquadrias.com.br" className="text-cyan-400 hover:text-cyan-300">contato@alfaesquadrias.com.br</a></p>
                    <p><strong className="text-white">Telefone:</strong> <a href="tel:1839045308" className="text-cyan-400 hover:text-cyan-300">(18) 3904-5308</a></p>
                    <p><strong className="text-white">WhatsApp:</strong> <a href="https://wa.me/551839045308" className="text-cyan-400 hover:text-cyan-300">(18) 3904-5308</a></p>
                    <p><strong className="text-white">Endereço:</strong> Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente - SP, 19050-220</p>
                    <p><strong className="text-white">Horário:</strong> Segunda a Sexta, 08:00 às 18:00</p>
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
