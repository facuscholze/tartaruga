import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import {
  buildReservationMessage,
  contact,
  whatsappUrl,
} from '@/data/contact'
import { MagneticButton } from '@/components/MagneticButton'

export function Reservas() {
  const { t } = useTranslation()
  const [error, setError] = useState('')

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const date = String(data.get('date') ?? '').trim()
    const people = Number(data.get('people'))
    const pet = data.get('pet') === 'yes'
    const notes = String(data.get('notes') ?? '')
    if (!name || !date || !people) {
      setError(t('reservas.required'))
      return
    }
    setError('')
    const msg = buildReservationMessage({ name, date, people, pet, notes })
    window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="reservas" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="section-kicker mb-4">{t('reservas.kicker')}</p>
          <h2 className="font-display text-4xl sm:text-5xl">{t('reservas.title')}</h2>
          <p className="mt-4 text-lg text-sand">{t('reservas.lead')}</p>
          <p className="mt-8 font-mono text-sm tracking-[0.14em] text-amber">
            {t('reservas.phone')}:{' '}
            <a className="underline-offset-4 hover:underline" href={`tel:${contact.phoneTel}`}>
              {contact.phoneDisplay}
            </a>
          </p>
          {contact.whatsappIsDemo ? (
            <p className="mt-3">
              <span className="demo-chip">{t('reservas.demoWa')}</span>
            </p>
          ) : null}
        </div>
        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-[2rem] border border-foam/10 bg-navy/70 p-6 sm:p-8"
        >
          <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
            {t('reservas.name')}
            <input
              name="name"
              required
              autoComplete="name"
              className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
            />
          </label>
          <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
            {t('reservas.date')}
            <input
              name="date"
              type="date"
              required
              className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
            />
          </label>
          <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
            {t('reservas.people')}
            <input
              name="people"
              type="number"
              min={1}
              max={20}
              defaultValue={2}
              required
              className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
            />
          </label>
          <fieldset>
            <legend className="font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
              {t('reservas.pet')}
            </legend>
            <div className="mt-3 flex gap-4">
              <label className="flex items-center gap-2 text-foam">
                <input type="radio" name="pet" value="yes" />
                {t('reservas.petYes')}
              </label>
              <label className="flex items-center gap-2 text-foam">
                <input type="radio" name="pet" value="no" defaultChecked />
                {t('reservas.petNo')}
              </label>
            </div>
          </fieldset>
          <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
            {t('reservas.notes')}
            <textarea
              name="notes"
              rows={3}
              className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
            />
          </label>
          {error ? (
            <p role="alert" className="text-sm text-gold">
              {error}
            </p>
          ) : null}
          <MagneticButton type="submit" className="w-full">
            {t('reservas.submit')}
          </MagneticButton>
        </form>
      </div>
    </section>
  )
}
