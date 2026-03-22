import { createContext, useContext, useState, useEffect } from 'react'
import { translations } from './translations'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ar') // default Arabic

  const t = translations[lang]

  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir)
    document.documentElement.setAttribute('lang', t.lang)
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
