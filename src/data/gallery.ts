import type { Copy } from '@/lib/localized'

export const galleryItems: {
  id: string
  title: Copy
  alt: Copy
  gradient: string
}[] = [
  {
    id: 'g1',
    title: { es: 'Hora dorada', en: 'Golden hour', pt: 'Hora dourada' },
    alt: { es: 'Cielo de hora dorada sobre el mar', en: 'Golden-hour sky over the sea', pt: 'Céu dourado sobre o mar' },
    gradient: 'linear-gradient(160deg, #F4A261 0%, #E85D04 42%, #16213F 100%)',
  },
  {
    id: 'g2',
    title: { es: 'Deck de madera', en: 'Wooden deck', pt: 'Deck de madeira' },
    alt: { es: 'Deck de madera con faroles cálidos', en: 'Wooden deck with warm lanterns', pt: 'Deck de madeira com lanternas quentes' },
    gradient: 'linear-gradient(180deg, #6F4E37 0%, #1A140F 100%)',
  },
  {
    id: 'g3',
    title: { es: 'Olla de hierro', en: 'Iron pot', pt: 'Panela de ferro' },
    alt: { es: 'Olla de hierro sobre trípode y fuego', en: 'Iron pot on a tripod over fire', pt: 'Panela de ferro no tripé sobre o fogo' },
    gradient: 'linear-gradient(145deg, #C45C26 0%, #9D0208 40%, #0B1020 100%)',
  },
  {
    id: 'g4',
    title: { es: 'Faro', en: 'Lighthouse', pt: 'Farol' },
    alt: { es: 'Silueta del faro de Punta Colorada', en: 'Punta Colorada lighthouse silhouette', pt: 'Silhueta do farol de Punta Colorada' },
    gradient: 'linear-gradient(180deg, #87B8D9 0%, #16213F 70%)',
  },
  {
    id: 'g5',
    title: { es: 'Crepúsculo', en: 'Twilight', pt: 'Crepúsculo' },
    alt: { es: 'Cielo violeta de crepúsculo', en: 'Violet twilight sky', pt: 'Céu violeta do crepúsculo' },
    gradient: 'linear-gradient(160deg, #5C4B8A 0%, #3D2C56 45%, #0B1020 100%)',
  },
  {
    id: 'g6',
    title: { es: 'Cactus', en: 'Cactus', pt: 'Cacto' },
    alt: { es: 'Cactus al borde del deck', en: 'Cactus at the edge of the deck', pt: 'Cacto na beira do deck' },
    gradient: 'linear-gradient(160deg, #40916C 0%, #2D6A4F 40%, #1A140F 100%)',
  },
  {
    id: 'g7',
    title: { es: 'Metal oxidado', en: 'Oxidised metal', pt: 'Metal oxidado' },
    alt: { es: 'Escultura de metal oxidado con calados', en: 'Pierced oxidised metal sculpture', pt: 'Escultura de metal oxidado recortada' },
    gradient: 'linear-gradient(160deg, #B87333 0%, #6F4E37 50%, #16213F 100%)',
  },
  {
    id: 'g8',
    title: { es: 'Noche en el mar', en: 'Night at sea', pt: 'Noite no mar' },
    alt: { es: 'Mar de noche con reflejos de faroles', en: 'Night sea with lantern reflections', pt: 'Mar à noite com reflexos de lanternas' },
    gradient: 'linear-gradient(180deg, #0B1020 0%, #16213F 50%, #1A140F 100%)',
  },
]
