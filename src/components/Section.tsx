import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface SectionProps {
  /** id нужен для якорной ссылки из навигации. */
  id: string
  /** Маленькая подпись над заголовком. */
  kicker: string
  title: string
  children: ReactNode
}

export function Section({ id, kicker, title, children }: SectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-white/5 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16"
        >
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent/80">{kicker}</p>
            <h2
              id={`${id}-title`}
              className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[1.75rem]"
            >
              {title}
            </h2>
          </div>
          <div>{children}</div>
        </motion.div>
      </div>
    </section>
  )
}
