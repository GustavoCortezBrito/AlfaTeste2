'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react'

export default function TermosServico() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Alfa Esquadrias</h1>
                <p className="text-sm text-slate-400">Esquadrias de Alumínio</p>
              </div>
            </Link>
            
            <Link 
              href="/"
              className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Voltar ao Site</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
            >
              <Scale className="w-4 h-4 mr-2" />
              Termos de Serviço
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Termos de
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Serviço
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed">
              Última atualização: Janeiro de 2026
            </p>
          </div>

          {/* Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 lg:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">1. Aceitação dos Termos</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Ao contratar os serviços da Alfa Esquadrias, você concorda em cumprir e estar vinculado 
                    a estes Termos de Serviço. Se você não concordar com qualquer parte destes termos, 
                    não deve utilizar nossos serviços.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">2. Serviços Oferecidos</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <p>A Alfa Esquadrias oferece os seguintes serviços:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fabricação e instalação de kit sacada</li>
                    <li>Coberturas metálicas para residências e comércios</li>
                    <li>Guarda-corpos em alumínio e vidro</li>
                    <li>Fechamento de áreas (fechadas)</li>
                    <li>Portas e janelas de alumínio</li>
                    <li>Serviços de manutenção e reparo</li>
                    <li>Consultoria técnica e projetos personalizados</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">3. Orçamentos e Contratos</h2>
                <div className="text-slate-300 space-y-4">
                  <p><strong className="text-white">3.1 Orçamentos:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Todos os orçamentos são gratuitos e sem compromisso</li>
                    <li>Orçamentos têm validade de 30 dias</li>
                    <li>Visita técnica pode ser necessária para orçamentos precisos</li>
                  </ul>
                  
                  <p><strong className="text-white">3.2 Contratos:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Todos os serviços devem ser formalizados por contrato escrito</li>
                    <li>Alterações no projeto podem resultar em custos adicionais</li>
                    <li>O cliente deve fornecer informações precisas sobre o local da instalação</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">4. Pagamentos</h2>
                <div className="text-slate-300 space-y-4">
                  <p><strong className="text-white">4.1 Formas de Pagamento:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Dinheiro, PIX, cartão de crédito/débito, boleto bancário</li>
                    <li>Parcelamento disponível conforme acordo</li>
                    <li>Entrada pode ser solicitada para início dos trabalhos</li>
                  </ul>
                  
                  <p><strong className="text-white">4.2 Condições:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Pagamentos em atraso podem resultar em juros e multa</li>
                    <li>Inadimplência pode suspender os trabalhos</li>
                    <li>Quitação total necessária antes da entrega final</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">5. Prazos de Execução</h2>
                <div className="text-slate-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Prazos são estabelecidos no contrato e podem variar conforme complexidade</li>
                    <li>Condições climáticas adversas podem afetar prazos de instalação</li>
                    <li>Alterações no projeto podem estender prazos originais</li>
                    <li>Cliente será notificado sobre qualquer alteração de prazo</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">6. Garantias</h2>
                <div className="text-slate-300 space-y-4">
                  <p><strong className="text-white">6.1 Garantia de Produtos:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Estruturas de alumínio: 5 anos contra defeitos de fabricação</li>
                    <li>Vidros e acessórios: 1 ano contra defeitos</li>
                    <li>Instalação: 1 ano contra problemas de montagem</li>
                  </ul>
                  
                  <p><strong className="text-white">6.2 Exclusões da Garantia:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Danos causados por mau uso ou negligência</li>
                    <li>Desgaste natural dos materiais</li>
                    <li>Danos causados por terceiros</li>
                    <li>Alterações não autorizadas pelo cliente</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">7. Responsabilidades do Cliente</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Fornecer acesso adequado ao local da instalação</li>
                    <li>Garantir que o local esteja preparado conforme especificações</li>
                    <li>Informar sobre condições especiais do imóvel</li>
                    <li>Estar presente ou designar responsável durante a instalação</li>
                    <li>Realizar manutenção preventiva conforme orientações</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitação de Responsabilidade</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    A Alfa Esquadrias não se responsabiliza por danos indiretos, lucros cessantes 
                    ou danos consequenciais. Nossa responsabilidade está limitada ao valor do contrato.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">9. Cancelamento</h2>
                <div className="text-slate-300 space-y-4">
                  <p><strong className="text-white">9.1 Pelo Cliente:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Cancelamento antes do início: reembolso integral</li>
                    <li>Cancelamento após início: cobrança proporcional aos trabalhos executados</li>
                    <li>Materiais já adquiridos serão cobrados</li>
                  </ul>
                  
                  <p><strong className="text-white">9.2 Pela Alfa Esquadrias:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Inadimplência do cliente</li>
                    <li>Impossibilidade técnica superveniente</li>
                    <li>Descumprimento das obrigações pelo cliente</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">10. Alterações nos Termos</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Estes termos podem ser atualizados periodicamente. Clientes serão notificados 
                    sobre mudanças significativas. O uso continuado dos serviços constitui aceitação 
                    dos termos revisados.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30"
              >
                <h2 className="text-2xl font-bold text-white mb-4">11. Contato e Suporte</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Para dúvidas sobre estes Termos de Serviço ou questões relacionadas aos nossos serviços:
                  </p>
                  <div className="space-y-2">
                    <p><strong className="text-white">E-mail:</strong> atendimentoalfaesquadriaspp@gmail.com</p>
                    <p><strong className="text-white">Telefone:</strong> (18) 99697-6413 | (18) 99671-8920</p>
                    <p><strong className="text-white">Endereço:</strong> Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente/SP</p>
                    <p><strong className="text-white">Horário de Atendimento:</strong> Segunda a Sexta: 08:00-18:00 | Sábado: 08:00-12:00</p>
                  </div>
                </div>
              </motion.section>

            </div>
          </div>
        </motion.div>
      </main>
    </div>
  )
}