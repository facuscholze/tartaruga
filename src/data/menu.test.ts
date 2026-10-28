import { describe, expect, it } from 'vitest'
import { menuItems, formatPrice } from './menu'
import { benefits } from './benefits'
import { hours } from './hours'

describe('contenido DEMO', () => {
  it('toda la carta está marcada DEMO', () => {
    expect(menuItems.length).toBeGreaterThan(10)
    expect(menuItems.every((item) => item.demo)).toBe(true)
  })

  it('formatea precios en pesos uruguayos', () => {
    expect(formatPrice(890, 'es')).toMatch(/890/)
  })

  it('horarios y beneficios son DEMO', () => {
    expect(hours.demo).toBe(true)
    expect(benefits.every((b) => b.demo)).toBe(true)
  })
})
