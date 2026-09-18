'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: 'Langages de programmation',
    skills: ['Java SE (6-21)', 'TypeScript', 'JavaScript', 'Python', 'SQL/PL-SQL'],
  },
  {
    name: 'Frameworks & Librairies',
    skills: ['Spring Boot', 'Spring Cloud', 'Spring Security', 'Jakarta EE', 'Quarkus', 'React'],
  },
  {
    name: 'Cloud & Infrastructure',
    skills: ['AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Jenkins'],
  },
  {
    name: 'Bases de données',
    skills: ['Oracle', 'PostgreSQL', 'MySQL', 'MariaDB', 'Redis', 'Elasticsearch'],
  },
  {
    name: 'Architecture & Patterns',
    skills: ['Microservices', 'REST APIs', 'Event-Driven', 'CQRS', 'DDD', 'Design Patterns'],
  },
  {
    name: 'IAM & Sécurité',
    skills: ['Keycloak', 'Okta', 'OAuth2', 'OpenID Connect', 'SAML', 'SSL/TLS'],
  },
  {
    name: 'IA & Machine Learning',
    skills: ['LLMs (Claude, GPT)', 'Prompt Engineering', 'AI Integration', 'ML Concepts', 'Data Processing', 'NLP'],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl md:text-5xl font-bold">Compétences</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="glass p-6 rounded-lg space-y-4 hover:border-accent transition-all duration-300 group"
              >
                <h3 className="text-xl font-bold text-accent group-hover:text-accent2 transition-colors">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-2 h-2 bg-accent2 rounded-full" />
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { year: '2024', title: 'SAFe 6 Practitioner', org: 'Scaled Agile' },
                { year: '2022', title: 'Google Cloud Digital Leader', org: 'Google Cloud' },
                { year: '2020', title: 'Spring Core 5.0 Certified Professional', org: 'Pivotal' },
                { year: '2014', title: 'Oracle Certified Expert JEE 6', org: 'Oracle' },
                { year: '2013', title: 'Oracle Certified Professional Java SE 6', org: 'Oracle' },
              ].map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-4 rounded-lg text-center space-y-2 hover:border-accent transition-all duration-300"
                >
                  <p className="text-sm text-accent2 font-semibold">{cert.year}</p>
                  <p className="font-semibold">{cert.title}</p>
                  <p className="text-sm text-gray-400">{cert.org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
