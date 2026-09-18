'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'AI-Powered Spring Boot Applications',
    description: 'Intégration d\'LLMs et Claude AI dans applications Spring Boot. Exploration du Prompt Engineering et des chatbots intelligents.',
    tags: ['LLMs', 'Claude API', 'Spring Boot', 'AI Integration'],
    link: 'https://github.com/achhibi',
  },
  {
    title: 'Java 21 New Features',
    description: 'Exploration et démonstration des nouvelles fonctionnalités de Java 21 avec exemples pratiques.',
    tags: ['Java 21', 'Virtual Threads', 'Pattern Matching', 'Records'],
    link: 'https://github.com/achhibi/java21-new-features',
  },
  {
    title: 'Keycloak Multi-tenant Spring Security',
    description: 'Implémentation OAuth2 multi-tenant avec Keycloak et Spring Security, incluant Docker Compose.',
    tags: ['Keycloak', 'OAuth2', 'Spring Security', 'Docker'],
    link: 'https://github.com/achhibi/keycloak-multitenant-spring-security',
  },
  {
    title: 'Springdoc OpenAPI Demo',
    description: 'Démonstration de la migration de Swagger vers Springdoc avec documentation Actuator.',
    tags: ['Spring Boot', 'OpenAPI', 'Swagger', 'REST API'],
    link: 'https://github.com/achhibi/springdoc-openapi-demo',
  },
  {
    title: 'Microservices Architecture',
    description: 'Architecture microservices complète avec service discovery, load balancing et monitoring.',
    tags: ['Microservices', 'Spring Cloud', 'Docker', 'Kubernetes'],
    link: 'https://github.com/achhibi',
  },
  {
    title: 'Cloud Native Applications',
    description: 'Applications natives cloud déployées sur AWS et GCP avec CI/CD automation.',
    tags: ['AWS', 'GCP', 'Cloud Native', 'DevOps'],
    link: 'https://github.com/achhibi',
  },
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl md:text-5xl font-bold">Projets Récents</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
            <p className="text-gray-400">Plus de 50 projets open source sur GitHub</p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0"
          >
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass p-6 rounded-lg space-y-4 hover:border-accent transition-all duration-300 group cursor-pointer h-full flex flex-col"
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold text-accent group-hover:text-accent2 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md bg-accent/10 text-accent text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold">Voir le projet</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <a
              href="https://github.com/achhibi?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent hover:text-primary transition-all duration-300 group"
            >
              Voir tous mes projets
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
