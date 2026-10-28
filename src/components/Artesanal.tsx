import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { LottieMark } from '@/components/LottieMark'
import { ClamMark } from '@/components/Engravings'
import { gsap, MorphSVGPlugin } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Artesanal() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const path = useRef<SVGPathElement>(null)

  useLayoutEffect(() => {
    if (reduced || !path.current) return
    const open = 'M8 48c6-28 18-36 32-36s26 8 32 36c-8 8-20 10-32 10S16 56 8 48z'
    const ctx = gsap.context(() => {
      gsap.to(path.current, {
        morphSVG: open,
        duration: 2.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    })
    return () => {
      ctx.revert()
      void MorphSVGPlugin
    }
  }, [reduced])

  return (
    <section id="artesanal" className="relative z-10 px-5 py-24 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-start gap-10 md:flex-row">
        <div className="flex-1">
          <p className="section-kicker mb-3">{t('artesanal.kicker')}</p>
          <h2 className="font-display text-4xl sm:text-5xl">{t('artesanal.title')}</h2>
          <p className="mt-5 max-w-xl text-lg text-sand">{t('artesanal.lead')}</p>
        </div>
        <div className="flex items-center gap-4 text-copper">
          <LottieMark kind="shell" label="Caracola" className="h-24 w-24" />
          <ClamMark className="h-20 w-20" />
          <svg viewBox="0 0 80 80" className="h-20 w-20" aria-hidden>
            <path
              ref={path}
              d="M10 40c4-22 16-32 30-32s26 10 30 32c-6 16-18 24-30 24S16 56 10 40z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
