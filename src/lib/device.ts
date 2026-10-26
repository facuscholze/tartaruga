export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function hasFinePointer() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

export function hasWebGL() {
  if (typeof document === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function isLowPowerDevice() {
  if (typeof navigator === 'undefined') return true
  const nav = navigator as Navigator & {
    deviceMemory?: number
    connection?: { saveData?: boolean; effectiveType?: string }
  }
  if (nav.connection?.saveData) return true
  if (nav.deviceMemory !== undefined && nav.deviceMemory <= 4) return true
  if ((navigator.hardwareConcurrency ?? 8) <= 4) return true
  if (nav.connection?.effectiveType && /2g/.test(nav.connection.effectiveType)) return true
  return false
}
