export type Lang = 'es' | 'en' | 'pt'
export type Copy = Record<Lang, string>

export function pick(copy: Copy, lang: string) {
  if (lang.startsWith('en')) return copy.en
  if (lang.startsWith('pt')) return copy.pt
  return copy.es
}
