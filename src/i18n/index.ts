import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './es.json'
import en from './en.json'
import pt from './pt.json'

const STORAGE = 'tartaruga-lang'

function detectLang() {
  if (typeof window === 'undefined') return 'es'
  const saved = window.localStorage.getItem(STORAGE)
  if (saved === 'es' || saved === 'en' || saved === 'pt') return saved
  const nav = window.navigator.language.toLowerCase()
  if (nav.startsWith('pt')) return 'pt'
  if (nav.startsWith('en')) return 'en'
  return 'es'
}

export const langs = ['es', 'en', 'pt'] as const

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    pt: { translation: pt },
  },
  lng: detectLang(),
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

i18n.on('languageChanged', (lng) => {
  if (typeof document === 'undefined') return
  document.documentElement.lang = lng
  window.localStorage.setItem(STORAGE, lng)
  document.title = i18n.t('meta.title')
})

if (typeof document !== 'undefined') {
  document.documentElement.lang = i18n.language
  document.title = i18n.t('meta.title')
}

export default i18n
