import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TurtleLogo } from '@/components/TurtleLogo'
import { useActiveSection } from '@/hooks/useActiveSection'
import { readDemoFlag } from '@/lib/demoMode'
import { scrollToSection } from '@/lib/scroll'
import { useApp } from '@/context/AppContext'

const links = [
  ['#lugar', 'nav.lugar', 'lugar'],
  ['#carta', 'nav.carta', 'carta'],
  ['#experiencias', 'nav.experiencias', 'experiencias'],
  ['#galeria', 'nav.galeria', 'galeria'],
  ['#mapa', 'nav.mapa', 'mapa'],
] as const

export function Nav() {
  const { t } = useTranslation()
  const { loaderDone } = useApp()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const [demo] = useState(() => readDemoFlag())
  const active = useActiveSection(loaderDone)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('tartaruga:close-nav', close)
    return () => window.removeEventListener('tartaruga:close-nav', close)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (href: string) => {
    setOpen(false)
    window.setTimeout(() => {
      void scrollToSection(href)
    }, open ? 140 : 0)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? 'bg-navy/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#hero"
          className="flex items-center gap-2 text-foam"
          aria-label="Tartaruga"
          onClick={(e) => {
            e.preventDefault()
            go('#hero')
          }}
        >
          <TurtleLogo className="h-9 w-9" decorative />
          <span className="font-display text-lg tracking-tight">Tartaruga</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map(([href, key, id]) => (
            <a
              key={href}
              href={href}
              aria-current={active === id ? 'location' : undefined}
              className={`font-mono text-[0.65rem] tracking-[0.18em] uppercase hover:text-amber ${
                active === id ? 'text-amber' : 'text-foam/80'
              }`}
            >
              {t(key)}
            </a>
          ))}
          {demo ? (
            <a
              href="#propuesta"
              className={`font-mono text-[0.65rem] tracking-[0.18em] uppercase ${
                active === 'propuesta' ? 'text-amber' : 'text-foam/80'
              }`}
            >
              {t('nav.propuesta')}
            </a>
          ) : null}
          <a
            href="#reservas"
            className="rounded-full bg-amber px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] text-navy uppercase"
          >
            {t('hero.cta')}
          </a>
        </nav>
        <button
          type="button"
          id="mobile-nav-toggle"
          className="rounded-full border border-foam/30 px-3 py-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t('nav.close') : t('nav.open')}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="flex min-h-dvh flex-col gap-4 bg-navy px-6 pt-4 pb-28 lg:hidden"
          aria-label="Móvil"
        >
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                go(href)
              }}
              className="font-display text-3xl text-foam"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#reservas"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              go('#reservas')
            }}
            className="mt-4 font-mono text-sm tracking-[0.2em] text-amber uppercase"
          >
            {t('hero.cta')}
          </a>
        </nav>
      ) : null}
    </header>
  )
}
