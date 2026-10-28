const modules = import.meta.glob('../assets/images/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const rank = (file: string) => {
  if (file.endsWith('.avif')) return 0
  if (file.endsWith('.webp')) return 1
  if (file.endsWith('.jpg') || file.endsWith('.jpeg')) return 2
  return 3
}

const byStem = new Map<string, string>()

Object.entries(modules)
  .sort((a, b) => rank(a[0]) - rank(b[0]))
  .forEach(([path, url]) => {
    const base = path.split('/').pop() ?? ''
    const stem = base.replace(/\.(png|jpe?g|webp|avif)$/i, '')
    if (!byStem.has(stem)) byStem.set(stem, url)
  })

/** Resuelve `hero-atardecer`, `plato-01`, etc. Prefiere jpg/webp reales si existen. */
export function imageSrc(stem: string) {
  return byStem.get(stem)
}

export function hasImage(stem: string) {
  return byStem.has(stem)
}
