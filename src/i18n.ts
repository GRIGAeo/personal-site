import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import uiEn from './content/ui.en.json'
import uiRu from './content/ui.ru.json'
import type { Locale } from './content/config'

/** Языки, между которыми переключается сайт. */
export const supportedLanguages: readonly Locale[] = ['ru', 'en']

const fallbackLanguage: Locale = 'ru'
const storageKey = 'site-language'

function isLocale(value: string | null): value is Locale {
  return value === 'ru' || value === 'en'
}

/**
 * Порядок выбора языка:
 * 1. ?lang=ru / ?lang=en в адресе страницы,
 * 2. сохранённый выбор в localStorage,
 * 3. русский по умолчанию.
 */
function detectLanguage(): Locale {
  const fromQuery = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromQuery)) return fromQuery

  const stored = window.localStorage.getItem(storageKey)
  if (isLocale(stored)) return stored

  return fallbackLanguage
}

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: uiRu },
    en: { translation: uiEn },
  },
  lng: detectLanguage(),
  fallbackLng: fallbackLanguage,
  supportedLngs: [...supportedLanguages],
  interpolation: { escapeValue: false },
  returnNull: false,
})

i18n.on('languageChanged', (language) => {
  if (!isLocale(language)) return
  window.localStorage.setItem(storageKey, language)
  document.documentElement.lang = language
})

document.documentElement.lang = i18n.language
