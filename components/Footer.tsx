'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: 'GitHub', href: 'https://github.com/achhibi' },
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
                Senior Java Developer & Technical Leader specializing in cloud-native architectures and enterprise solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-accent">Navigation</h3>
              <ul className="space-y-2">
                {[
                  { name: 'À propos', href: '#about' },
                  { name: 'Compétences', href: '#skills' },
                  { name: 'Expérience', href: '#experience' },
                  { name: 'Projets', href: '#projects' },
                  { name: 'Open Source', href: '#opensource' },
                  { name: 'Privacy & Security', href: '/privacy' },
                ].map((link) => (
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
              <h3 className="text-lg font-bold text-accent">Connexions</h3>
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
                    <img
                      src={social.logo}
                      alt={social.name}
                      className="w-6 h-6 transition-opacity hover:opacity-80"
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
              © {currentYear} Amor Chhibi. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Conçu avec <span className="text-accent">♥</span> et développé avec Next.js & React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
