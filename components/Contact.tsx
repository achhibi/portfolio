'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nouveau message de ${formData.name}`,
        }),
      })

      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setStatusMessage('Message envoyé avec succès! Je vous répondrai bientôt.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setStatusMessage('Erreur lors de l\'envoi. Veuillez réessayer.')
      }
    } catch (error) {
      setStatus('error')
      setStatusMessage('Erreur de connexion. Veuillez réessayer.')
    }
  }

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


          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-lg max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Votre nom"
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="votre.email@example.com"
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Votre message..."
                  rows={5}
                  className="w-full bg-slate-800/50 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-accent to-accent2 text-slate-900 font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Envoi...' : 'Envoyer le message'}
              </button>

              {/* Status Messages */}
              {statusMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm font-semibold ${
                    status === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-300'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  {statusMessage}
                </motion.div>
              )}
            </form>
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
