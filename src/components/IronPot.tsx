import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function IronPot() {
  const ref = useRef<SVGSVGElement>(null)
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    if (reduced || !ref.current) return
    const ctx = gsap.context(() => {
      gsap.to('.pot-swing', {
        rotate: 5,
        transformOrigin: '50% 8%',
        duration: 1.8,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      })
    }, ref)
    return () => ctx.revert()
  }, [reduced])

  return (
    <svg
      ref={ref}
      viewBox="0 0 200 240"
      className="h-56 w-48 text-copper"
      role="img"
      aria-label="Olla de hierro sobre trípode"
    >
      <g className="pot-swing">
        <path d="M40 220 L100 70 L160 220" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M70 70h60" stroke="currentColor" strokeWidth="4" />
        <ellipse cx="100" cy="118" rx="48" ry="16" fill="#1A140F" stroke="currentColor" />
        <path
          d="M52 118c2 40 18 62 48 62s46-22 48-62"
          fill="#1A140F"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M58 108c8-18 22-22 42-22s34 4 42 22" fill="none" stroke="#C45C26" strokeWidth="2" />
        <path d="M44 112c-12-4-18 8-8 14M156 112c12-4 18 8 8 14" stroke="currentColor" strokeWidth="3" />
      </g>
      <path d="M70 200c10 10 20 14 30 14s20-4 30-14" stroke="#DC2F02" strokeWidth="2" opacity="0.7" />
    </svg>
  )
}
