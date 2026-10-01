'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/app/providers'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: t('nav.github'), href: 'https://github.com/achhibi' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/chhibiamor/' },
    { name: 'Email', href: 'mailto:amor.chhibi@hotmail.fr' },
    { name: 'CV', href: '/CV.pdf' },
  ]

  return (
    <footer className="border-t border-border bg-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12">
            {/* About */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-accent">Amor Chhibi</h3>
              <p className="text-gray-400 leading-relaxed">
                {t('footer.about')}
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-accent">{t('footer.navigation')}</h3>
              <ul className="space-y-2">
                {[
                  { name: t('nav.about'), href: '#about' },
                  { name: t('nav.skills'), href: '#skills' },
                  { name: t('nav.experience'), href: '#experience' },
                  { name: t('nav.projects'), href: '#projects' },
                  { name: t('nav.opensource'), href: '#opensource' },
                  { name: t('footer.privacy'), href: '/privacy' },
                ].map((link: any) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault()
                          const element = document.querySelector(link.href)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-accent">{t('footer.connections')}</h3>
              <div className="flex gap-4">
                {[
                  {
                    name: 'GitHub',
                    href: 'https://github.com/achhibi',
                    logo: '/logos/github-icon.svg',
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/chhibiamor/',
                    logo: '/logos/linkedin-icon.svg',
                  },
                  {
                    name: 'Stack Overflow',
                    href: 'https://stackoverflow.com/users/2867361/chhibi-amor',
                    logo: '/logos/stackoverflow-icon.svg',
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-cyan-300 transition-colors duration-300"
                    title={social.name}
                  >
                    <Image
                      src={social.logo}
                      alt={social.name}
                      width={24}
                      height={24}
                      className="transition-opacity hover:opacity-80"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Amor Chhibi. {t('footer.copyright')}
            </p>
            <p className="text-gray-400 text-sm">
              {t('footer.madeWith')} <span className="text-accent">♥</span> {t('footer.developedWith')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
