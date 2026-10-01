'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

type Language = 'fr' | 'en'
type Translations = typeof fr

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Translations> = { fr, en }

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('language') as Language | null
    const initialLanguage = stored || 'fr'
    setLanguage(initialLanguage)
    setMounted(true)
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[language]

    for (const k of keys) {
      value = value?.[k]
    }

    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
