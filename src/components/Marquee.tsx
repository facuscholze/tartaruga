import { pillars } from '@/data/pillars'
import { pick } from '@/lib/localized'
import { useTranslation } from 'react-i18next'

export function Marquee() {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const items = [...pillars, ...pillars, ...pillars]

  return (
    <div
      className="relative z-10 overflow-hidden border-y border-foam/10 bg-navy/55 py-3 backdrop-blur-sm"
      aria-hidden
    >
      <div className="marquee-track flex w-max gap-10 font-mono text-[0.7rem] tracking-[0.28em] text-amber uppercase">
        {items.map((p, i) => (
          <span key={`${p.id}-${i}`} className="flex items-center gap-10">
            {pick(p.label, lang)}
            <span className="text-foam/40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
