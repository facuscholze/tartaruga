import type { Copy } from '@/lib/localized'

export const proposal = {
  benefits: [
    {
      id: 'wa',
      metric: { es: '+ reservas por WhatsApp', en: '+ WhatsApp bookings', pt: '+ reservas no WhatsApp' },
      lead: {
        es: 'Un toque y el mensaje ya está escrito. Sin DM perdido en el feed.',
        en: 'One tap and the message is written. No lost DMs in the feed.',
        pt: 'Um toque e a mensagem já está escrita. Sem DM perdido no feed.',
      },
    },
    {
      id: 'ig',
      metric: { es: 'Menos algoritmo', en: 'Less algorithm', pt: 'Menos algoritmo' },
      lead: {
        es: 'Instagram muestra el atardecer. La web sienta a la mesa, aunque el feed no empuje.',
        en: 'Instagram shows the sunset. The site seats the table, even if the feed does not push.',
        pt: 'O Instagram mostra o pôr do sol. O site senta à mesa, mesmo se o feed não empurrar.',
      },
    },
    {
      id: 'google',
      metric: { es: 'Aparecer en Google', en: 'Show up on Google', pt: 'Aparecer no Google' },
      lead: {
        es: 'Quien busca “restaurante Punta Colorada” o “atardecer Punta Colorada” llega acá.',
        en: 'Anyone searching “Punta Colorada restaurant” or “Punta Colorada sunset” lands here.',
        pt: 'Quem busca “restaurante Punta Colorada” ou “pôr do sol Punta Colorada” chega aqui.',
      },
    },
  ],
  includes: [
    { es: 'Web de una página, lista para Instagram y Google', en: 'One-page site, ready for Instagram and Google', pt: 'Site de uma página, pronto para Instagram e Google' },
    { es: 'Reservas por WhatsApp y teléfono, en un toque', en: 'WhatsApp and phone bookings, in one tap', pt: 'Reservas por WhatsApp e telefone, em um toque' },
    { es: 'Carta, horarios y fotos editables sin tocar código de más', en: 'Menu, hours and photos editable without extra code', pt: 'Cardápio, horários e fotos editáveis sem código extra' },
    { es: 'Tres idiomas: español, inglés y portugués', en: 'Three languages: Spanish, English and Portuguese', pt: 'Três idiomas: espanhol, inglês e português' },
  ] satisfies Copy[],
  metrics: [
    { id: 'visits', label: { es: 'Visitas (30 días)', en: 'Visits (30 days)', pt: 'Visitas (30 dias)' }, value: '3.4k' },
    { id: 'cta', label: { es: 'Clics en Reservar', en: 'Reserve clicks', pt: 'Cliques em Reservar' }, value: '186' },
    { id: 'wa', label: { es: 'WhatsApp abiertos', en: 'WhatsApp opens', pt: 'WhatsApp abertos' }, value: '91' },
  ],
}
