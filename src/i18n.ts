import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Sample translations
const resources = {
  en: {
    translation: {},
  },
  hu: {
    translation: {},
  },
}

i18n
  .use(LanguageDetector) // Optional: auto-detect browser language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes
    },
  })

export default i18n
