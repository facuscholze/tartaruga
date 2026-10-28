import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useApp } from '@/context/AppContext'
import type { TimeMode } from '@/lib/dayState'
import { readDemoFlag } from '@/lib/demoMode'

const modes: TimeMode[] = ['auto', 'noon', 'sunset', 'night']

export function TimeModeToggle() {
  const { t } = useTranslation()
  const { mode, setMode } = useApp()
  const [demo] = useState(() => readDemoFlag())

  if (!demo) return null

  return (
    <div
      className="fixed top-20 right-4 z-40 hidden gap-1 rounded-full border border-foam/20 bg-navy/80 p-1 backdrop-blur md:flex"
      role="group"
      aria-label={t('ui.timeMode')}
    >
      {modes.map((m) => (
        <button
          key={m}
          type="button"
          aria-pressed={mode === m}
          onClick={() => setMode(m)}
          className={`rounded-full px-2.5 py-1.5 font-mono text-[0.58rem] tracking-[0.12em] uppercase ${
            mode === m ? 'bg-amber text-navy' : 'text-foam/70'
          }`}
        >
          {t(`ui.${m}`)}
        </button>
      ))}
    </div>
  )
}
