import { lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { IronPot } from '@/components/IronPot'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const Embers = lazy(() => import('@/components/Embers'))

export function Fuego() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()

  return (
    <section
      id="fuego"
      className="relative z-10 overflow-hidden bg-navy-deep/80 px-5 py-32 sm:px-10"
    >
      {!reduced ? (
        <Suspense fallback={null}>
          <Embers />
        </Suspense>
      ) : null}
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 text-center lg:flex-row lg:text-left">
        <div className="flex-1">
          <p className="section-kicker mb-4">{t('fuego.kicker')}</p>
          <h2 className="font-display text-4xl sm:text-6xl">{t('fuego.title')}</h2>
          <p className="mt-6 max-w-lg text-lg text-sand">{t('fuego.lead')}</p>
        </div>
        <IronPot />
      </div>
    </section>
  )
}
