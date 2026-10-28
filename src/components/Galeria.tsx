import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { galleryItems } from '@/data/gallery'
import { pick } from '@/lib/localized'
import { Flip } from '@/lib/gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MediaFrame } from '@/components/MediaFrame'
import 'swiper/css'
import 'swiper/css/navigation'

export function Galeria() {
  const { t, i18n } = useTranslation()
  const reduced = useReducedMotion()
  const [open, setOpen] = useState<string | null>(null)
  const thumbs = useRef<Record<string, HTMLButtonElement | null>>({})
  const full = useRef<HTMLDivElement>(null)
  const item = galleryItems.find((g) => g.id === open)

  const openItem = (id: string) => {
    const thumb = thumbs.current[id]
    setOpen(id)
    if (reduced || !thumb) return
    requestAnimationFrame(() => {
      if (!full.current) return
      Flip.fit(full.current, thumb, { duration: 0.55, ease: 'power3.inOut' })
    })
  }

  return (
    <section id="galeria" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('galeria.kicker')}</p>
        <h2 className="font-display text-4xl sm:text-5xl">{t('galeria.title')}</h2>
        <p className="mt-4 max-w-lg text-sand">{t('galeria.lead')}</p>
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={14}
            slidesPerView={1.15}
            breakpoints={{ 640: { slidesPerView: 2.15 }, 1024: { slidesPerView: 3.1 } }}
          >
            {galleryItems.map((g) => (
              <SwiperSlide key={g.id}>
                <button
                  type="button"
                  ref={(node) => {
                    thumbs.current[g.id] = node
                  }}
                  onClick={() => openItem(g.id)}
                  className="block w-full overflow-hidden rounded-[1.5rem] text-left"
                >
                  <MediaFrame
                    stem={g.photo}
                    alt={pick(g.alt, i18n.language)}
                    className="aspect-4/5 w-full"
                    gradient={g.gradient}
                  />
                  <p className="mt-3 font-mono text-[0.65rem] tracking-[0.18em] text-amber uppercase">
                    {pick(g.title, i18n.language)} · {t('demo')}
                  </p>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {item ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-deep/80 p-6"
          role="dialog"
          aria-modal="true"
          aria-label={pick(item.title, i18n.language)}
        >
          <div
            ref={full}
            className="aspect-4/5 w-full max-w-md overflow-hidden rounded-[1.5rem]"
          >
            <MediaFrame
              stem={item.photo}
              alt={pick(item.alt, i18n.language)}
              className="h-full w-full"
              gradient={item.gradient}
            />
          </div>
          <button
            type="button"
            className="absolute top-6 right-6 font-mono text-xs tracking-[0.2em] text-amber uppercase"
            onClick={() => setOpen(null)}
          >
            {t('galeria.close')}
          </button>
        </div>
      ) : null}
    </section>
  )
}
