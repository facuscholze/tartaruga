/** Paleta canónica — debe coincidir con `src/styles/tokens.css`. */
export const colors = {
  navy: '#16213F',
  navyDeep: '#0B1020',
  foam: '#F7F1E8',
  ink: '#1A140F',
  sunset: '#E85D04',
  ember: '#DC2F02',
  wine: '#9D0208',
  amber: '#E9C46A',
  gold: '#F4A261',
  wood: '#6F4E37',
  copper: '#B87333',
  oxide: '#C45C26',
  cactus: '#2D6A4F',
  sage: '#40916C',
  sand: '#E6CCB2',
  dune: '#DDB892',
  twilight: '#3D2C56',
  violet: '#5C4B8A',
  noon: '#87B8D9',
} as const

export type ColorName = keyof typeof colors
