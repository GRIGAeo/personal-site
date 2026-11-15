import { useTranslation } from 'react-i18next'
import type { Locale } from './content/config'

/** Текущий язык сайта в удобном виде: 'ru' или 'en'. */
export function useLocale(): Locale {
  const { i18n } = useTranslation()
  return i18n.resolvedLanguage === 'en' ? 'en' : 'ru'
}
