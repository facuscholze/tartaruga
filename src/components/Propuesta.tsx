import { useTranslation } from 'react-i18next'
import { proposal } from '@/data/proposal'
import { pick } from '@/lib/localized'
import { contact } from '@/data/contact'

export function Propuesta() {
  const { t, i18n } = useTranslation()
  return (
    <section id="propuesta" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('propuesta.kicker')}</p>
        <h2 className="max-w-3xl font-display text-4xl sm:text-6xl">{t('propuesta.title')}</h2>
        <p className="mt-5 max-w-xl text-lg text-sand">{t('propuesta.lead')}</p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.6rem] border border-foam/10 bg-navy/50 p-6">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-gold uppercase">
              {t('propuesta.beforeTitle')}
            </p>
            <p className="mt-3 text-foam">{t('propuesta.before')}</p>
          </article>
          <article className="rounded-[1.6rem] border border-amber/40 bg-navy/80 p-6">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-amber uppercase">
              {t('propuesta.afterTitle')}
            </p>
            <p className="mt-3 text-foam">{t('propuesta.after')}</p>
          </article>
        </div>

        <h3 className="mt-14 font-display text-2xl">{t('propuesta.includes')}</h3>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {proposal.includes.map((item) => (
            <li key={item.es} className="border-l border-amber/40 pl-4 text-sand">
              {pick(item, i18n.language)}
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-display text-2xl">{t('propuesta.benefits')}</h3>
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {proposal.benefits.map((b) => (
            <li key={b.id} className="rounded-2xl border border-foam/10 bg-navy/60 p-5">
              <p className="font-display text-xl text-amber">{pick(b.metric, i18n.language)}</p>
              <p className="mt-2 text-sm text-sand">{pick(b.lead, i18n.language)}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 rounded-[1.6rem] border border-foam/10 bg-navy-deep/80 p-6">
          <p className="section-kicker">{t('propuesta.metrics')}</p>
          <span className="demo-chip mt-2 inline-block">{t('demo')}</span>
          <dl className="mt-6 grid grid-cols-3 gap-4 text-center">
            {proposal.metrics.map((m) => (
              <div key={m.id}>
                <dt className="font-mono text-[0.6rem] tracking-[0.14em] text-sand uppercase">
                  {pick(m.label, i18n.language)}
                </dt>
                <dd className="mt-2 font-display text-3xl text-amber">{m.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-gold">{t('propuesta.metricsNote')}</p>
        </div>

        <div className="mt-12">
          <p className="mb-4 text-sand">{t('propuesta.talkLead')}</p>
          <a
            href="mailto:hola@demo.tartaruga?subject=Hablemos%20de%20la%20web"
            className="inline-flex min-h-12 items-center rounded-full bg-amber px-6 font-mono text-xs tracking-[0.16em] text-navy uppercase"
          >
            {t('propuesta.talk')}
          </a>
          <p className="mt-3 font-mono text-xs text-foam/60">{contact.phoneDisplay}</p>
        </div>
      </div>
    </section>
  )
}
