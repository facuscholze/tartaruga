import { useTranslation } from 'react-i18next'
import { reviews, socialProof } from '@/data/reviews'
import { pick } from '@/lib/localized'

export function Reviews() {
  const { t, i18n } = useTranslation()
  return (
    <section id="reseñas" className="relative z-10 px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('reviews.kicker')}</p>
        <h2 className="font-display text-4xl sm:text-5xl">{t('reviews.title')}</h2>
        <p className="mt-4 font-mono text-sm tracking-[0.12em] text-amber uppercase">
          ★ {socialProof.rating} · {t('reviews.followers')}
          <span className="demo-chip ml-3">{t('demo')}</span>
        </p>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.id}
              className="rounded-[1.5rem] border border-foam/10 bg-navy/60 p-6"
            >
              <p className="text-amber" aria-label={`${r.stars} estrellas`}>
                {'★'.repeat(r.stars)}
              </p>
              <blockquote className="mt-3 font-display text-lg italic text-foam">
                {pick(r.quote, i18n.language)}
              </blockquote>
              <p className="mt-4 font-mono text-[0.65rem] tracking-[0.14em] text-sand uppercase">
                {pick(r.author, i18n.language)}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-gold">{t('reviews.note')}</p>
      </div>
    </section>
  )
}
