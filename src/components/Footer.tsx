import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TurtleLogo } from '@/components/TurtleLogo'
import { ShellMark, ClamMark, StarfishMark } from '@/components/Engravings'
import { contact } from '@/data/contact'
import { hours } from '@/data/hours'
import { pick } from '@/lib/localized'
import { LangSwitch } from '@/components/LangSwitch'
import { useApp } from '@/context/AppContext'

export function Footer() {
  const { t, i18n } = useTranslation()
  const { triggerEgg } = useApp()
  const clicks = useRef(0)

  const onTurtle = () => {
    clicks.current += 1
    if (clicks.current >= 5) {
      clicks.current = 0
      triggerEgg()
    }
  }

  return (
    <footer className="relative z-10 border-t border-foam/10 bg-navy px-5 py-16 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div>
          <button
            type="button"
            onClick={onTurtle}
            className="text-foam"
            aria-label={t('footer.egg')}
          >
            <TurtleLogo className="h-16 w-16" decorative />
          </button>
          <p className="mt-4 font-display text-2xl">{contact.name}</p>
          <p className="text-sand">{contact.place}</p>
          <div className="mt-6 flex gap-3 text-foam/60">
            <ShellMark className="h-8 w-8" />
            <StarfishMark className="h-8 w-8" />
            <ClamMark className="h-8 w-8" />
          </div>
        </div>
        <div>
          <p className="section-kicker mb-3">{t('footer.hours')}</p>
          {hours.lines.map((line) => (
            <p key={pick(line.days, i18n.language)} className="text-foam">
              {pick(line.days, i18n.language)} · {pick(line.time, i18n.language)}
            </p>
          ))}
          <p className="mt-2 text-sm text-gold">{pick(hours.note, i18n.language)}</p>
        </div>
        <div className="space-y-4">
          <a
            className="block font-mono text-xs tracking-[0.16em] text-amber uppercase"
            href={contact.instagram}
            target="_blank"
            rel="noreferrer"
          >
            {t('footer.social')} {contact.instagramHandle}
          </a>
          <a className="block text-foam" href={`tel:${contact.phoneTel}`}>
            {contact.phoneDisplay}
          </a>
          <LangSwitch />
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-6xl font-mono text-[0.65rem] tracking-[0.14em] text-foam/40 uppercase">
        {t('footer.rights')}
      </p>
    </footer>
  )
}
