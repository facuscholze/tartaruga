type MarkProps = { className?: string }

export function ShellMark({ className = 'h-16 w-16' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 70c18-2 28-16 28-32 0-18-12-30-28-34C24 8 12 20 12 38c0 16 10 30 28 32z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M40 70C28 52 24 36 28 18M40 70c0-18 4-34 12-50M40 70c8-14 18-28 22-44M22 42c10 2 18 2 28 0M18 32c14 4 28 4 40 0"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function StarfishMark({ className = 'h-16 w-16' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M40 8l6 22 22 2-18 14 6 22-16-12-16 12 6-22-18-14 22-2z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M40 18v22M28 30l12 10 12-10M32 52l8-12 8 12"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function ClamMark({ className = 'h-16 w-16' }: MarkProps) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" aria-hidden>
      <path
        d="M12 44c4-22 16-32 28-32s24 10 28 32c-6 14-18 22-28 22S18 58 12 44z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M16 42h48M20 34c6 4 12 6 20 6s14-2 20-6M24 50c5 4 10 6 16 6s11-2 16-6"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  )
}
