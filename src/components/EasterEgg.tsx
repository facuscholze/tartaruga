import { useLayoutEffect, useRef } from 'react'
import { TurtleLogo } from '@/components/TurtleLogo'
import { useApp } from '@/context/AppContext'
import { gsap, MotionPathPlugin } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function EasterEgg() {
  const { egg } = useApp()
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!egg || reduced || !ref.current) return
    const w = window.innerWidth
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { x: -120, y: window.innerHeight * 0.45, opacity: 1 },
        {
          duration: 4,
          ease: 'sine.inOut',
          motionPath: {
            path: [
              { x: -80, y: 0 },
              { x: w * 0.3, y: -90 },
              { x: w * 0.62, y: 50 },
              { x: w + 140, y: -30 },
            ],
            autoRotate: true,
          },
        },
      )
    }, ref)
    return () => {
      ctx.revert()
      void MotionPathPlugin
    }
  }, [egg, reduced])

  if (!egg || reduced) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[85] text-foam"
      aria-hidden
    >
      <TurtleLogo className="h-16 w-16" decorative />
    </div>
  )
}
