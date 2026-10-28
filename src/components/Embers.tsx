import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { isLowPowerDevice } from '@/lib/device'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export default function Embers() {
  const reduced = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [low] = useState(() => isLowPowerDevice())

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: low ? 30 : 45,
      particles: {
        number: { value: low ? 14 : 36 },
        color: { value: ['#E85D04', '#DC2F02', '#E9C46A', '#F4A261'] },
        opacity: { value: { min: 0.15, max: 0.8 } },
        size: { value: { min: 1, max: 2.8 } },
        move: {
          enable: true,
          direction: 'top' as const,
          speed: { min: 0.4, max: 1.6 },
          outModes: { default: 'out' as const },
        },
        shape: { type: 'circle' },
      },
      detectRetina: !low,
    }),
    [low],
  )

  if (reduced || !ready) return null

  return (
    <Particles
      id="embers"
      className="pointer-events-none absolute inset-0"
      options={options}
    />
  )
}
