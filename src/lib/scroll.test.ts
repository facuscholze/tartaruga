import { describe, expect, it } from 'vitest'
import { durationForDistance, easeInOutCubic, parseHash } from './scroll'

describe('scroll helpers', () => {
  it('parsea hashes con o sin #', () => {
    expect(parseHash('#carta')).toBe('carta')
    expect(parseHash('reservas')).toBe('reservas')
    expect(parseHash('#mapa?x=1')).toBe('mapa')
  })

  it('clampa la duración entre 1s y 2.2s', () => {
    expect(durationForDistance(10)).toBe(1)
    expect(durationForDistance(9000)).toBe(2.2)
    expect(durationForDistance(1800)).toBeGreaterThan(1)
    expect(durationForDistance(1800)).toBeLessThan(2.2)
  })

  it('easing cubico arranca y termina plano', () => {
    expect(easeInOutCubic(0)).toBe(0)
    expect(easeInOutCubic(1)).toBe(1)
    expect(easeInOutCubic(0.5)).toBeCloseTo(0.5, 5)
  })
})
