import type { Copy } from '@/lib/localized'

export const benefits: {
  id: string
  title: Copy
  lead: Copy
  demo: true
}[] = [
  {
    id: 'copas',
    title: { es: '2×1 en copas al sunset', en: '2-for-1 glasses at sunset', pt: '2×1 em taças no pôr do sol' },
    lead: {
      es: 'Cuando el sol toca el agua, las copas se duplican. DEMO.',
      en: 'When the sun hits the water, glasses double. DEMO.',
      pt: 'Quando o sol toca a água, as taças se duplicam. DEMO.',
    },
    demo: true,
  },
  {
    id: 'menu-dia',
    title: { es: 'Menú del día', en: 'Menu of the day', pt: 'Menu do dia' },
    lead: {
      es: 'Pesca, ensalada y un vaso de vino. Preguntá al mediodía. DEMO.',
      en: 'Catch, salad and a glass of wine. Ask at noon. DEMO.',
      pt: 'Pesca, salada e uma taça de vinho. Pergunte ao meio-dia. DEMO.',
    },
    demo: true,
  },
  {
    id: 'brunch-sun',
    title: { es: 'Brunch de domingo', en: 'Sunday brunch', pt: 'Brunch de domingo' },
    lead: {
      es: 'Mesa larga, perro abajo, faro de fondo. DEMO.',
      en: 'Long table, dog underneath, lighthouse behind. DEMO.',
      pt: 'Mesa longa, cachorro embaixo, farol ao fundo. DEMO.',
    },
    demo: true,
  },
]
