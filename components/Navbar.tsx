'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/hooks/useLanguage'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const pathname = usePathname()
  const { theme, toggleTheme, mounted: themeLoaded } = useTheme()
  const { language, toggleLanguage, mounted: langLoaded, t } = useLanguage()

  // Detect active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'opensource', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // Hide navbar on privacy page
  if (pathname === '/privacy') {
    return null
  }

  const navItems = [
    { name: t('nav.home'), href: '#hero' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.opensource'), href: '#opensource' },
    { name: t('nav.contact'), href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full glass border-b border-border z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-cyan-300">AC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-300 border-b-2 border-cyan-300'
                      : 'text-gray-200 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </div>

          {/* Theme Toggle, Language Selector & GitHub Button - Visible on all screens */}
          <div className="flex gap-2 sm:gap-3 items-center">
            {/* Language Selector - With Flags */}
            {langLoaded && (
              <button
                onClick={toggleLanguage}
                className="relative inline-flex items-center h-10 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-600 dark:to-blue-700 hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-300 dark:border-cyan-700 group"
                title={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
              >
                {/* Animated background circle */}
                <div
                  className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-md transition-all duration-300 flex items-center justify-center text-lg ${
                    language === 'fr' ? 'translate-x-0' : 'translate-x-10'
                  }`}
                >
                  {language === 'fr' ? '🇫🇷' : '🇬🇧'}
                </div>

                {/* Background flags */}
                <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-lg">
                  <span className="opacity-50">🇫🇷</span>
                  <span className="opacity-50">🇬🇧</span>
                </div>
              </button>
            )}

            {/* Theme Toggle - Modern Switch */}
            {themeLoaded && (
              <button
                onClick={toggleTheme}
                className="relative inline-flex items-center h-10 w-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 dark:from-slate-600 dark:to-slate-700 hover:shadow-lg hover:shadow-yellow-300/50 dark:hover:shadow-slate-500/50 transition-all duration-300 border border-yellow-400 dark:border-slate-600 group"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {/* Animated background circle */}
                <div
                  className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-slate-800 shadow-md transition-all duration-300 flex items-center justify-center text-lg ${
                    theme === 'light' ? 'translate-x-0' : 'translate-x-10'
                  }`}
                >
                  {theme === 'dark' ? '🌙' : '☀️'}
                </div>

                {/* Background icons */}
                <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none text-lg">
                  <span className="opacity-50">☀️</span>
                  <span className="opacity-50">🌙</span>
                </div>
              </button>
            )}

            {/* GitHub Button */}
            <a
              href="https://github.com/achhibi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex h-10 px-4 sm:px-6 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 dark:from-slate-600 dark:to-slate-700 text-white font-semibold hover:shadow-lg hover:shadow-slate-700/50 transition-all duration-300 border border-slate-600 dark:border-slate-500 items-center justify-center text-sm"
            >
              🐙
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cyan-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 space-y-1"
          >
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2 text-sm font-medium rounded transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-400/20 text-cyan-300 border-l-2 border-cyan-300'
                      : 'text-gray-200 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                  onClick={(e) => {
                    setIsOpen(false)
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      const element = document.querySelector(item.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              )
            })}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
