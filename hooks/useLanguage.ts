'use client'

import { useEffect, useState } from 'react'
import fr from '@/locales/fr.json'
import en from '@/locales/en.json'

type Language = 'fr' | 'en'
type Translations = typeof fr

const translations: Record<Language, Translations> = { fr, en }

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('fr')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('language') as Language | null
    const initialLanguage = stored || 'fr'
    setLanguage(initialLanguage)
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

  return { language, toggleLanguage, mounted, t }
}
