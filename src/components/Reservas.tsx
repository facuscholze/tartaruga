import { useState, type FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence, motion } from 'motion/react'
import {
  buildReservationMessage,
  contact,
  mapsDirectionsUrl,
  whatsappUrl,
} from '@/data/contact'
import { MagneticButton } from '@/components/MagneticButton'

type Draft = { name: string; date: string; people: number; pet: boolean }

export function Reservas() {
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [error, setError] = useState('')
  const [draft, setDraft] = useState<Draft>({
    name: '',
    date: '',
    people: 2,
    pet: false,
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'done'>('idle')

  const nextFrom0 = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget as HTMLFormElement)
    const date = String(data.get('date') ?? '').trim()
    const people = Number(data.get('people'))
    if (!date || !people) {
      setError(t('reservas.required'))
      return
    }
    setDraft((d) => ({ ...d, date, people }))
    setError('')
    setStep(1)
  }

  const nextFrom1 = (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget as HTMLFormElement)
    const name = String(data.get('name') ?? '').trim()
    if (!name) {
      setError(t('reservas.required'))
      return
    }
    setDraft((d) => ({ ...d, name, pet: data.get('pet') === 'yes' }))
    setError('')
    setStep(2)
  }

  const confirm = (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const msg = buildReservationMessage(draft)
    window.setTimeout(() => {
      window.open(whatsappUrl(msg), '_blank', 'noopener,noreferrer')
      setStatus('done')
    }, 700)
  }

  return (
    <section id="reservas" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <p className="section-kicker mb-4">{t('reservas.kicker')}</p>
          <h2 className="font-display text-4xl sm:text-5xl">{t('reservas.title')}</h2>
          <p className="mt-4 text-lg text-sand">{t('reservas.lead')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center rounded-full bg-amber px-5 font-mono text-xs tracking-[0.16em] text-navy uppercase"
              href={`tel:${contact.phoneTel}`}
            >
              {t('reservas.phone')} · {contact.phoneDisplay}
            </a>
            <a
              className="inline-flex min-h-12 items-center rounded-full border border-amber/50 px-5 font-mono text-xs tracking-[0.16em] text-amber uppercase"
              href={mapsDirectionsUrl()}
              target="_blank"
              rel="noreferrer"
            >
              {t('mapa.directions')}
            </a>
          </div>
          {contact.whatsappIsDemo ? (
            <p className="mt-4">
              <span className="demo-chip">{t('reservas.demoWa')}</span>
            </p>
          ) : null}
        </div>
        <div className="rounded-[2rem] border border-foam/10 bg-navy/70 p-6 sm:p-8">
          <p className="mb-6 font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
            {t('reservas.step')} {step + 1} {t('reservas.of')} 3 ·{' '}
            {t(`reservas.step${step + 1}` as 'reservas.step1')}
          </p>
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.form
                key="s0"
                onSubmit={nextFrom0}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                className="space-y-4"
              >
                <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
                  {t('reservas.date')}
                  <input
                    name="date"
                    type="date"
                    required
                    defaultValue={draft.date}
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
                    defaultValue={draft.people}
                    required
                    className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
                  />
                </label>
                {error ? (
                  <p role="alert" className="text-sm text-gold">
                    {error}
                  </p>
                ) : null}
                <MagneticButton type="submit" className="w-full">
                  {t('reservas.next')}
                </MagneticButton>
              </motion.form>
            ) : null}
            {step === 1 ? (
              <motion.form
                key="s1"
                onSubmit={nextFrom1}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                className="space-y-4"
              >
                <label className="block font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
                  {t('reservas.name')}
                  <input
                    name="name"
                    required
                    autoComplete="name"
                    defaultValue={draft.name}
                    className="mt-2 w-full rounded-xl border border-foam/15 bg-navy-deep px-4 py-3 font-display text-base text-foam"
                  />
                </label>
                <fieldset>
                  <legend className="font-mono text-[0.65rem] tracking-[0.16em] text-amber uppercase">
                    {t('reservas.pet')}
                  </legend>
                  <div className="mt-3 flex gap-4">
                    <label className="flex items-center gap-2 text-foam">
                      <input type="radio" name="pet" value="yes" defaultChecked={draft.pet} />
                      {t('reservas.petYes')}
                    </label>
                    <label className="flex items-center gap-2 text-foam">
                      <input
                        type="radio"
                        name="pet"
                        value="no"
                        defaultChecked={!draft.pet}
                      />
                      {t('reservas.petNo')}
                    </label>
                  </div>
                </fieldset>
                {error ? (
                  <p role="alert" className="text-sm text-gold">
                    {error}
                  </p>
                ) : null}
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-foam/30 px-5 py-3 font-mono text-xs tracking-[0.16em] uppercase"
                    onClick={() => setStep(0)}
                  >
                    {t('reservas.back')}
                  </button>
                  <MagneticButton type="submit" className="flex-1">
                    {t('reservas.next')}
                  </MagneticButton>
                </div>
              </motion.form>
            ) : null}
            {step === 2 ? (
              <motion.form
                key="s2"
                onSubmit={confirm}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                className="space-y-4"
              >
                <p className="text-sand">{t('reservas.summary')}</p>
                <ul className="space-y-1 font-display text-lg text-foam">
                  <li>{draft.name}</li>
                  <li>
                    {draft.date} · {draft.people}
                  </li>
                  <li>{draft.pet ? t('reservas.petYes') : t('reservas.petNo')}</li>
                </ul>
                {status === 'done' ? (
                  <p role="status" className="text-amber">
                    {t('reservas.done')}
                  </p>
                ) : null}
                <div className="flex gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-foam/30 px-5 py-3 font-mono text-xs tracking-[0.16em] uppercase"
                    onClick={() => setStep(1)}
                  >
                    {t('reservas.back')}
                  </button>
                  <MagneticButton type="submit" className="flex-1">
                    {status === 'sending' ? t('reservas.sending') : t('reservas.submit')}
                  </MagneticButton>
                </div>
              </motion.form>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
