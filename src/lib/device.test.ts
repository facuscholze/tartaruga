import { describe, expect, it } from 'vitest'
import { modeToProgress } from './dayState'
import { prefersReducedMotion } from './device'

describe('device + day', () => {
  it('mapea modos de hora a un progreso de cielo', () => {
    expect(modeToProgress('noon')).toBeLessThan(0.2)
    expect(modeToProgress('sunset')).toBeGreaterThan(0.4)
    expect(modeToProgress('sunset')).toBeLessThan(0.7)
    expect(modeToProgress('night')).toBeGreaterThan(0.8)
  })

  it('lee prefers-reduced-motion desde matchMedia', () => {
    expect(prefersReducedMotion()).toBe(false)
  })
})
