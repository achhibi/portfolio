'use client'

import { motion } from 'framer-motion'

export default function Contact() {

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Entrez en contact</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent2 mx-auto rounded-full" />
            <p className="text-gray-400 text-lg">Discutons de vos projets et opportunités</p>
          </div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-2xl mx-auto px-4 md:px-0"
          >
            {[
              {
                icon: '💼',
                title: 'LinkedIn',
                value: 'Amor Chhibi',
                link: 'https://www.linkedin.com/in/chhibiamor/',
              },
              {
                icon: '🐙',
                title: 'GitHub',
                value: '@achhibi',
                link: 'https://github.com/achhibi',
              },
              {
                icon: '🏆',
                title: 'Stack Overflow',
                value: 'chhibi-amor',
                link: 'https://stackoverflow.com/users/2867361/chhibi-amor',
              },
            ].map((contact, index) => {
              // Validate URL to prevent open redirect
              const isValidUrl = (url: string) => {
                try {
                  const parsed = new URL(url)
                  return ['https:', 'http:'].includes(parsed.protocol)
                } catch {
                  return false
                }
              }
              return (
                <motion.a
                  key={index}
                  href={isValidUrl(contact.link) ? contact.link : '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-lg text-center space-y-3 hover:border-accent transition-all duration-300 group cursor-pointer"
                >
                  <div className="text-4xl">{contact.icon}</div>
                  <h3 className="text-lg font-semibold text-accent group-hover:text-accent2 transition-colors">
                    {contact.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.value}</p>
                </motion.a>
              )
            })}
          </motion.div>


          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center pt-8 space-y-6"
          >
            <p className="text-gray-300 text-lg">
              Disponible pour des missions de freelance, consulting ou opportunités CDI. <br />
              Je réponds généralement dans les 24-48 heures.
            </p>
            <div className="space-y-3 text-gray-400">
              <p className="font-semibold text-accent">Me contacter via :</p>
              <p>LinkedIn • GitHub • Stack Overflow</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
