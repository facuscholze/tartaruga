import { lazy, Suspense, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { AppProvider, useApp } from '@/context/AppContext'
import { registerGsap } from '@/lib/gsap'
import { destroyLenis, initLenis } from '@/lib/lenis-sync'
import { prefersReducedMotion } from '@/lib/device'
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
const Mapa = lazy(() => import('@/components/Mapa'))
const Reservas = lazy(() =>
  import('@/components/Reservas').then((m) => ({ default: m.Reservas })),
)
const Beneficios = lazy(() =>
  import('@/components/Beneficios').then((m) => ({ default: m.Beneficios })),
)

registerGsap()

function Page() {
  const { t, i18n } = useTranslation()
  const { loaderDone } = useApp()

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
    return () => destroyLenis()
  }, [loaderDone])

  return (
    <div className="relative min-h-dvh text-foam">
      <a className="skip-link" href="#contenido">
        {t('skip')}
      </a>
      <Suspense fallback={<SkyFallback />}>
        <SkyCanvas />
      </Suspense>
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
          <Mapa />
          <Reservas />
          <Beneficios />
        </Suspense>
      </main>
      <Footer />
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
