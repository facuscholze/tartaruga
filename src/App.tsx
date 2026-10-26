import { TurtleLogo } from '@/components/TurtleLogo'
import { contact } from '@/data/contact'

export default function App() {
  return (
    <div className="relative min-h-dvh bg-navy text-foam">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <main
        id="contenido"
        className="mx-auto flex min-h-dvh max-w-3xl flex-col items-center justify-center px-6 py-16 text-center"
      >
        <TurtleLogo className="mb-8 h-28 w-28 text-foam" />
        <p className="section-kicker mb-4">{contact.place}</p>
        <h1 className="font-display text-4xl leading-tight tracking-tight text-balance sm:text-6xl">
          Tartaruga Sea-Bar
        </h1>
        <p className="mt-6 max-w-md font-display text-lg text-sand italic">
          Un día en el faro. Del mediodía a las estrellas, frente al mar de Punta
          Colorada.
        </p>
        <p className="mt-8 font-mono text-xs tracking-[0.2em] text-amber uppercase">
          Demo · reservas {contact.phoneDisplay}
        </p>
      </main>
    </div>
  )
}
