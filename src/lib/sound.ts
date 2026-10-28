import { Howl } from 'howler'
import { withBase } from '@/lib/base'

let waves: Howl | null = null

export function getWaves() {
  if (!waves) {
    waves = new Howl({
      src: [withBase('sounds/olas.wav')],
      loop: true,
      volume: 0.28,
      preload: false,
      html5: true,
    })
  }
  return waves
}

export function setWavesPlaying(on: boolean) {
  const s = getWaves()
  if (on) {
    if (!s.playing()) s.play()
    s.fade(0, 0.28, 600)
  } else if (s.playing()) {
    s.fade(s.volume(), 0, 400)
    s.once('fade', () => s.stop())
  }
}
