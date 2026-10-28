import type { Copy } from '@/lib/localized'

export const socialProof = {
  followers: '50 mil',
  rating: 4.8,
  countDemo: 128,
} as const

export const reviews: {
  id: string
  author: Copy
  quote: Copy
  stars: number
  demo: true
}[] = [
  {
    id: 'r1',
    author: { es: 'Camila, Piriápolis', en: 'Camila, Piriápolis', pt: 'Camila, Piriápolis' },
    quote: {
      es: 'El sol se hundió mientras llegaban las rabas. No hay filtro que iguale eso.',
      en: 'The sun went down as the calamari arrived. No filter comes close.',
      pt: 'O sol afundou enquanto chegavam as lulas. Nenhum filtro chega perto.',
    },
    stars: 5,
    demo: true,
  },
  {
    id: 'r2',
    author: { es: 'Diego y Mora', en: 'Diego and Mora', pt: 'Diego e Mora' },
    quote: {
      es: 'Trajimos al perro. Nos dejaron el mejor rincón del deck, con agua fresca.',
      en: 'We brought the dog. They gave us the best corner of the deck, with fresh water.',
      pt: 'Trouxemos o cachorro. Nos deram o melhor canto do deck, com água fresca.',
    },
    stars: 5,
    demo: true,
  },
  {
    id: 'r3',
    author: { es: 'Lucía, Montevideo', en: 'Lucía, Montevideo', pt: 'Lucía, Montevideo' },
    quote: {
      es: 'Pedimos la pesca del día al hierro. Sal, limón, mar. Nada más.',
      en: 'We had the catch of the day on the iron. Salt, lemon, sea. Nothing else.',
      pt: 'Pedimos a pesca do dia no ferro. Sal, limão, mar. Nada mais.',
    },
    stars: 5,
    demo: true,
  },
]
