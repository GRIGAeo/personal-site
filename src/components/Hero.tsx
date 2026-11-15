import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { config, photoSrc, pick } from '../content/config'
import { useLocale } from '../useLocale'
import { SocialLinks } from './SocialLinks'

export function Hero() {
  const { t } = useTranslation()
  const locale = useLocale()
  const prefersReducedMotion = useReducedMotion()
  const [photoFailed, setPhotoFailed] = useState(false)

  const { scrollY } = useScroll()
  const glowShift = useTransform(scrollY, [0, 800], [0, 140])

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
        style={prefersReducedMotion ? undefined : { y: glowShift }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/80">
            {t('hero.greeting')}
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {pick(config.name, locale)}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/60">
            {pick(config.tagline, locale)}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-white/40">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            {pick(config.location, locale)}
          </p>

          <div className="mt-8">
            <SocialLinks variant="hero" />
          </div>
        </div>

        <div className="relative mx-auto h-44 w-44 sm:h-56 sm:w-56 md:h-64 md:w-64">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-full bg-accent/5 blur-2xl ring-1 ring-white/5"
          />
          {photoFailed ? (
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-panel">
              <span aria-hidden="true" className="text-4xl font-medium tracking-wide text-white/45">
                {config.initials}
              </span>
              <span className="sr-only">{t('hero.photoPending')}</span>
            </div>
          ) : (
            <img
              src={photoSrc}
              alt={t('hero.photoAlt')}
              width={256}
              height={256}
              onError={() => setPhotoFailed(true)}
              className="relative h-full w-full rounded-full border border-white/10 object-cover"
            />
          )}
        </div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-16 flex w-fit items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/30 transition-colors hover:text-white/60"
      >
        {t('hero.scroll')}
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
