import { describe, expect, it } from 'vitest'
import { withBase } from './base'

describe('withBase', () => {
  it('antepone el base de Vite sin duplicar barras', () => {
    const out = withBase('/icons/icon-192.png')
    expect(out.endsWith('icons/icon-192.png')).toBe(true)
    expect(out.includes('//icons')).toBe(false)
  })
})
