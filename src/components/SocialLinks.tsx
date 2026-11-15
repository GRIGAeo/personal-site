import type { ReactElement } from 'react'
import { config } from '../content/config'
import type { LinkId } from '../content/config'

interface SocialLinksProps {
  /** hero — только иконки, contacts — иконка и подпись. */
  variant: 'hero' | 'contacts'
}

const iconClassName = 'h-[18px] w-[18px]'

const icons: Record<LinkId, ReactElement> = {
  github: (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  ),
  telegram: (
    <svg className={iconClassName} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 3.3 2.9 10.5c-.9.3-.9 1.5.01 1.8l4.4 1.4 1.7 5.2c.24.72 1.17.9 1.66.32l2.36-2.8 4.5 3.3c.63.46 1.53.11 1.7-.66l3.1-14.2c.18-.85-.66-1.55-1.47-1.26Zm-3.2 3.5-7.4 6.7-.29 3.2-1.2-3.7 8.9-6.2Z" />
    </svg>
  ),
  sourcecraft: (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="4" width="19" height="16" rx="3" />
      <path d="m7 9.5 2.5 2.5L7 14.5M12.5 15h4.5" />
    </svg>
  ),
  email: (
    <svg
      className={iconClassName}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  ),
}

export function SocialLinks({ variant }: SocialLinksProps) {
  const isHero = variant === 'hero'
  const links = config.links.filter((link) => (isHero ? link.inHero : true))

  return (
    <ul className={isHero ? 'flex flex-wrap items-center gap-2.5' : 'grid gap-3 sm:grid-cols-2'}>
      {links.map((link) => {
        const isExternal = link.href.startsWith('http')

        return (
          <li key={link.id}>
            <a
              href={link.href}
              aria-label={link.label}
              {...(isExternal ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
              className={
                isHero
                  ? 'flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/65 transition-colors hover:border-accent/40 hover:text-white'
                  : 'flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm text-white/70 transition-colors hover:border-accent/40 hover:bg-white/[0.04] hover:text-white'
              }
            >
              {icons[link.id]}
              {!isHero && <span className="truncate">{link.label}</span>}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
