import { useTranslation } from 'react-i18next'
import { LottieMark } from '@/components/LottieMark'
import { StarfishMark } from '@/components/Engravings'
import { MediaFrame } from '@/components/MediaFrame'

export function PetFriendly() {
  const { t } = useTranslation()
  return (
    <section id="pet" className="relative z-10 px-5 py-24 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 rounded-[2rem] border border-cactus/40 bg-navy/60 p-8 md:flex-row md:items-center md:p-14">
        <MediaFrame
          stem="mascota"
          alt={t('pet.title')}
          className="h-40 w-full rounded-2xl md:h-48 md:w-56"
          gradient="linear-gradient(160deg, #40916C, #16213F)"
        />
        <div className="flex items-center gap-4 text-foam">
          <LottieMark kind="wave" label="Ola" />
          <StarfishMark className="h-16 w-16 text-cactus" />
        </div>
        <div>
          <p className="section-kicker mb-3">{t('pet.kicker')}</p>
          <h2 className="font-display text-4xl text-foam">{t('pet.title')}</h2>
          <p className="mt-4 max-w-xl text-lg text-sand">{t('pet.lead')}</p>
          <a
            href="#reservas"
            className="mt-6 inline-flex font-mono text-xs tracking-[0.18em] text-amber uppercase"
          >
            {t('pet.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
