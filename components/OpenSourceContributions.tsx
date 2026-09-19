'use client'

import { motion } from 'framer-motion'

export default function OpenSourceContributions() {
  const contributions = [
    {
      name: 'Zalando Logbook',
      description: 'An extensible Java library for HTTP request and response logging',
      stars: '2.1k',
      icon: '📚',
      color: 'from-orange-500 to-red-500',
      link: 'https://github.com/zalando/logbook',
      tags: ['Java', 'Logging', 'HTTP'],
    },
    {
      name: 'Spring Framework',
      description: 'Core Spring Framework contributions and improvements',
      stars: '50k+',
      icon: '🍃',
      color: 'from-green-500 to-emerald-500',
      link: 'https://github.com/spring-projects/spring-framework',
      tags: ['Java', 'Spring', 'Framework'],
    },
    {
      name: 'Keycloak',
      description: 'Open Source Identity and Access Management solution',
      stars: '20k+',
      icon: '🔐',
      color: 'from-red-500 to-pink-500',
      link: 'https://github.com/keycloak/keycloak',
      tags: ['OAuth2', 'OIDC', 'IAM'],
    },
    {
      name: 'Keycloak Multitenant',
      description: 'Spring Security integration for Keycloak with multitenant support',
      stars: 'Custom',
      icon: '🔓',
      color: 'from-violet-500 to-purple-500',
      link: 'https://github.com/achhibi/keycloak-multitenant-spring-security',
      tags: ['Keycloak', 'Spring Security', 'Multitenant'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="opensource" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">🔓 Open Source Contributions</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Contributions reconnues par la communauté open source mondiale.
            <br />
            Passionné par les solutions enterprise et l'innovation partagée.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {contributions.map((project, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Card */}
              <div className="glass p-8 rounded-xl space-y-4 h-full hover:border-accent transition-all duration-300 cursor-pointer">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{project.icon}</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>

                {/* Stars Badge */}
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${project.color} bg-opacity-20 border border-opacity-30`}>
                  <span className="text-xs font-semibold text-gray-200">
                    ⭐ {project.stars}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-slate-700/50 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Indicator */}
                <div className="pt-4 flex items-center gap-2 text-accent group-hover:gap-3 transition-all">
                  <span className="text-sm font-semibold">Voir sur GitHub</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Voir plus de contributions sur mon profil GitHub
          </p>
          <a
            href="https://github.com/achhibi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-accent to-accent2 text-slate-900 font-bold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Profil GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
