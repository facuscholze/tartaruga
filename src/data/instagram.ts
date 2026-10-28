import type { Copy } from '@/lib/localized'

export const instagramFeed: {
  id: string
  photo: string
  alt: Copy
  demo: true
}[] = [
  {
    id: 'ig1',
    photo: 'hero-atardecer',
    alt: { es: 'Atardecer desde el deck', en: 'Sunset from the deck', pt: 'Pôr do sol no deck' },
    demo: true,
  },
  {
    id: 'ig2',
    photo: 'fuego',
    alt: { es: 'Brasero al anochecer', en: 'Brazier at dusk', pt: 'Braseiro ao anoitecer' },
    demo: true,
  },
  {
    id: 'ig3',
    photo: 'plato-01',
    alt: { es: 'Pesca del día', en: 'Catch of the day', pt: 'Pesca do dia' },
    demo: true,
  },
  {
    id: 'ig4',
    photo: 'deck',
    alt: { es: 'Deck de madera', en: 'Wooden deck', pt: 'Deck de madeira' },
    demo: true,
  },
  {
    id: 'ig5',
    photo: 'faro',
    alt: { es: 'Faro de Punta Colorada', en: 'Punta Colorada lighthouse', pt: 'Farol de Punta Colorada' },
    demo: true,
  },
  {
    id: 'ig6',
    photo: 'mascota',
    alt: { es: 'Perro en el deck', en: 'Dog on the deck', pt: 'Cachorro no deck' },
    demo: true,
  },
]
