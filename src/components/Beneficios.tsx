import { useTranslation } from 'react-i18next'
import { benefits } from '@/data/benefits'
import { pick } from '@/lib/localized'

export function Beneficios() {
  const { t, i18n } = useTranslation()
  return (
    <section id="beneficios" className="relative z-10 px-5 py-20 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-3">{t('beneficios.kicker')}</p>
        <h2 className="font-display text-3xl sm:text-4xl">{t('beneficios.title')}</h2>
        <p className="mt-3 max-w-lg text-sand">{t('beneficios.lead')}</p>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.id}
              className="rounded-2xl border border-foam/10 bg-navy/50 p-5"
            >
              <span className="demo-chip">{t('demo')}</span>
              <h3 className="mt-3 font-display text-xl">{pick(b.title, i18n.language)}</h3>
              <p className="mt-2 text-sm text-sand">{pick(b.lead, i18n.language)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
