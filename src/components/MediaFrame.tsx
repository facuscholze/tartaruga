import { imageSrc } from '@/lib/media'

export function MediaFrame({
  stem,
  alt,
  className = '',
  gradient,
}: {
  stem?: string
  alt: string
  className?: string
  gradient?: string
}) {
  const src = stem ? imageSrc(stem) : undefined
  if (src) {
    return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" />
  }
  return (
    <div
      className={className}
      style={{ background: gradient ?? 'linear-gradient(160deg, #E85D04, #16213F)' }}
      role="img"
      aria-label={alt}
    />
  )
}
