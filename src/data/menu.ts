import type { Copy } from '@/lib/localized'

export type MenuCategoryId = 'starters' | 'grill' | 'sea' | 'sweets' | 'drinks'

export type MenuItem = {
  id: string
  category: MenuCategoryId
  name: Copy
  desc: Copy
  price: number
  photo?: string
  demo: true
}

export const menuCategories: { id: MenuCategoryId; label: Copy }[] = [
  { id: 'starters', label: { es: 'Para empezar', en: 'To start', pt: 'Para começar' } },
  { id: 'grill', label: { es: 'Brasas', en: 'Embers', pt: 'Brasas' } },
  { id: 'sea', label: { es: 'Mar', en: 'Sea', pt: 'Mar' } },
  { id: 'sweets', label: { es: 'Dulces', en: 'Sweets', pt: 'Doces' } },
  { id: 'drinks', label: { es: 'Tragos', en: 'Drinks', pt: 'Drinks' } },
]

export const menuItems: MenuItem[] = [
  {
    id: 'croquetas',
    category: 'starters',
    photo: 'plato-01',
    name: { es: 'Croquetas de sargo', en: 'Seabream croquettes', pt: 'Croquetes de sargo' },
    desc: {
      es: 'Pesca de la costa, alioli de ajo quemado.',
      en: 'Coastal catch, burnt-garlic alioli.',
      pt: 'Pesca da costa, alioli de alho queimado.',
    },
    price: 890,
    demo: true,
  },
  {
    id: 'rabas',
    category: 'starters',
    name: { es: 'Rabas de calamar', en: 'Fried squid', pt: 'Lulas à milanesa' },
    desc: {
      es: 'Rebozadas livianas, limón de la huerta.',
      en: 'Light batter, garden lemon.',
      pt: 'Empanado leve, limão da horta.',
    },
    price: 980,
    demo: true,
  },
  {
    id: 'ceviche',
    category: 'starters',
    name: { es: 'Ceviche del día', en: 'Catch ceviche', pt: 'Ceviche do dia' },
    desc: {
      es: 'Leche de tigre, choclo, batata morada.',
      en: 'Tiger milk, corn, purple potato.',
      pt: 'Leite de tigre, milho, batata-roxa.',
    },
    price: 1290,
    demo: true,
  },
  {
    id: 'ostras',
    category: 'starters',
    name: { es: 'Ostras del Rocha', en: 'Rocha oysters', pt: 'Ostras de Rocha' },
    desc: {
      es: 'Media docena, mignonette de cava.',
      en: 'Half dozen, cava mignonette.',
      pt: 'Meia dúzia, mignonette de cava.',
    },
    price: 1450,
    demo: true,
  },
  {
    id: 'pulpo',
    category: 'grill',
    photo: 'plato-02',
    name: { es: 'Pulpo a la brasa', en: 'Grilled octopus', pt: 'Polvo na brasa' },
    desc: {
      es: 'Papas arrugadas, pimentón y fuego lento.',
      en: 'Wrinkled potatoes, paprika, slow fire.',
      pt: 'Batatas arrugadas, pimentão e fogo lento.',
    },
    price: 1890,
    demo: true,
  },
  {
    id: 'entrecot',
    category: 'grill',
    name: { es: 'Entrecot de campo', en: 'Grass-fed ribeye', pt: 'Entrecôte de campo' },
    desc: {
      es: 'Al hierro, chimichurri de perejil salvaje.',
      en: 'On the iron, wild-parsley chimichurri.',
      pt: 'No ferro, chimichurri de salsa brava.',
    },
    price: 2100,
    demo: true,
  },
  {
    id: 'pollo',
    category: 'grill',
    name: { es: 'Pollo al disco', en: 'Disc-pan chicken', pt: 'Frango no disco' },
    desc: {
      es: 'Verduras de estación, jugo de asado.',
      en: 'Seasonal vegetables, roast juices.',
      pt: 'Legumes da estação, suco de assado.',
    },
    price: 1560,
    demo: true,
  },
  {
    id: 'huerta',
    category: 'grill',
    name: { es: 'Verduras de huerta', en: 'Garden vegetables', pt: 'Legumes da horta' },
    desc: {
      es: 'Brasa, ricotta ahumada y aceite de oliva.',
      en: 'Embers, smoked ricotta, olive oil.',
      pt: 'Brasa, ricota defumada e azeite.',
    },
    price: 980,
    demo: true,
  },
  {
    id: 'pesca',
    category: 'sea',
    photo: 'plato-03',
    name: { es: 'Pesca del día al hierro', en: 'Catch of the day on iron', pt: 'Pesca do dia no ferro' },
    desc: {
      es: 'Lo que entra con la marea, limón y sal.',
      en: 'Whatever the tide brings, lemon and salt.',
      pt: 'O que a maré trouxer, limão e sal.',
    },
    price: 1750,
    demo: true,
  },
  {
    id: 'spaghetti',
    category: 'sea',
    name: { es: 'Spaghetti ai frutti di mare', en: 'Seafood spaghetti', pt: 'Spaghetti ai frutti di mare' },
    desc: {
      es: 'Calamar, mejillón, ajo y perejil.',
      en: 'Squid, mussel, garlic and parsley.',
      pt: 'Lula, mexilhão, alho e salsa.',
    },
    price: 1680,
    demo: true,
  },
  {
    id: 'arroz',
    category: 'sea',
    name: { es: 'Arroz caldoso de mariscos', en: 'Brothy seafood rice', pt: 'Arroz caldoso de mariscos' },
    desc: {
      es: 'Fondo de pescado, azafrán, almejas.',
      en: 'Fish stock, saffron, clams.',
      pt: 'Fundo de peixe, açafrão, amêijoas.',
    },
    price: 1720,
    demo: true,
  },
  {
    id: 'mejillones',
    category: 'sea',
    name: { es: 'Mejillones al vino blanco', en: 'Mussels in white wine', pt: 'Mexilhões ao vinho branco' },
    desc: {
      es: 'Pan de masa madre para el jugo.',
      en: 'Sourdough for the broth.',
      pt: 'Pão de fermentação natural para o suco.',
    },
    price: 1320,
    demo: true,
  },
  {
    id: 'flan',
    category: 'sweets',
    name: { es: 'Flan de dulce de leche', en: 'Dulce de leche flan', pt: 'Pudim de doce de leite' },
    desc: {
      es: 'Crema y un poco de sal marina.',
      en: 'Cream and a pinch of sea salt.',
      pt: 'Creme e uma pitada de sal marinho.',
    },
    price: 690,
    demo: true,
  },
  {
    id: 'tiramisu',
    category: 'sweets',
    name: { es: 'Tiramisú de la casa', en: 'House tiramisu', pt: 'Tiramisu da casa' },
    desc: {
      es: 'Café de olla y cacao amargo.',
      en: 'Pot coffee and bitter cacao.',
      pt: 'Café de panela e cacau amargo.',
    },
    price: 740,
    demo: true,
  },
  {
    id: 'fruta',
    category: 'sweets',
    name: { es: 'Fruta asada con helado', en: 'Roasted fruit and ice cream', pt: 'Fruta assada com sorvete' },
    desc: {
      es: 'Durazno o higo, según el árbol.',
      en: 'Peach or fig, according to the tree.',
      pt: 'Pêssego ou figo, conforme a árvore.',
    },
    price: 720,
    demo: true,
  },
  {
    id: 'clerico',
    category: 'drinks',
    name: { es: 'Clericó de sunset', en: 'Sunset clericó', pt: 'Clericó do pôr do sol' },
    desc: {
      es: 'Vino blanco, frutas y un hielo largo.',
      en: 'White wine, fruit, a long ice.',
      pt: 'Vinho branco, frutas e gelo longo.',
    },
    price: 480,
    demo: true,
  },
  {
    id: 'negroni',
    category: 'drinks',
    name: { es: 'Negroni de la costa', en: 'Coast negroni', pt: 'Negroni da costa' },
    desc: {
      es: 'Vermú local, naranja quemada.',
      en: 'Local vermouth, burnt orange.',
      pt: 'Vermute local, laranja queimada.',
    },
    price: 620,
    demo: true,
  },
  {
    id: 'gin',
    category: 'drinks',
    name: { es: 'Gin tónica de cactus', en: 'Cactus gin tonic', pt: 'Gin tônica de cacto' },
    desc: {
      es: 'Pepino, enebro y una pizca de sal.',
      en: 'Cucumber, juniper, a pinch of salt.',
      pt: 'Pepino, zimbro e uma pitada de sal.',
    },
    price: 590,
    demo: true,
  },
  {
    id: 'vino',
    category: 'drinks',
    name: { es: 'Vino de la casa', en: 'House wine', pt: 'Vinho da casa' },
    desc: {
      es: 'Tinto o blanco, copa o botella.',
      en: 'Red or white, glass or bottle.',
      pt: 'Tinto ou branco, taça ou garrafa.',
    },
    price: 420,
    demo: true,
  },
]

export function formatPrice(price: number, lang: string) {
  const locale = lang.startsWith('en') ? 'en-US' : lang.startsWith('pt') ? 'pt-BR' : 'es-UY'
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'UYU',
    maximumFractionDigits: 0,
  }).format(price)
}
