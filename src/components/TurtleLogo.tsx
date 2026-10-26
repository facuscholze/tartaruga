type TurtleLogoProps = {
  className?: string
  title?: string
  decorative?: boolean
}

/** Tortuga marina caligráfica en círculo — trazo listo para DrawSVG. */
export function TurtleLogo({
  className = 'h-24 w-24',
  title = 'Tartaruga Sea-Bar',
  decorative = false,
}: TurtleLogoProps) {
  const labelled = !decorative
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      role={labelled ? 'img' : 'presentation'}
      aria-hidden={decorative ? true : undefined}
      aria-label={labelled ? title : undefined}
    >
      {labelled ? <title>{title}</title> : null}
      <circle
        className="turtle-stroke turtle-ring"
        cx="120"
        cy="120"
        r="104"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        className="turtle-stroke turtle-shell"
        d="M120 58c-28 4-50 28-54 56 2 32 24 58 54 64 30-6 52-32 54-64-4-28-26-52-54-56z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        className="turtle-stroke turtle-scutes"
        d="M120 70v96M86 92c12 8 22 10 34 10s22-2 34-10M84 128c14 6 24 8 36 8s22-2 36-8M96 86c-6 18-8 34-6 52M144 86c6 18 8 34 6 52M104 78c10 6 16 8 16 8s6-2 16-8M100 154c8 8 14 12 20 14 6-2 12-6 20-14"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        className="turtle-stroke turtle-head"
        d="M108 62c2-18 8-28 12-30 4 2 10 12 12 30"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        className="turtle-stroke turtle-eye"
        cx="126"
        cy="44"
        r="2.2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        className="turtle-stroke turtle-flipper-fl"
        d="M78 86c-22-8-38-4-48 10 14 8 30 10 46 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="turtle-stroke turtle-flipper-fr"
        d="M162 86c22-8 38-4 48 10-14 8-30 10-46 4"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="turtle-stroke turtle-flipper-bl"
        d="M86 168c-18 12-24 28-18 42 16-6 32-18 40-32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="turtle-stroke turtle-flipper-br"
        d="M154 168c18 12 24 28 18 42-16-6-32-18-40-32"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="turtle-stroke turtle-tail"
        d="M114 178c2 10 4 16 6 20 2-4 4-10 6-20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
