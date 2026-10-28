import { useTranslation } from 'react-i18next'
import { contact, mapsDirectionsUrl, quickReserveUrl } from '@/data/contact'

export function StickyBar() {
  const { t, i18n } = useTranslation()
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-foam/15 bg-navy/95 px-3 pt-2 backdrop-blur-md md:hidden pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-lg items-stretch gap-2">
        <a
          href={`tel:${contact.phoneTel}`}
          className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-foam/25 px-2 font-mono text-[0.62rem] tracking-[0.12em] text-foam uppercase"
        >
          {t('sticky.call')}
        </a>
        <a
          href={mapsDirectionsUrl()}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-foam/25 px-2 font-mono text-[0.62rem] tracking-[0.12em] text-foam uppercase"
        >
          {t('sticky.map')}
        </a>
        <a
          href={quickReserveUrl(i18n.language)}
          target="_blank"
          rel="noreferrer"
          className="flex min-h-12 flex-[1.4] items-center justify-center rounded-full bg-amber px-3 font-mono text-[0.68rem] tracking-[0.14em] text-navy uppercase"
        >
          {t('sticky.reserve')}
        </a>
      </div>
    </div>
  )
}
