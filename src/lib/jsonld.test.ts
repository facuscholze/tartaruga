import { describe, expect, it } from 'vitest'
import { restaurantJsonLd } from './jsonld'

describe('JSON-LD', () => {
  it('describe el restaurante con teléfono y coords', () => {
    const data = restaurantJsonLd()
    expect(data['@type']).toBe('Restaurant')
    expect(data.telephone).toBe('+59844321831')
    expect(data.geo.latitude).toBeCloseTo(-34.901, 3)
    expect(data.url).toContain('tartaruga')
  })
})
