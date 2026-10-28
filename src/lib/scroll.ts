import { prefersReducedMotion } from '@/lib/device'
import { setScrollProgress } from '@/lib/dayState'
import { getLenis } from '@/lib/lenis-sync'
import { ScrollTrigger } from '@/lib/gsap'

export const NAV_OFFSET = -88

let trip = 0
let cancelBound = false

export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export function durationForDistance(px: number) {
  const seconds = Math.abs(px) / 1400
  return Math.min(2.2, Math.max(1.0, seconds))
}

export function parseHash(hash: string) {
  return hash.replace(/^#/, '').split('?')[0] ?? ''
}

function maxScroll() {
  const lenis = getLenis()
  if (lenis && lenis.limit) return lenis.limit
  return Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
}

function pinAwareTarget(el: HTMLElement) {
  const parent = el.parentElement
  if (parent?.classList.contains('pin-spacer')) return parent
  return el
}

export function yOf(el: HTMLElement, offset = NAV_OFFSET) {
  const node = pinAwareTarget(el)
  const lenis = getLenis()
  const current = lenis?.scroll ?? window.scrollY
  return Math.max(0, current + node.getBoundingClientRect().top + offset)
}

function bindCancel() {
  if (cancelBound || typeof window === 'undefined') return
  cancelBound = true
  const bump = () => {
    trip += 1
  }
  window.addEventListener('wheel', bump, { passive: true })
  window.addEventListener('touchmove', bump, { passive: true })
  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', 'Home', 'End', ' '].includes(e.key)) {
      bump()
    }
  })
}

export function scrollToSection(hash: string) {
  const id = parseHash(hash)
  if (!id) return Promise.resolve()
  const el = document.getElementById(id)
  if (!el) return Promise.resolve()

  bindCancel()
  const url = `${window.location.pathname}${window.location.search}#${id}`
  const reduced = prefersReducedMotion()
  const y = yOf(el)
  const lenis = getLenis()
  const current = lenis?.scroll ?? window.scrollY
  const myTrip = ++trip

  const finish = (landed: boolean) => {
    if (landed && myTrip === trip) {
      history.pushState(null, '', url)
    }
    setScrollProgress(lenis?.scroll ?? window.scrollY, maxScroll())
  }

  if (reduced) {
    if (lenis) lenis.scrollTo(y, { immediate: true })
    else window.scrollTo(0, y)
    finish(true)
    return Promise.resolve()
  }

  const duration = durationForDistance(y - current)

  return new Promise<void>((resolve) => {
    const done = () => {
      finish(myTrip === trip)
      resolve()
    }
    if (lenis) {
      lenis.scrollTo(y, {
        duration,
        easing: easeInOutCubic,
        onComplete: done,
      })
    } else {
      window.scrollTo({ top: y, behavior: 'smooth' })
      window.setTimeout(done, duration * 1000)
    }
  })
}

export async function waitForSection(id: string, ms = 5000) {
  const start = Date.now()
  while (Date.now() - start < ms) {
    if (document.getElementById(id)) return true
    await new Promise((r) => setTimeout(r, 40))
  }
  return false
}

export async function scrollToHashWhenReady(hash: string) {
  const id = parseHash(hash)
  if (!id) return
  await waitForSection(id)
  ScrollTrigger.refresh()
  await new Promise((r) => requestAnimationFrame(() => r(undefined)))
  return scrollToSection(id)
}

export function bindHashNavigation() {
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return
    const origin = e.target as HTMLElement | null
    if (!origin) return
    const a = origin.closest<HTMLElement>('a[href^="#"], [data-scroll-to]')
    if (!a) return
    if (a instanceof HTMLAnchorElement && a.target === '_blank') return
    const href = a.getAttribute('href') || a.getAttribute('data-scroll-to')
    if (!href || href === '#' || href.startsWith('http')) return
    if (!href.startsWith('#')) return
    e.preventDefault()

    const mobileNav = a.closest('#mobile-nav')
    if (mobileNav) {
      window.dispatchEvent(new CustomEvent('tartaruga:close-nav'))
      window.setTimeout(() => {
        void scrollToSection(href)
      }, 140)
      return
    }
    void scrollToSection(href)
  }

  document.addEventListener('click', onClick)
  return () => document.removeEventListener('click', onClick)
}

export const sectionIds = [
  'hero',
  'lugar',
  'carta',
  'fuego',
  'experiencias',
  'pet',
  'artesanal',
  'galeria',
  'reseñas',
  'instagram',
  'mapa',
  'reservas',
  'beneficios',
  'propuesta',
] as const
