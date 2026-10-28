import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TurtleLogo } from '@/components/TurtleLogo'

const links = [
  ['#lugar', 'nav.lugar'],
  ['#carta', 'nav.carta'],
  ['#fuego', 'nav.fuego'],
  ['#experiencias', 'nav.experiencias'],
  ['#galeria', 'nav.galeria'],
  ['#mapa', 'nav.mapa'],
] as const

export function Nav() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open ? 'bg-navy/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#hero" className="flex items-center gap-2 text-foam" aria-label="Tartaruga">
          <TurtleLogo className="h-9 w-9" decorative />
          <span className="font-display text-lg tracking-tight">Tartaruga</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              className="font-mono text-[0.65rem] tracking-[0.18em] text-foam/80 uppercase hover:text-amber"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#reservas"
            className="rounded-full border border-amber/50 px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase"
          >
            {t('hero.cta')}
          </a>
        </nav>
        <button
          type="button"
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
          className="flex min-h-dvh flex-col gap-4 bg-navy px-6 pt-4 pb-24 lg:hidden"
          aria-label="Móvil"
        >
          {links.map(([href, key]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-foam"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#reservas"
            onClick={() => setOpen(false)}
            className="mt-4 font-mono text-sm tracking-[0.2em] text-amber uppercase"
          >
            {t('hero.cta')}
          </a>
        </nav>
      ) : null}
    </header>
  )
}
