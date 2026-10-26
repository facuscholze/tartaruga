import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MagneticLink } from '@/components/MagneticButton'
import { useApp } from '@/context/AppContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { gsap, SplitText } from '@/lib/gsap'

export function Hero() {
  const { t } = useTranslation()
  const { loaderDone } = useApp()
  const reduced = useReducedMotion()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!loaderDone || reduced || !titleRef.current) return
    const ctx = gsap.context(() => {
      const split = SplitText.create(titleRef.current!, {
        type: 'chars,words,lines',
        mask: 'lines',
      })
      gsap.from(split.chars, {
        yPercent: 120,
        duration: 1.15,
        stagger: 0.028,
        ease: 'power4.out',
      })
      gsap.from('[data-hero-fade]', {
        y: 24,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        delay: 0.35,
        ease: 'power3.out',
      })
    }, root)
    return () => ctx.revert()
  }, [loaderDone, reduced, t])

  return (
    <section
      ref={root}
      id="hero"
      className="relative z-10 flex min-h-dvh flex-col justify-end px-5 pt-28 pb-16 sm:px-10"
    >
      <p data-hero-fade className="section-kicker mb-5">
        {t('hero.kicker')}
      </p>
      <h1
        ref={titleRef}
        className="max-w-5xl font-display text-[3.1rem] leading-[0.95] font-semibold tracking-tight text-balance sm:text-7xl lg:text-8xl"
      >
        {t('hero.title')}
      </h1>
      <p
        data-hero-fade
        className="mt-6 max-w-lg font-display text-lg text-sand italic sm:text-xl"
      >
        {t('hero.lead')}
      </p>
      <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-6">
        <MagneticLink href="#reservas">{t('hero.cta')}</MagneticLink>
        <span className="font-mono text-[0.65rem] tracking-[0.22em] text-foam/70 uppercase">
          {t('hero.scroll')}
        </span>
      </div>
    </section>
  )
}
