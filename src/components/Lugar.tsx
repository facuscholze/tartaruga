import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { ShellMark } from '@/components/Engravings'

export function Lugar() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const el = root.current
    if (!el || reduced) return
    const ctx = gsap.context(() => {
      gsap.from('[data-lugar-copy]', {
        y: 48,
        opacity: 0,
        stagger: 0.14,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 70%' },
      })
      gsap.to('.lugar-sea', {
        y: 70,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.to('.lugar-deck', {
        y: 30,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
      gsap.to('.lugar-faro', {
        y: -36,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }, el)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach((st) => {
        if (el.contains(st.trigger as Node)) st.kill()
      })
    }
  }, [reduced, t])

  return (
    <section id="lugar" ref={root} className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <p data-lugar-copy className="section-kicker mb-4">
            {t('lugar.kicker')}
          </p>
          <h2
            data-lugar-copy
            className="font-display text-4xl leading-tight text-balance sm:text-5xl"
          >
            {t('lugar.title')}
          </h2>
          <p data-lugar-copy className="mt-6 max-w-md text-lg text-sand">
            {t('lugar.p1')}
          </p>
          <p data-lugar-copy className="mt-4 max-w-md text-foam/80">
            {t('lugar.p2')}
          </p>
          <ShellMark className="mt-8 h-14 w-14 text-foam/50" />
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[2rem] border border-foam/10 bg-navy/40">
          <svg viewBox="0 0 400 420" className="absolute inset-0 h-full w-full">
            <g className="lugar-sea">
              <path
                d="M0 220c40 20 80-20 120 0s80-20 120 0 80-20 120 0 40 10 40 10v210H0z"
                fill="#16213F"
                opacity="0.85"
              />
              <path
                d="M0 250c50 16 70-16 120 0s80-18 130 0 90-14 150 0v190H0z"
                fill="#0B1020"
                opacity="0.7"
              />
            </g>
            <g className="lugar-deck">
              <rect x="40" y="268" width="320" height="90" fill="#6F4E37" opacity="0.85" />
              {Array.from({ length: 9 }).map((_, i) => (
                <rect
                  key={i}
                  x={48 + i * 34}
                  y="274"
                  width="26"
                  height="78"
                  fill="#1A140F"
                  opacity="0.35"
                />
              ))}
              <circle cx="80" cy="258" r="6" fill="#E9C46A" />
              <circle cx="200" cy="250" r="5" fill="#F4A261" />
              <circle cx="320" cy="258" r="6" fill="#E9C46A" />
            </g>
            <g className="lugar-faro">
              <rect x="286" y="96" width="22" height="150" fill="#F7F1E8" opacity="0.9" />
              <polygon points="282,96 312,96 297,70" fill="#E9C46A" />
              <rect x="290" y="118" width="14" height="10" fill="#16213F" />
              <path d="M308 110c40 8 58 28 70 70" stroke="#E9C46A" strokeWidth="2" opacity="0.5" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  )
}
