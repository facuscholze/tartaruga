import { describe, expect, it } from 'vitest'
import { pick, type Copy } from './localized'

const copy: Copy = { es: 'vos', en: 'you', pt: 'você' }

describe('pick', () => {
  it('elige el idioma y cae a español', () => {
    expect(pick(copy, 'en-US')).toBe('you')
    expect(pick(copy, 'pt-BR')).toBe('você')
    expect(copy.es).toBe('vos')
    expect(pick(copy, 'fr')).toBe('vos')
  })
})
