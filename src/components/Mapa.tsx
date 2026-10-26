import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import L from 'leaflet'
import { contact, mapsDirectionsUrl, mapsSearchUrl } from '@/data/contact'
import { MagneticLink } from '@/components/MagneticButton'
import 'leaflet/dist/leaflet.css'

export default function Mapa() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const map = L.map(el, {
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    }).setView([contact.coords.lat, contact.coords.lng], 15)

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; OpenStreetMap &copy; CARTO',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map)

    const icon = L.divIcon({
      className: 'tartaruga-marker',
      html: '<div class="h-4 w-4 rounded-full bg-amber ring-4 ring-amber/30"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    })

    L.marker([contact.coords.lat, contact.coords.lng], {
      icon,
      title: contact.name,
      alt: contact.place,
    }).addTo(map)

    const onResize = () => map.invalidateSize()
    window.addEventListener('resize', onResize)
    const tmr = window.setTimeout(onResize, 400)

    return () => {
      window.clearTimeout(tmr)
      window.removeEventListener('resize', onResize)
      map.remove()
    }
  }, [])

  return (
    <section id="mapa" className="relative z-10 px-5 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker mb-4">{t('mapa.kicker')}</p>
        <h2 className="font-display text-4xl sm:text-5xl">{t('mapa.title')}</h2>
        <p className="mt-3 max-w-xl text-sand">{contact.address}</p>
        <div
          ref={ref}
          className="mt-8 h-[380px] overflow-hidden rounded-[1.8rem] border border-foam/10"
          role="region"
          aria-label={t('mapa.mapLabel')}
        />
        <div className="mt-6 flex flex-wrap gap-4">
          <MagneticLink href={mapsSearchUrl()} target="_blank" rel="noreferrer">
            {t('mapa.openMaps')}
          </MagneticLink>
          <MagneticLink
            href={mapsDirectionsUrl()}
            target="_blank"
            rel="noreferrer"
            className="bg-navy text-amber ring-1 ring-amber"
          >
            {t('mapa.directions')}
          </MagneticLink>
        </div>
      </div>
    </section>
  )
}
