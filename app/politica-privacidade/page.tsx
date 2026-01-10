'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react'

export default function PoliticaPrivacidade() {
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
              <Shield className="w-4 h-4 mr-2" />
              Política de Privacidade
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Política de
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Privacidade
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
                  <Eye className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">1. Informações que Coletamos</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <p>
                    A Alfa Esquadrias coleta informações quando você entra em contato conosco através do nosso site, 
                    formulários de contato, WhatsApp ou outros canais de comunicação.
                  </p>
                  <p><strong className="text-white">Informações pessoais que podemos coletar:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Nome completo</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Endereço residencial ou comercial</li>
                    <li>Informações sobre o projeto desejado</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <FileText className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">2. Como Usamos suas Informações</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <p>Utilizamos suas informações pessoais para:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Responder às suas solicitações de orçamento e dúvidas</li>
                    <li>Fornecer informações sobre nossos produtos e serviços</li>
                    <li>Agendar visitas técnicas e instalações</li>
                    <li>Manter comunicação sobre projetos em andamento</li>
                    <li>Melhorar nossos serviços e atendimento ao cliente</li>
                    <li>Cumprir obrigações legais e contratuais</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center mb-4">
                  <Lock className="w-6 h-6 text-blue-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">3. Proteção de Dados</h2>
                </div>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger 
                    suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                  <p><strong className="text-white">Medidas de segurança incluem:</strong></p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Criptografia de dados em trânsito (HTTPS)</li>
                    <li>Acesso restrito às informações pessoais</li>
                    <li>Treinamento de funcionários sobre proteção de dados</li>
                    <li>Monitoramento regular de sistemas de segurança</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento de Informações</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para 
                    fins comerciais. Podemos compartilhar informações apenas nas seguintes situações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Com seu consentimento explícito</li>
                    <li>Para cumprir obrigações legais</li>
                    <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                    <li>Para proteger nossos direitos legais</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos</h2>
                <div className="text-slate-300 space-y-4">
                  <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Acesso aos seus dados pessoais</li>
                    <li>Correção de dados incompletos, inexatos ou desatualizados</li>
                    <li>Eliminação de dados desnecessários ou tratados em desconformidade</li>
                    <li>Portabilidade dos dados</li>
                    <li>Revogação do consentimento</li>
                    <li>Informações sobre o uso compartilhado de dados</li>
                  </ul>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies e Tecnologias Similares</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência 
                    de navegação e analisar o uso do site. Você pode configurar seu navegador para recusar cookies.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">7. Retenção de Dados</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir as 
                    finalidades descritas nesta política, salvo quando a retenção for exigida por lei.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-4">8. Alterações nesta Política</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre 
                    mudanças significativas através do nosso site ou por e-mail.
                  </p>
                </div>
              </motion.section>

              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-xl p-6 border border-blue-500/30"
              >
                <h2 className="text-2xl font-bold text-white mb-4">9. Contato</h2>
                <div className="text-slate-300 space-y-4">
                  <p>
                    Para exercer seus direitos ou esclarecer dúvidas sobre esta Política de Privacidade, 
                    entre em contato conosco:
                  </p>
                  <div className="space-y-2">
                    <p><strong className="text-white">E-mail:</strong> atendimentoalfaesquadriaspp@gmail.com</p>
                    <p><strong className="text-white">Telefone:</strong> (18) 99697-6413 | (18) 99671-8920</p>
                    <p><strong className="text-white">Endereço:</strong> Av. Joaquim Constantino, 1880 - Vila Nova Prudente, Presidente Prudente/SP</p>
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