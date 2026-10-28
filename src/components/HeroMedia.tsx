import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { withBase } from '@/lib/base'
import { imageSrc } from '@/lib/media'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { isLowPowerDevice } from '@/lib/device'

function paintSunset(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  const g = ctx.createLinearGradient(0, 0, 0, h)
  g.addColorStop(0, `hsl(${18 + t * 12}, 72%, ${38 + t * 8}%)`)
  g.addColorStop(0.42, `hsl(${28 - t * 10}, 85%, 52%)`)
  g.addColorStop(0.55, '#16213F')
  g.addColorStop(1, '#0B1020')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, w, h)
  const sunY = h * (0.28 + t * 0.18)
  const sunX = w * 0.62
  const rad = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, h * 0.35)
  rad.addColorStop(0, 'rgba(255, 214, 140, 0.95)')
  rad.addColorStop(0.2, 'rgba(232, 93, 4, 0.55)')
  rad.addColorStop(1, 'rgba(22, 33, 63, 0)')
  ctx.fillStyle = rad
  ctx.fillRect(0, 0, w, h)
}

function startCanvasLoop(video: HTMLVideoElement) {
  const canvas = document.createElement('canvas')
  canvas.width = 960
  canvas.height = 540
  const ctx = canvas.getContext('2d', { alpha: false })
  if (!ctx || typeof canvas.captureStream !== 'function') return () => undefined
  let raf = 0
  const t0 = performance.now()
  const draw = (now: number) => {
    const t = (Math.sin((now - t0) / 5000) + 1) / 2
    paintSunset(ctx, canvas.width, canvas.height, t)
    raf = requestAnimationFrame(draw)
  }
  raf = requestAnimationFrame(draw)
  const stream = canvas.captureStream(20)
  video.srcObject = stream
  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  void video.play()
  return () => {
    cancelAnimationFrame(raf)
    stream.getTracks().forEach((tr) => tr.stop())
    video.srcObject = null
  }
}

export function HeroMedia() {
  const { t } = useTranslation()
  const reduced = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [low] = useState(() => isLowPowerDevice())
  const poster = imageSrc('hero-atardecer')

  useEffect(() => {
    const el = videoRef.current
    if (!el || reduced || low) return
    let stop = () => undefined as void
    const file = withBase('video/hero.mp4')
    const tryFile = async () => {
      try {
        const res = await fetch(file, { method: 'HEAD' })
        if (res.ok) {
          el.src = file
          el.loop = true
          el.muted = true
          el.playsInline = true
          await el.play()
          return
        }
      } catch {
        /* fallback canvas */
      }
      stop = startCanvasLoop(el)
    }
    void tryFile()
    return () => stop()
  }, [reduced, low])

  if (reduced || low) {
    return poster ? (
      <img
        src={poster}
        alt={t('hero.videoLabel')}
        className="absolute inset-0 h-full w-full object-cover"
      />
    ) : (
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #E85D04, #0B1020)' }}
      />
    )
  }

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 h-full w-full object-cover"
      muted
      playsInline
      loop
      autoPlay
      poster={poster}
      aria-label={t('hero.videoLabel')}
    />
  )
}
