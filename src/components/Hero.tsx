import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { MagneticLink } from '@/components/MagneticButton'
import { HeroMedia } from '@/components/HeroMedia'
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
        duration: 0.9,
        stagger: 0.022,
        ease: 'power4.out',
      })
      gsap.from('[data-hero-fade]', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.2,
        ease: 'power3.out',
      })
    }, root)
    return () => ctx.revert()
  }, [loaderDone, reduced, t])

  return (
    <section
      ref={root}
      id="hero"
      className="relative z-10 flex min-h-dvh flex-col justify-end overflow-hidden px-5 pt-28 pb-28 sm:px-10 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <HeroMedia />
        <div className="absolute inset-0 bg-linear-to-t from-navy-deep via-navy/55 to-navy/20" />
      </div>
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
      <div data-hero-fade className="mt-10">
        <MagneticLink href="#reservas">{t('hero.cta')}</MagneticLink>
      </div>
    </section>
  )
}
