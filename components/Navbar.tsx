'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import { useLanguage } from '@/app/providers'
import Terminal from './Terminal'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const pathname = usePathname()
  const { theme, toggleTheme, mounted: themeLoaded } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

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
          {/* Logo - Profile Photo */}
          <Link href="/" className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-300/50 hover:border-cyan-300 transition-all duration-300">
            <Image
              src="/profile.jpg"
              alt="Amor Chhibi"
              fill
              className="object-cover"
              priority
            />
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
            {/* Language Selector - Flag Icons */}
            <div className="flex gap-2 items-center">
                <button
                  onClick={() => language !== 'fr' && toggleLanguage()}
                  className={`relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                    language === 'fr'
                      ? 'border-blue-400 shadow-lg shadow-blue-400/50'
                      : 'border-slate-600 dark:border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                  title="Français"
                >
                  <Image
                    src="/flags/fr.svg"
                    alt="Français"
                    fill
                    className="object-cover"
                    priority
                  />
                </button>
                <button
                  onClick={() => language !== 'en' && toggleLanguage()}
                  className={`relative w-10 h-10 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
                    language === 'en'
                      ? 'border-blue-400 shadow-lg shadow-blue-400/50'
                      : 'border-slate-600 dark:border-slate-700 opacity-60 hover:opacity-100'
                  }`}
                  title="English"
                >
                  <Image
                    src="/flags/en.svg"
                    alt="English"
                    fill
                    className="object-cover"
                    priority
                  />
                </button>
            </div>

            {/* Theme Toggle - Icon only */}
            {themeLoaded && (
              <button
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-all duration-300 border-2 ${
                  theme === 'light'
                    ? 'bg-yellow-400/20 border-yellow-400 text-yellow-400 shadow-lg shadow-yellow-400/30'
                    : 'bg-slate-700/50 border-slate-600 dark:border-slate-700 text-slate-300'
                }`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            )}

            {/* GitHub Button */}
            <a
              href="https://github.com/achhibi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-11 h-11 rounded-lg bg-slate-700/50 dark:bg-slate-800/50 text-white hover:bg-slate-600 dark:hover:bg-slate-700 transition-all duration-300 border border-slate-600 dark:border-slate-700 items-center justify-center hover:shadow-lg hover:shadow-slate-700/50 p-2"
              title="GitHub"
            >
              <Image
                src="/logos/github-logo.svg"
                alt="GitHub"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </a>

            {/* Terminal */}
            <Terminal />
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
