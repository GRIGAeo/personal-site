import { useTranslation } from 'react-i18next'
import type { Locale } from '../content/config'

const languages: readonly Locale[] = ['ru', 'en']

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const current: Locale = i18n.resolvedLanguage === 'en' ? 'en' : 'ru'

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className="flex items-center rounded-full border border-white/10 bg-white/[0.02] p-0.5"
    >
      {languages.map((language) => {
        const isActive = language === current

        return (
          <button
            key={language}
            type="button"
            onClick={() => {
              void i18n.changeLanguage(language)
            }}
            aria-pressed={isActive}
            className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
              isActive ? 'bg-white/10 text-white' : 'text-white/45 hover:text-white/80'
            }`}
          >
            {t(`language.${language}`)}
          </button>
        )
      })}
    </div>
  )
}
