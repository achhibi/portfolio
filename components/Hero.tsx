'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const passions = [
  { label: 'Java & Spring Boot', icon: '☕', color: 'from-orange-500 to-red-500' },
  { label: 'AI & LLMs', icon: '🤖', color: 'from-purple-500 to-pink-500' },
  { label: 'Cloud Architecture', icon: '☁️', color: 'from-cyan-500 to-blue-500' },
  { label: 'Microservices', icon: '🏗️', color: 'from-green-500 to-emerald-500' },
  { label: 'Software Excellence', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
]

export default function Hero() {
  const [currentPassion, setCurrentPassion] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPassion((prev) => (prev + 1) % passions.length)
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
            <p className="text-accent text-lg font-semibold">Bienvenue</p>
          </motion.div>

          {/* Name & Title */}
          <motion.div
            variants={itemVariants}
            className="space-y-2"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg">
              Amor Chhibi
            </h1>
            <div className="text-2xl md:text-4xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-400">
                Ingénieur Informatique Senior
              </span>
            </div>
          </motion.div>

          {/* Passion Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 h-16"
          >
            <span className="text-gray-400 text-lg">Passionné par :</span>
            <motion.div
              key={currentPassion}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className={`px-6 py-3 rounded-full bg-gradient-to-r ${passions[currentPassion].color} text-white font-semibold shadow-lg`}
            >
              <span className="text-2xl mr-2">{passions[currentPassion].icon}</span>
              {passions[currentPassion].label}
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-100 text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium"
          >
            Avec 13+ ans d'expérience en développement Java/Spring Boot, Cloud et Microservices.
            <br/>
            <span className="text-cyan-300">Passionné par l'IA et les LLMs</span>, l'innovation technologique et l'excellence du code.
          </motion.p>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto pt-8"
          >
            {[
              { icon: '☕', label: 'Java 21', color: 'orange' },
              { icon: '🍃', label: 'Spring Boot', color: 'green' },
              { icon: '☁️', label: 'Cloud', color: 'cyan' },
              { icon: '🤖', label: 'AI/LLMs', color: 'purple' },
              { icon: '🏗️', label: 'Microservices', color: 'blue' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`glass p-4 rounded-lg text-center space-y-2 hover:border-${skill.color}-500 transition-all duration-300`}
              >
                <div className="text-3xl">{skill.icon}</div>
                <p className="text-sm font-semibold text-gray-200">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-12"
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
