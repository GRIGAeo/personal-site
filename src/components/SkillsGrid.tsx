import { config } from '../content/config'
import type { Skill } from '../content/config'
import { useTranslation } from 'react-i18next'

const groups: ReadonlyArray<{ type: Skill['type']; titleKey: string }> = [
  { type: 'language', titleKey: 'skills.languages' },
  { type: 'tool', titleKey: 'skills.tools' },
]

export function SkillsGrid() {
  const { t } = useTranslation()

  return (
    <div className="grid gap-10 sm:grid-cols-2">
      {groups.map((group) => (
        <div key={group.type}>
          <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            {t(group.titleKey)}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {config.skills
              .filter((skill) => skill.type === group.type)
              .map((skill) => (
                <li
                  key={skill.name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-sm text-white/70 transition-colors hover:border-accent/40 hover:text-white"
                >
                  {skill.name}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
