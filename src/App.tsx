import { lazy, Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AppProvider, useApp } from '@/context/AppContext'
import { registerGsap } from '@/lib/gsap'
import { destroyLenis, initLenis } from '@/lib/lenis-sync'
import { isLowPowerDevice, prefersReducedMotion } from '@/lib/device'
import { bindHashNavigation, scrollToHashWhenReady } from '@/lib/scroll'
import { readDemoFlag } from '@/lib/demoMode'
import { Loader } from '@/components/Loader'
import { CustomCursor } from '@/components/CustomCursor'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Marquee } from '@/components/Marquee'
import { Lugar } from '@/components/Lugar'
import { Footer } from '@/components/Footer'
import { SoundToggle } from '@/components/SoundToggle'
import { TimeModeToggle } from '@/components/TimeModeToggle'
import { EasterEgg } from '@/components/EasterEgg'
import { FloatingShells } from '@/components/FloatingShells'
import { StickyBar } from '@/components/StickyBar'
import { JsonLd } from '@/components/JsonLd'
import { SkyFallback } from '@/scenes/SkyFallback'

const SkyCanvas = lazy(() => import('@/scenes/SkyCanvas'))
const Carta = lazy(() => import('@/components/Carta').then((m) => ({ default: m.Carta })))
const Fuego = lazy(() => import('@/components/Fuego').then((m) => ({ default: m.Fuego })))
const Experiencias = lazy(() =>
  import('@/components/Experiencias').then((m) => ({ default: m.Experiencias })),
)
const PetFriendly = lazy(() =>
  import('@/components/PetFriendly').then((m) => ({ default: m.PetFriendly })),
)
const Artesanal = lazy(() =>
  import('@/components/Artesanal').then((m) => ({ default: m.Artesanal })),
)
const Galeria = lazy(() => import('@/components/Galeria').then((m) => ({ default: m.Galeria })))
const Reviews = lazy(() => import('@/components/Reviews').then((m) => ({ default: m.Reviews })))
const InstagramFeed = lazy(() =>
  import('@/components/InstagramFeed').then((m) => ({ default: m.InstagramFeed })),
)
const Mapa = lazy(() => import('@/components/Mapa'))
const Reservas = lazy(() =>
  import('@/components/Reservas').then((m) => ({ default: m.Reservas })),
)
const Beneficios = lazy(() =>
  import('@/components/Beneficios').then((m) => ({ default: m.Beneficios })),
)
const Propuesta = lazy(() =>
  import('@/components/Propuesta').then((m) => ({ default: m.Propuesta })),
)

registerGsap()

function Page() {
  const { t, i18n } = useTranslation()
  const { loaderDone } = useApp()
  const [sky, setSky] = useState(false)

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('meta.description'))
  }, [t, i18n.language])

  useEffect(() => {
    document.body.style.overflow = loaderDone ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [loaderDone])

  useEffect(() => {
    if (!loaderDone) return
    if (prefersReducedMotion()) return
    initLenis()
    const unbind = bindHashNavigation()
    return () => {
      unbind()
      destroyLenis()
    }
  }, [loaderDone])

  useEffect(() => {
    if (!loaderDone) return
    const hash = window.location.hash
    const demo = readDemoFlag()
    const target = hash || (demo ? '#propuesta' : '')
    if (target) void scrollToHashWhenReady(target)
  }, [loaderDone])

  useEffect(() => {
    if (!loaderDone) return
    if (prefersReducedMotion() || isLowPowerDevice()) return
    const idle = 'requestIdleCallback' in window
    const id = idle
      ? window.requestIdleCallback(() => setSky(true))
      : window.setTimeout(() => setSky(true), 500)
    return () => {
      if (idle) window.cancelIdleCallback(id)
      else window.clearTimeout(id)
    }
  }, [loaderDone])

  return (
    <div className="relative min-h-dvh pb-24 text-foam md:pb-0">
      <JsonLd />
      <a className="skip-link" href="#contenido">
        {t('skip')}
      </a>
      {sky ? (
        <Suspense fallback={<SkyFallback />}>
          <SkyCanvas />
        </Suspense>
      ) : (
        <SkyFallback />
      )}
      <div className="grain" aria-hidden />
      <Loader />
      <CustomCursor />
      <FloatingShells />
      <Nav />
      <main id="contenido" className="relative z-10">
        <Hero />
        <Marquee />
        <Lugar />
        <Suspense fallback={null}>
          <Carta />
          <Fuego />
          <Experiencias />
          <PetFriendly />
          <Artesanal />
          <Galeria />
          <Reviews />
          <InstagramFeed />
          <Mapa />
          <Reservas />
          <Beneficios />
          <Propuesta />
        </Suspense>
      </main>
      <Footer />
      <StickyBar />
      <SoundToggle />
      <TimeModeToggle />
      <EasterEgg />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Page />
    </AppProvider>
  )
}
