import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { TurtleLogo } from '@/components/TurtleLogo'
import { useApp } from '@/context/AppContext'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { gsap } from '@/lib/gsap'

export function Loader() {
  const { t } = useTranslation()
  const { loaderDone, setLoaderDone } = useApp()
  const reduced = useReducedMotion()
  const root = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (loaderDone) return
    const el = root.current
    if (!el) return

    const safety = window.setTimeout(() => setLoaderDone(true), 4200)

    if (reduced) {
      const id = window.setTimeout(() => setLoaderDone(true), 200)
      return () => {
        window.clearTimeout(id)
        window.clearTimeout(safety)
      }
    }

    const ctx = gsap.context(() => {
      const strokes = el.querySelectorAll('.turtle-stroke')
      const tl = gsap.timeline({
        onComplete: () => setLoaderDone(true),
      })
      gsap.set(strokes, { drawSVG: 0 })
      tl.to(strokes, {
        drawSVG: '100%',
        duration: 1.6,
        stagger: 0.07,
        ease: 'power2.inOut',
      })
      tl.to('.loader-fill', { opacity: 1, duration: 0.45 }, '-=0.25')
      tl.to(
        el,
        {
          clipPath: 'circle(0% at 50% 50%)',
          duration: 1.05,
          ease: 'power3.inOut',
        },
        '+=0.15',
      )
    }, el)

    return () => {
      window.clearTimeout(safety)
      ctx.revert()
    }
  }, [loaderDone, reduced, setLoaderDone])

  if (loaderDone) return null

  return (
    <div
      ref={root}
      className="loader fixed inset-0 z-[80] flex items-center justify-center bg-navy text-foam"
      style={{ clipPath: 'circle(150% at 50% 50%)' }}
      role="status"
      aria-live="polite"
      aria-label={t('ui.loading')}
    >
      <div className="relative">
        <div className="loader-fill absolute inset-6 rounded-full bg-navy opacity-0" />
        <TurtleLogo className="relative h-36 w-36 text-foam sm:h-44 sm:w-44" />
      </div>
    </div>
  )
}
