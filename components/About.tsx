'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/hooks/useLanguage'

export default function About() {
  const { t, language } = useLanguage()

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
            <h2 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h2>
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
                {t('about.bio1')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.bio2')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.bio3')}
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                {t('about.bio4')}
              </p>
              <div className="pt-4 space-y-3">
                <p className="text-gray-400">
                  <strong className="text-accent">{language === 'fr' ? 'Localisation:' : 'Location:'}</strong> {t('about.location')}
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">{language === 'fr' ? 'Expérience:' : 'Experience:'}</strong> {t('about.experience')}
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">{language === 'fr' ? 'Domaines:' : 'Domains:'}</strong> {t('about.domains')}
                </p>
                <p className="text-gray-400">
                  <strong className="text-accent">{language === 'fr' ? 'Intérêts actuels:' : 'Current Interests:'}</strong> {t('about.interests')}
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
                { number: '13+', labelKey: 'about.stats.years', icon: '📅' },
                { number: '50+', labelKey: 'about.stats.projects', icon: '🗂️' },
                { number: '5+', labelKey: 'about.stats.certifications', icon: '🏆' },
                { number: '100%', labelKey: 'about.stats.dedication', icon: '💯' },
                { number: '2+', labelKey: 'about.stats.languages', icon: '🌍' },
                { number: '3+', labelKey: 'about.stats.frameworks', icon: '🔧' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-lg text-center space-y-3 hover:border-accent transition-all duration-300"
                >
                  <div className="text-4xl">{stat.icon}</div>
                  <div className="text-2xl font-bold text-accent">{stat.number}</div>
                  <p className="text-sm text-gray-400 whitespace-pre-line">{t(stat.labelKey)}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
