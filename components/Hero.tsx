'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const roles = [
  'Senior Java Developer',
  'Technical Leader',
  'Cloud Architect',
  'Spring Boot Expert',
  'Microservices Specialist',
]

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 gradient-bg"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <p className="text-accent text-lg font-semibold">Bienvenue sur mon portfolio</p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold space-y-4"
          >
            <span className="block text-white drop-shadow-lg">Amor Chhibi</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-200 to-violet-400 font-extrabold drop-shadow-lg">
              Technical Leader
            </span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div variants={itemVariants} className="h-8">
            <motion.p
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-2xl text-gray-100 font-semibold drop-shadow-md"
            >
              {roles[currentRole]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-100 text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium"
          >
            Spécialiste en architectures cloud natives, microservices et transformations numériques.
            Passionné par l'IA, les LLMs, les nouvelles technologies, l'open source et l'excellence du code.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <a
              href="#about"
              className="px-8 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105"
            >
              En savoir plus
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border-2 border-cyan-300 text-cyan-300 font-bold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              Me contacter
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/achhibi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/chhibiamor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-8"
          >
            <svg className="w-6 h-6 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
