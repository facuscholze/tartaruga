import { contact } from '@/data/contact'
import { hours } from '@/data/hours'
import { site } from '@/data/site'

export function restaurantJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: contact.name,
    image: site.ogImage,
    url: site.url,
    telephone: contact.phoneTel,
    servesCuisine: ['Seafood', 'Uruguayan'],
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Central esq. Rambla',
      addressLocality: 'Punta Colorada',
      addressRegion: 'Maldonado',
      addressCountry: 'UY',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: contact.coords.lat,
      longitude: contact.coords.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${contact.coords.lat},${contact.coords.lng}`,
    sameAs: [contact.instagram],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '10:00',
      closes: '00:00',
      description: hours.note.es,
    },
  }
}
