'use client'

import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-primary pt-32 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy & Security</h1>
            <p className="text-gray-400">Last updated: September 18, 2026</p>
          </div>

          {/* Privacy */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Privacy Policy</h2>
            <div className="glass p-6 rounded-lg space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>No Data Collection:</strong> This portfolio does not collect, store, or process any personal data. No cookies, tracking pixels, or analytics tools are used.
              </p>
              <p>
                <strong>Third-party Services:</strong> Links to GitHub, LinkedIn, and Stack Overflow are external services. Please review their privacy policies.
              </p>
              <p>
                <strong>Contact:</strong> Contact information provided is intentionally public for professional networking purposes only.
              </p>
            </div>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Security Measures</h2>
            <div className="glass p-6 rounded-lg space-y-4 text-gray-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>HTTPS/TLS encryption for all traffic</li>
                <li>Strict Content Security Policy (CSP)</li>
                <li>X-Frame-Options protection against clickjacking</li>
                <li>XSS protection headers enabled</li>
                <li>Strict-Transport-Security for secure connections</li>
                <li>Regular security audits and updates</li>
                <li>No sensitive data stored or transmitted</li>
              </ul>
            </div>
          </section>

          {/* Reporting Vulnerabilities */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Report Security Issues</h2>
            <div className="glass p-6 rounded-lg space-y-4 text-gray-300 leading-relaxed">
              <p>
                If you discover a security vulnerability, please report it responsibly:
              </p>
              <p>
                <strong>GitHub Security Advisory:</strong>{' '}
                <a
                  href="https://github.com/achhibi/portfolio/security/advisories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300 hover:text-cyan-200"
                >
                  Report here
                </a>
              </p>
              <p>
                <strong>Email:</strong> Use GitHub security form (no public email exposure)
              </p>
            </div>
          </section>

          {/* Data We Don't Collect */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">What We Don't Do</h2>
            <div className="glass p-6 rounded-lg space-y-4 text-gray-300 leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>No Google Analytics or tracking</li>
                <li>No cookies or local storage</li>
                <li>No form submissions (links only)</li>
                <li>No IP address logging</li>
                <li>No advertisements</li>
                <li>No third-party scripts (except essential CDN resources)</li>
                <li>No personal data collection</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-accent">Contact & Support</h2>
            <div className="glass p-6 rounded-lg space-y-4 text-gray-300 leading-relaxed">
              <p>
                For questions about this privacy policy or security practices:
              </p>
              <ul className="space-y-2">
                <li>
                  <strong>GitHub:</strong>{' '}
                  <a
                    href="https://github.com/achhibi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    @achhibi
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{' '}
                  <a
                    href="https://www.linkedin.com/in/chhibiamor/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 hover:text-cyan-200"
                  >
                    Amor Chhibi
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  )
}
