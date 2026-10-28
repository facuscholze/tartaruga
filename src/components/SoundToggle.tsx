import { useTranslation } from 'react-i18next'
import { useApp } from '@/context/AppContext'
import { setWavesPlaying } from '@/lib/sound'

export function SoundToggle() {
  const { t } = useTranslation()
  const { soundOn, setSoundOn } = useApp()

  return (
    <button
      type="button"
      className="fixed top-20 left-4 z-40 hidden rounded-full border border-foam/20 bg-navy/80 px-3 py-2 font-mono text-[0.62rem] tracking-[0.16em] text-foam uppercase backdrop-blur md:block"
      aria-pressed={soundOn}
      aria-label={soundOn ? t('ui.soundOn') : t('ui.soundOff')}
      onClick={() => {
        const next = !soundOn
        setSoundOn(next)
        setWavesPlaying(next)
      }}
    >
      {t('ui.sound')} {soundOn ? 'on' : 'off'}
    </button>
  )
}
