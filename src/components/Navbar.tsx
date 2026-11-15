import { useTranslation } from 'react-i18next'
import { config, pick } from '../content/config'
import { useLocale } from '../useLocale'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { href: '#about', key: 'nav.about' },
  { href: '#interests', key: 'nav.interests' },
  { href: '#skills', key: 'nav.skills' },
  { href: '#contacts', key: 'nav.contacts' },
] as const

export function Navbar() {
  const { t } = useTranslation()
  const locale = useLocale()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#top"
          className="shrink-0 text-sm font-medium text-white/85 transition-colors hover:text-white"
        >
          {pick(config.name, locale)}
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label={t('nav.label')} className="hidden items-center gap-5 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {t(item.key)}
              </a>
            ))}
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  )
}
