import type { Copy } from '@/lib/localized'

export const hours = {
  demo: true,
  lines: [
    {
      days: { es: 'Todos los días', en: 'Every day', pt: 'Todos os dias' } satisfies Copy,
      time: { es: '10:00 – 00:00', en: '10:00 – 00:00', pt: '10:00 – 00:00' } satisfies Copy,
    },
  ],
  note: {
    es: 'Horario DEMO — a confirmar con el local.',
    en: 'DEMO hours — confirm with the restaurant.',
    pt: 'Horário DEMO — confirmar com o restaurante.',
  } satisfies Copy,
}
