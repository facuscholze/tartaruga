export const contact = {
  name: 'Tartaruga Sea-Bar',
  place: 'Faro de Punta Colorada',
  region: 'Maldonado, Uruguay',
  phoneDisplay: '4432 18 31',
  phoneTel: '+59844321831',
  /** Número de WhatsApp en formato internacional, sin +. Valor DEMO hasta confirmar. */
  whatsapp: '59800000000',
  whatsappIsDemo: true,
  instagram: 'https://instagram.com/tartaruga.puntacolorada',
  instagramHandle: '@tartaruga.puntacolorada',
  address: 'Calle Central esq. Rambla, Faro de Punta Colorada, Maldonado, Uruguay',
  coords: {
    lat: -34.901,
    lng: -55.259,
  },
} as const

export type Contact = typeof contact

export function mapsSearchUrl(lat = contact.coords.lat, lng = contact.coords.lng) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`
}

export function mapsDirectionsUrl(lat = contact.coords.lat, lng = contact.coords.lng) {
  return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
}

export function whatsappUrl(message: string, number = contact.whatsapp) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export type ReservationDraft = {
  name: string
  date: string
  people: number
  pet: boolean
  notes?: string
}

export function buildReservationMessage(draft: ReservationDraft) {
  const pet = draft.pet ? 'sí' : 'no'
  const notes = draft.notes?.trim() ? `\nNotas: ${draft.notes.trim()}` : ''
  return [
    `Hola Tartaruga, quiero reservar mesa.`,
    `Nombre: ${draft.name}`,
    `Fecha: ${draft.date}`,
    `Personas: ${draft.people}`,
    `Mascota: ${pet}`,
    notes,
  ]
    .filter(Boolean)
    .join('\n')
}
