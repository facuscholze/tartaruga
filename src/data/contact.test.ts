import { describe, expect, it } from 'vitest'
import {
  buildReservationMessage,
  contact,
  mapsDirectionsUrl,
  mapsSearchUrl,
  whatsappUrl,
} from './contact'

describe('contact', () => {
  it('marca el WhatsApp como DEMO y usa coords de Punta Colorada', () => {
    expect(contact.whatsappIsDemo).toBe(true)
    expect(contact.whatsapp).toBe('59800000000')
    expect(contact.coords.lat).toBeCloseTo(-34.901, 3)
    expect(contact.coords.lng).toBeCloseTo(-55.259, 3)
    expect(contact.phoneTel).toBe('+59844321831')
  })

  it('arma el mensaje de reserva y el link de WhatsApp', () => {
    const msg = buildReservationMessage({
      name: 'Ana',
      date: '2026-12-24',
      people: 4,
      pet: true,
      notes: 'mesa afuera',
    })
    expect(msg).toContain('Nombre: Ana')
    expect(msg).toContain('Personas: 4')
    expect(msg).toContain('Mascota: sí')
    expect(msg).toContain('mesa afuera')
    expect(whatsappUrl(msg)).toMatch(/^https:\/\/wa\.me\/59800000000\?text=/)
  })

  it('genera URLs de mapas', () => {
    expect(mapsSearchUrl()).toContain('-34.901,-55.259')
    expect(mapsDirectionsUrl()).toContain('destination=-34.901,-55.259')
  })
})
