import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Hero } from './components/Hero'
import { MarkdownBlock } from './components/MarkdownBlock'
import { Navbar } from './components/Navbar'
import { Section } from './components/Section'
import { SkillsGrid } from './components/SkillsGrid'
import { SocialLinks } from './components/SocialLinks'
import type { Locale } from './content/config'
import { useLocale } from './useLocale'
import achievementsEn from './content/achievements.en.md?raw'
import achievementsRu from './content/achievements.ru.md?raw'
import bioEn from './content/bio.en.md?raw'
import bioRu from './content/bio.ru.md?raw'
import interestsEn from './content/interests.en.md?raw'
import interestsRu from './content/interests.ru.md?raw'

/** Длинные тексты: пара файлов .md на каждую секцию. */
const markdown: Record<'bio' | 'interests' | 'achievements', Record<Locale, string>> = {
  bio: { ru: bioRu, en: bioEn },
  interests: { ru: interestsRu, en: interestsEn },
  achievements: { ru: achievementsRu, en: achievementsEn },
}

export function App() {
  const { t, i18n } = useTranslation()
  const locale = useLocale()

  useEffect(() => {
    document.title = t('meta.title')
  }, [t, i18n.resolvedLanguage])

  return (
    <>
      <a
        href="#content"
        className="sr-only rounded-full bg-white px-4 py-2 text-sm font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60]"
      >
        {t('a11y.skip')}
      </a>

      <Navbar />

      <main id="content">
        <Hero />

        <Section id="about" kicker={t('sections.about.kicker')} title={t('sections.about.title')}>
          <MarkdownBlock content={markdown.bio[locale]} />
        </Section>

        <Section
          id="interests"
          kicker={t('sections.interests.kicker')}
          title={t('sections.interests.title')}
        >
          <MarkdownBlock content={markdown.interests[locale]} />
        </Section>

        <Section id="skills" kicker={t('sections.skills.kicker')} title={t('sections.skills.title')}>
          <SkillsGrid />
          <div className="mt-14 border-t border-white/5 pt-10">
            <MarkdownBlock content={markdown.achievements[locale]} />
          </div>
        </Section>

        <Section
          id="contacts"
          kicker={t('sections.contacts.kicker')}
          title={t('sections.contacts.title')}
        >
          <p className="max-w-xl text-pretty leading-relaxed text-white/60">{t('contacts.lead')}</p>
          <div className="mt-6 max-w-xl">
            <SocialLinks variant="contacts" />
          </div>
        </Section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-5 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{t('footer.rights', { year: new Date().getFullYear() })}</p>
          <p className="flex items-center gap-3">
            <span>{t('footer.madeWith')}</span>
            <a href="#top" className="transition-colors hover:text-white/70">
              {t('footer.backToTop')}
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}
