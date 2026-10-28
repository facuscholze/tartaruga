export function readDemoFlag() {
  if (typeof window === 'undefined') return false
  const q = new URLSearchParams(window.location.search).get('demo') === '1'
  const h = window.location.hash.replace('#', '') === 'propuesta'
  return q || h
}
