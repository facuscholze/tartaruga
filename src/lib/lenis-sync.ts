import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/device'
import { setScrollProgress } from '@/lib/dayState'

let lenis: Lenis | null = null
let tick: ((time: number) => void) | null = null

export function initLenis() {
  if (lenis || prefersReducedMotion()) return null

  lenis = new Lenis({
    autoRaf: false,
    lerp: 0.09,
    smoothWheel: true,
  })

  lenis.on('scroll', (e) => {
    setScrollProgress(e.scroll, e.limit)
    ScrollTrigger.update()
  })

  tick = (time: number) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(tick)
  gsap.ticker.lagSmoothing(0)

  return lenis
}

export function destroyLenis() {
  if (tick) gsap.ticker.remove(tick)
  tick = null
  lenis?.destroy()
  lenis = null
}

export function getLenis() {
  return lenis
}
