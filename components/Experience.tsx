'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Groupe AGRICA',
    position: 'Développeur sénior Java EE',
    duration: 'Sept. 2024 - Aujourd\'hui',
    description: 'Digital Factory du groupe AGRICA. Intégration Keycloak, développement de SPIs personnalisés, implémentation MFA.',
    technologies: ['Java 21', 'Spring Boot', 'Keycloak', 'OAuth2', 'MariaDB', 'REST API'],
  },
  {
    company: 'Capgemini',
    position: 'Développeur sénior Java EE',
    duration: 'Avr. 2022 - Sept. 2024',
    description: 'Direction Grand Public d\'ENGIE. Développement d\'applications de facturation et consommation énergétique. Migration Java 8 → Java 17.',
    technologies: ['Java 8/17', 'Spring Boot', 'AWS', 'Vue.js', 'REST API', 'Grafana', 'GitLab CI'],
  },
  {
    company: 'CNP Assurances',
    position: 'Référent technique Java EE',
    duration: 'Jan. 2019 - Mar. 2022',
    description: 'Migration GED Alfresco. Implémentation client REST. Application de paramétrage IFRS17. Leadership technique et mentoring.',
    technologies: ['Java EE', 'Spring MVC', 'Spring Data', 'Alfresco', 'Oracle', 'JPA/Hibernate'],
  },
  {
    company: 'Business&Decision',
    position: 'Lead technique / Développeur sénior Java EE',
    duration: 'Avr. 2015 - Mar. 2017',
    description: 'Programme SIAT : 7 sous-systèmes d\'information intégrés. Leadership technique, modélisation UML, estimation et planning.',
    technologies: ['Java EE', 'JSF2', 'PrimeFaces', 'Spring 4', 'Hibernate', 'Oracle', 'Alfresco'],
  },
  {
    company: 'BNS Engineering',
    position: 'Développeur Java EE',
    duration: 'Juil. 2012 - Juin 2014',
    description: 'Projets financiers : CCF-SICAV, ODNO, CCF-FIX. Conception et modélisation UML. Implémentation protocole FIX 4.2.',
    technologies: ['Java/JEE', 'Oracle', 'JSF2', 'PrimeFaces', 'EJB3', 'PostgreSQL'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
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
            <h2 className="text-4xl md:text-5xl font-bold">Expérience Professionnelle</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-6 md:space-y-8 px-4 md:px-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-lg space-y-4 hover:border-accent transition-all duration-300 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-accent group-hover:text-accent2 transition-colors">
                      {exp.position}
                    </h3>
                    <p className="text-lg text-gray-400">{exp.company}</p>
                  </div>
                  <p className="text-sm font-semibold text-accent2 whitespace-nowrap">
                    {exp.duration}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm border border-accent/30 hover:border-accent/60 transition-all"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8">Formation</h3>
            <div className="space-y-4">
              <div className="glass p-4 rounded-lg">
                <p className="font-semibold text-lg">Cycle d'ingénieur</p>
                <p className="text-gray-400">École Nationale des Sciences de l'Informatique (ENSI) - 2009-2012</p>
              </div>
              <div className="glass p-4 rounded-lg">
                <p className="font-semibold text-lg">Classe Préparatoire (MPSI/MP)</p>
                <p className="text-gray-400">Institut Préparatoire aux Études d'Ingénieurs (IPEI) - 2007-2009</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
