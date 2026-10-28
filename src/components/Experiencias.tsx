import { useLayoutEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { experiences } from '@/data/experiences'
import { pick } from '@/lib/localized'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MediaFrame } from '@/components/MediaFrame'

const photos: Record<string, string> = {
  sunset: 'hero-atardecer',
  brunch: 'deck',
  fire: 'fuego',
  events: 'faro',
}

const tones: Record<string, string> = {
  gold: 'linear-gradient(160deg, #F4A261 0%, #E85D04 55%, #16213F 100%)',
  sand: 'linear-gradient(160deg, #E6CCB2 0%, #DDB892 40%, #6F4E37 100%)',
  ember: 'linear-gradient(160deg, #DC2F02 0%, #9D0208 45%, #0B1020 100%)',
  navy: 'linear-gradient(160deg, #16213F 0%, #3D2C56 55%, #0B1020 100%)',
}

export function Experiencias() {
  const { t, i18n } = useTranslation()
  const reduced = useReducedMotion()
  const section = useRef<HTMLElement>(null)
  const track = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const root = section.current
    const row = track.current
    if (!root || !row || reduced) return
    const ctx = gsap.context(() => {
      const distance = () => Math.max(0, row.scrollWidth - window.innerWidth)
      gsap.to(row, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          pin: true,
          scrub: 1,
          end: () => `+=${distance()}`,
          invalidateOnRefresh: true,
        },
      })
    }, root)
    return () => {
      ctx.revert()
      ScrollTrigger.refresh()
    }
  }, [reduced, t])

  return (
    <section id="experiencias" ref={section} className="relative z-10 py-24">
      <div className="px-5 sm:px-10">
        <p className="section-kicker mb-4">{t('experiencias.kicker')}</p>
        <h2 className="max-w-xl font-display text-4xl sm:text-5xl">{t('experiencias.title')}</h2>
      </div>
      <div
        ref={track}
        className={`mt-12 flex gap-6 px-5 sm:px-10 ${reduced ? 'flex-col md:flex-row md:overflow-x-auto' : 'w-max'}`}
      >
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="w-[min(84vw,420px)] shrink-0 overflow-hidden rounded-[2rem] border border-foam/10"
          >
            <MediaFrame
              stem={photos[exp.id]}
              alt={pick(exp.title, i18n.language)}
              className="h-56 w-full"
              gradient={tones[exp.tone]}
            />
            <div className="bg-navy/80 p-6 backdrop-blur">
              <h3 className="font-display text-3xl">{pick(exp.title, i18n.language)}</h3>
              <p className="mt-3 text-sand">{pick(exp.lead, i18n.language)}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 px-5 sm:px-10">
        <a
          href="#reservas"
          className="inline-flex rounded-full bg-amber px-6 py-3 font-mono text-xs tracking-[0.16em] text-navy uppercase"
        >
          {t('experiencias.cta')}
        </a>
      </div>
    </section>
  )
}
