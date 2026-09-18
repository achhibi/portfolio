'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">À propos</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 px-4 md:px-0"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Développeur senior Java/Spring Boot avec plus de 13 ans d'expérience dans la conception et le développement d'architectures complexes et scalables.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionné par les architectures microservices, le cloud computing, l'IA et les LLMs. Je suis un fervent défenseur du clean code, des principes SOLID et des meilleures pratiques de développement.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Actuellement développeur senior au sein du Groupe AGRICA, je travaille notamment sur des sujets liés à la gestion des identités et des accès (IAM), avec une expertise autour de Keycloak, ainsi que sur la modernisation et l'évolution des applications d'entreprise.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                En dehors du domaine informatique, les échecs constituent un loisir apprécié, notamment pour leur dimension stratégique et leur réflexion logique.
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-gray-400">
                  <strong className="text-accent">Localisation:</strong> France (Île-de-France)
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">Expérience:</strong> 13+ ans
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">Domaines:</strong> Java, Spring Boot, Cloud (AWS, GCP), Microservices, Architecture logicielle
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">Intérêts actuels:</strong> IA, LLMs, Prompt Engineering, AI Integration
                </p>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 md:gap-6 px-4 md:px-0"
            >
              {[
                { number: '13+', label: 'Années\nd\'expérience', icon: '📅' },
                { number: '50+', label: 'Projets\nGitHub', icon: '🗂️' },
                { number: '5+', label: 'Certifications\ntechniques', icon: '🏆' },
                { number: '100%', label: 'Dédication\nau code', icon: '💯' },
                { number: '2+', label: 'Langues\nMaîtrisées', icon: '🌍' },
                { number: '3+', label: 'Core\nFrameworks', icon: '🔧' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-lg text-center space-y-3 hover:border-accent transition-all duration-300"
                >
                  <div className="text-4xl">{stat.icon}</div>
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
