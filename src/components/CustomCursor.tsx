import { useEffect, useRef } from 'react'
import { TurtleLogo } from '@/components/TurtleLogo'
import { useFinePointer, useReducedMotion } from '@/hooks/useReducedMotion'

export function CustomCursor() {
  const reduced = useReducedMotion()
  const fine = useFinePointer()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (reduced || !fine) return
    const el = ref.current
    if (!el) return
    document.body.classList.add('has-custom-cursor')
    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let cx = x
    let cy = y
    let hover = false
    let raf = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement | null
      hover = Boolean(
        target?.closest('a, button, input, textarea, select, [role="button"]'),
      )
    }

    const tick = () => {
      cx += (x - cx) * 0.22
      cy += (y - cy) * 0.22
      el.style.transform = `translate(${cx - 14}px, ${cy - 14}px) scale(${hover ? 1.35 : 1}) rotate(${hover ? 12 : 0}deg)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)
    return () => {
      document.body.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [reduced, fine])

  if (reduced || !fine) return null

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[90] h-7 w-7 text-foam mix-blend-difference"
      aria-hidden
    >
      <TurtleLogo className="h-7 w-7" decorative />
    </div>
  )
}
