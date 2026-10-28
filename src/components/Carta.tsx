import { useState, type MouseEvent, type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
import { motion } from 'motion/react'
import { menuCategories, menuItems, formatPrice, type MenuCategoryId } from '@/data/menu'
import { pick } from '@/lib/localized'
import { useFinePointer, useReducedMotion } from '@/hooks/useReducedMotion'
import { MediaFrame } from '@/components/MediaFrame'
import 'swiper/css'

function TiltCard({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()
  const fine = useFinePointer()

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced || !fine) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${px * 12}deg) rotateX(${-py * 10}deg)`
  }

  const onLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'rotateY(0) rotateX(0)'
  }

  return (
    <div className="[perspective:900px]">
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="h-full rounded-3xl border border-foam/10 bg-navy/70 p-5 shadow-[var(--shadow-card)] transition-transform duration-200"
      >
        {children}
      </div>
    </div>
  )
}

export function Carta() {
  const { t, i18n } = useTranslation()
  const [cat, setCat] = useState<MenuCategoryId>('starters')
  const lang = i18n.language
  const items = menuItems.filter((i) => i.category === cat)

  return (
    <section id="carta" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('carta.kicker')}</p>
        <h2 className="max-w-xl font-display text-4xl sm:text-5xl">{t('carta.title')}</h2>
        <p className="mt-4 max-w-lg text-sand">{t('carta.lead')}</p>
        <div
          role="tablist"
          aria-label={t('nav.carta')}
          className="mt-10 flex flex-wrap gap-2"
        >
          {menuCategories.map((c) => {
            const active = c.id === cat
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setCat(c.id)}
                className={`relative rounded-full px-4 py-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase ${
                  active ? 'text-navy' : 'text-foam/80'
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="carta-pill"
                    className="absolute inset-0 rounded-full bg-amber"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{pick(c.label, lang)}</span>
              </button>
            )
          })}
        </div>
        <div className="mt-8">
          <Swiper
            modules={[FreeMode]}
            freeMode
            spaceBetween={16}
            slidesPerView={1.12}
            breakpoints={{ 640: { slidesPerView: 2.1 }, 1024: { slidesPerView: 3.1 } }}
          >
            {items.map((item) => (
              <SwiperSlide key={item.id} className="!h-auto">
                <TiltCard>
                  <div className="flex h-full min-h-[210px] flex-col">
                    {item.photo ? (
                      <MediaFrame
                        stem={item.photo}
                        alt={pick(item.name, lang)}
                        className="mb-4 h-36 w-full rounded-2xl"
                      />
                    ) : null}
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-2xl">{pick(item.name, lang)}</h3>
                      <span className="demo-chip">{t('demo')}</span>
                    </div>
                    <p className="mt-3 text-sm text-sand">{pick(item.desc, lang)}</p>
                    <p className="mt-auto pt-6 font-mono text-sm tracking-wider text-amber">
                      {formatPrice(item.price, lang)}
                      <span className="ml-2 text-[0.6rem] text-foam/50">{t('carta.priceNote')}</span>
                    </p>
                  </div>
                </TiltCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <a
          href="#reservas"
          className="mt-10 inline-flex font-mono text-xs tracking-[0.18em] text-amber uppercase"
        >
          {t('carta.cta')}
        </a>
      </div>
    </section>
  )
}
