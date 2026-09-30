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

          {/* Theme Toggle, Language Selector & GitHub Button */}
          <div className="hidden md:flex gap-4 items-center">
            {/* Language Selector */}
            {langLoaded && (
              <button
                onClick={toggleLanguage}
                className="relative inline-flex items-center h-10 w-20 rounded-full bg-gradient-to-r from-blue-300 to-indigo-400 dark:from-blue-700 dark:to-indigo-800 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 border border-blue-400 dark:border-blue-600 group"
                title={`Switch to ${language === 'fr' ? 'English' : 'Français'}`}
              >
                {/* Animated background circle */}
                <div
                  className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-gradient-to-br dark:from-blue-600 dark:to-indigo-700 shadow-md transition-all duration-300 flex items-center justify-center text-sm font-bold ${
                    language === 'fr' ? 'translate-x-0' : 'translate-x-10'
                  }`}
                >
                  <span className={language === 'fr' ? 'text-blue-600' : 'text-indigo-600'}>
                    {language === 'fr' ? 'FR' : 'EN'}
                  </span>
                </div>

                {/* Background language codes */}
                <div className="absolute inset-0 flex items-center justify-between px-3 pointer-events-none text-xs font-semibold">
                  <span className="text-blue-600 opacity-70">FR</span>
                  <span className="text-indigo-300 opacity-70">EN</span>
                </div>
              </button>
            )}

            {/* Theme Toggle - Modern Switch */}
            {themeLoaded && (
              <button
                onClick={toggleTheme}
                className="relative inline-flex items-center h-10 w-20 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-800 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 border border-slate-400 dark:border-slate-600 group"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {/* Animated background circle */}
                <div
                  className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-white dark:bg-gradient-to-br dark:from-slate-600 dark:to-slate-700 shadow-md transition-all duration-300 flex items-center justify-center ${
                    theme === 'light' ? 'translate-x-0' : 'translate-x-10'
                  }`}
                >
                  {theme === 'dark' ? (
                    <svg className="w-5 h-5 text-amber-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-yellow-400 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>

                {/* Background icons */}
                <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-yellow-500 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <svg className="w-4 h-4 text-blue-400 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                </div>
              </button>
            )}

            {/* GitHub Button */}
            <a
              href="https://github.com/achhibi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-cyan-400 text-slate-900 font-semibold hover:bg-cyan-300 transition-colors duration-300"
            >
              {t('nav.github')}
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
