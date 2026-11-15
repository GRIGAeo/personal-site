/**
 * Все данные о тебе в одном файле.
 * Меняешь только значения справа от двоеточий — структуру трогать не нужно.
 * Подробная инструкция — в README.md, раздел «Как редактировать контент».
 */

/** Текст, который существует в двух языках. */
export interface Localized {
  ru: string
  en: string
}

export type Locale = 'ru' | 'en'

/** Идентификатор ссылки. По нему выбирается иконка — набор иконок фиксирован. */
export type LinkId = 'github' | 'telegram' | 'sourcecraft' | 'email'

export interface ProfileLink {
  /** Иконка, которая будет показана. */
  id: LinkId
  /** Подпись в разделе «Контакты». */
  label: string
  /** Адрес. Для почты обязательно начинать с mailto: */
  href: string
  /** true — ссылка показывается в hero рядом с именем. */
  inHero: boolean
}

export interface Skill {
  name: string
  /** language — язык программирования, tool — инструмент и окружение. */
  type: 'language' | 'tool'
}

export interface ProfileConfig {
  name: Localized
  /** Инициалы для заглушки, пока нет public/photo.jpg. */
  initials: string
  tagline: Localized
  location: Localized
  /** Путь к фото внутри папки public. */
  photo: string
  links: ProfileLink[]
  skills: Skill[]
}

export const config: ProfileConfig = {
  name: {
    ru: 'Щелокаев Григорий',
    en: 'Grigory Shchelokaev',
  },
  initials: 'ГЩ',
  tagline: {
    ru: 'Студент 2 курса «Программной инженерии» матмеха СПбГУ',
    en: 'Second-year Software Engineering student at St Petersburg University',
  },
  location: {
    ru: 'Петергоф',
    en: 'Peterhof',
  },
  photo: '/photo.jpg',
  links: [
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/GRIGAeo',
      inHero: true,
    },
    {
      id: 'telegram',
      label: 'Telegram',
      href: 'https://t.me/GRIGAeo',
      inHero: true,
    },
    {
      id: 'sourcecraft',
      label: 'SourceCraft',
      href: 'https://sourcecraft.dev/drag311/miminet',
      inHero: false,
    },
    {
      id: 'email',
      label: 'greg.shelokaev@mail.ru',
      href: 'mailto:greg.shelokaev@mail.ru',
      inHero: false,
    },
  ],
  skills: [
    { name: 'Go', type: 'language' },
    { name: 'C', type: 'language' },
    { name: 'Kotlin', type: 'language' },
    { name: 'Rust', type: 'language' },
    { name: 'Linux', type: 'tool' },
    { name: 'Git', type: 'tool' },
    { name: 'CI/CD', type: 'tool' },
    { name: 'GitHub Actions', type: 'tool' },
    { name: 'Gradle', type: 'tool' },
    { name: 'Markdown', type: 'tool' },
  ],
}

/**
 * Путь к фото с учётом base из vite.config.ts.
 * Менять не нужно: положи файл в public/photo.jpg — и он подхватится сам.
 */
export const photoSrc = `${import.meta.env.BASE_URL}${config.photo.replace(/^\//, '')}`

/** Достаёт нужный язык из пары { ru, en }. */
export function pick(value: Localized, locale: Locale): string {
  return value[locale]
}
