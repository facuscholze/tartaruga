import { useEffect, useRef } from 'react'
import { effectiveProgress } from '@/lib/dayState'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function gradientFor(t: number) {
  if (t < 0.2) {
    return 'linear-gradient(180deg, #549ad4 0%, #c8e2f4 42%, #87b8d9 58%, #1a3a55 100%)'
  }
  if (t < 0.48) {
    return 'linear-gradient(180deg, #c45c4a 0%, #f4a261 38%, #e85d04 52%, #16213f 100%)'
  }
  if (t < 0.7) {
    return 'linear-gradient(180deg, #3d2c56 0%, #9d0208 40%, #16213f 70%, #0b1020 100%)'
  }
  return 'linear-gradient(180deg, #0b1020 0%, #16213f 48%, #0b1020 100%)'
}

export function SkyFallback() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (reduced) {
      el.style.background = gradientFor(0.52)
      return
    }
    let raf = 0
    const tick = () => {
      el.style.background = gradientFor(effectiveProgress())
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reduced])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
      style={{ background: gradientFor(0.08) }}
    />
  )
}
