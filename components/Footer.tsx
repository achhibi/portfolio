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
                  { name: 'Privacy & Security', href: '/privacy' },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-accent transition-colors duration-300"
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
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/chhibiamor/',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    ),
                  },
                  {
                    name: 'Stack Overflow',
                    href: 'https://stackoverflow.com/users/2867361/chhibi-amor',
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.134v6.404h15.008zM6.111 19.731H16.85v-2.141H6.111v2.141zm.259-4.852l10.48 1.45.203-2.141-10.476-1.451-.207 2.142zm1.352-4.568L17.281 13.645l.575-2.018-10.548-2.821-.575 2.019zm2.424-3.876l9.5 5.091.923-1.897-9.5-5.09-.923 1.896zM15.771 1.495L7.014 7.88l1.494 1.132 8.757-6.385-1.494-1.132z" />
                      </svg>
                    ),
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
                    {social.icon}
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
