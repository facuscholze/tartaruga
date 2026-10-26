import { useEffect, useRef } from 'react'
import lottie, { type AnimationItem } from 'lottie-web'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import wave from '@/assets/lottie/wave.json'
import shell from '@/assets/lottie/shell.json'

const data = { wave, shell }

export function LottieMark({
  kind,
  className = 'h-20 w-20',
  label,
}: {
  kind: 'wave' | 'shell'
  className?: string
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!ref.current) return
    const anim: AnimationItem = lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: !reduced,
      autoplay: !reduced,
      animationData: data[kind],
    })
    if (reduced) anim.goToAndStop(20, true)
    return () => anim.destroy()
  }, [kind, reduced])

  return <div ref={ref} className={className} role="img" aria-label={label} />
}
