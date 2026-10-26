import type { Copy } from '@/lib/localized'

export const experiences: {
  id: string
  title: Copy
  lead: Copy
  tone: 'gold' | 'sand' | 'ember' | 'navy'
}[] = [
  {
    id: 'sunset',
    title: { es: 'Sunset en el faro', en: 'Lighthouse sunset', pt: 'Pôr do sol no farol' },
    lead: {
      es: 'Una mesa, el sol bajando y el mar que se pone de cobre. Nada más.',
      en: 'A table, the sun going down, the sea turning copper. Nothing else.',
      pt: 'Uma mesa, o sol descendo e o mar virando cobre. Nada mais.',
    },
    tone: 'gold',
  },
  {
    id: 'brunch',
    title: { es: 'Brunch frente al mar', en: 'Brunch by the sea', pt: 'Brunch frente ao mar' },
    lead: {
      es: 'Pan, pesca fría, jugos y el faro todavía con cara de mañana.',
      en: 'Bread, cold catch, juices, and the lighthouse still wearing morning.',
      pt: 'Pão, pesca fria, sucos e o farol ainda com cara de manhã.',
    },
    tone: 'sand',
  },
  {
    id: 'fire',
    title: { es: 'Noches de fuego', en: 'Fire nights', pt: 'Noites de fogo' },
    lead: {
      es: 'Brasero, olla de hierro y conversación que se alarga con las brasas.',
      en: 'Brazier, iron pot, and talk that stretches with the embers.',
      pt: 'Braseiro, panela de ferro e conversa que se alonga com as brasas.',
    },
    tone: 'ember',
  },
  {
    id: 'events',
    title: { es: 'Eventos', en: 'Events', pt: 'Eventos' },
    lead: {
      es: 'El deck entero para ustedes. Cumpleaños, brindis, un sí al atardecer.',
      en: 'The whole deck for you. Birthdays, toasts, a yes at dusk.',
      pt: 'O deck inteiro para vocês. Aniversários, brinde, um sim ao entardecer.',
    },
    tone: 'navy',
  },
]
