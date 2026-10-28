import { useLayoutEffect, useRef } from 'react'
import { ShellMark, ClamMark, StarfishMark } from '@/components/Engravings'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function FloatingShells() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (reduced || !ref.current) return
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.float-shell').forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? 80 : -60,
          rotation: i % 2 === 0 ? 12 : -10,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        })
      })
    }, ref)
    return () => {
      ctx.revert()
      ScrollTrigger.getAll()
    }
  }, [reduced])

  if (reduced) return null

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden>
      <ShellMark className="float-shell absolute top-[20%] left-[6%] h-10 w-10 text-foam/20" />
      <StarfishMark className="float-shell absolute top-[55%] right-[8%] h-12 w-12 text-foam/15" />
      <ClamMark className="float-shell absolute top-[75%] left-[12%] h-9 w-9 text-foam/15" />
    </div>
  )
}
