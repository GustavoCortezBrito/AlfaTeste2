'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Award, 
  Clock, 
  MapPin,
  CheckCircle,
  Star,
  Target,
  Heart
} from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Clientes Satisfeitos',
      description: 'Projetos entregues com excelência'
    },
    {
      icon: Clock,
      number: '10+',
      label: 'Anos de Experiência',
      description: 'Tradição no mercado de esquadrias'
    },
    {
      icon: Award,
      number: '100%',
      label: 'Qualidade Garantida',
      description: 'Compromisso com a excelência'
    },
    {
      icon: MapPin,
      number: '50+',
      label: 'Cidades Atendidas',
      description: 'Cobertura em toda região'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precisão',
      description: 'Cada projeto é executado com máxima precisão e atenção aos detalhes.'
    },
    {
      icon: Heart,
      title: 'Paixão',
      description: 'Amor pelo que fazemos reflete na qualidade de cada trabalho entregue.'
    },
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos sempre superar expectativas e entregar o melhor resultado.'
    }
  ]

  return (
    <section id="sobre" className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 -rotate-12"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/20 rotate-45"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4 mr-2" />
            Sobre Nós
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Tradição e Inovação em
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Esquadrias de Alumínio
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A Alfa Esquadrias nasceu da paixão por transformar projetos em realidade, 
            combinando tradição familiar com as mais modernas técnicas do mercado.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">
              Nossa História
            </h3>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Fundada em Presidente Prudente/SP, a Alfa Esquadrias se consolidou como 
                referência em esquadrias de alumínio na região. Nossa trajetória é marcada 
                pela busca constante da excelência e inovação.
              </p>
              
              <p>
                Especializamo-nos em projetos residenciais, comerciais e industriais, 
                oferecendo soluções personalizadas que atendem às necessidades específicas 
                de cada cliente.
              </p>
              
              <p>
                Nossa equipe técnica altamente qualificada utiliza equipamentos de última 
                geração e materiais de primeira linha, garantindo durabilidade e acabamento 
                impecável em todos os projetos.
              </p>
            </div>

            {/* Features List */}
            <div className="mt-8 space-y-4">
              {[
                'Materiais de alta qualidade certificados',
                'Equipe técnica especializada e experiente',
                'Projetos personalizados e sob medida',
                'Garantia e suporte pós-instalação'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center border border-white/10">
              <div className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Award className="w-12 h-12 text-white" />
                </motion.div>
                <p className="text-slate-300 font-medium">
                  Imagem da empresa<br />
                  ou projetos realizados
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-blue-400/20 rounded-full"
            />
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-400/20 rounded-full"
            />
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group cursor-pointer"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/25"
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10"
        >
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
              Nossos Valores
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
              Os princípios que guiam nosso trabalho e definem nossa identidade como empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                >
                  <value.icon className="w-8 h-8 text-blue-400" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}