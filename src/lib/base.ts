export const BASE = import.meta.env.BASE_URL || '/'

export function withBase(path: string) {
  const clean = path.replace(/^\//, '')
  if (BASE === '/') return `/${clean}`
  return `${BASE}${clean}`
}
