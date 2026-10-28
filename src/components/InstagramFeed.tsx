import { useTranslation } from 'react-i18next'
import { contact } from '@/data/contact'
import { instagramFeed } from '@/data/instagram'
import { pick } from '@/lib/localized'
import { MediaFrame } from '@/components/MediaFrame'

export function InstagramFeed() {
  const { t, i18n } = useTranslation()
  return (
    <section id="instagram" className="relative z-10 px-5 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('instagram.kicker')}</p>
        <h2 className="font-display text-4xl sm:text-5xl">{t('instagram.title')}</h2>
        <p className="mt-4 max-w-lg text-sand">{t('instagram.lead')}</p>
        <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
          {instagramFeed.map((item) => (
            <li key={item.id}>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="block overflow-hidden rounded-2xl"
              >
                <MediaFrame
                  stem={item.photo}
                  alt={pick(item.alt, i18n.language)}
                  className="aspect-square w-full"
                />
              </a>
            </li>
          ))}
        </ul>
        <a
          href={contact.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex font-mono text-xs tracking-[0.18em] text-amber uppercase"
        >
          {t('instagram.cta')} · {contact.instagramHandle}
        </a>
      </div>
    </section>
  )
}
