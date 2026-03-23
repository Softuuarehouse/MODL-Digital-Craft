import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('lang') || 'ar'
  })

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir)
    document.documentElement.setAttribute('lang', t.lang)

    // Save to localStorage whenever lang changes
    localStorage.setItem('lang', lang)
  }, [lang, t.dir, t.lang])

  const toggle = () => setLang(l => (l === 'ar' ? 'en' : 'ar'))

  return (
    <LangContext.Provider value={{ lang, t, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
