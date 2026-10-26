export type TimeMode = 'auto' | 'noon' | 'sunset' | 'night'

export const dayState: {
  progress: number
  mode: TimeMode
} = {
  progress: 0,
  mode: 'auto',
}

export function modeToProgress(mode: TimeMode) {
  if (mode === 'noon') return 0.06
  if (mode === 'sunset') return 0.52
  if (mode === 'night') return 0.92
  return dayState.progress
}

export function effectiveProgress() {
  return modeToProgress(dayState.mode)
}

export function setScrollProgress(scroll: number, limit: number) {
  const max = Math.max(1, limit)
  dayState.progress = Math.min(1, Math.max(0, scroll / max))
  if (typeof document !== 'undefined') {
    document.documentElement.style.setProperty(
      '--day-progress',
      String(effectiveProgress()),
    )
  }
}
