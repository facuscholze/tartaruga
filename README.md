# Tartaruga Sea-Bar — Un día en el faro

Demo comercial de una sola página para **Tartaruga Sea-Bar**, sea-bar frente al Faro de Punta Colorada (Maldonado, Uruguay). El cielo recorre un día entero con el scroll: mediodía, hora dorada, atardecer, crepúsculo y noche.

**Demo:** [https://facuscholze.github.io/tartaruga/](https://facuscholze.github.io/tartaruga/)

> En GitHub: **Settings → Pages → Source = GitHub Actions**. El workflow publica en cada push a `main`.

## Comandos

```bash
npm install
npm run dev          # http://localhost:5173/tartaruga/
npm run test         # Vitest
npm run lint
npm run build
npm run preview      # http://localhost:4173/tartaruga/
npm run e2e          # Playwright (mobile 375)
npm run lhci         # Lighthouse CI
```

## Cómo reemplazar contenido DEMO

| Qué              | Dónde                                         |
| ---------------- | --------------------------------------------- |
| WhatsApp         | `src/data/contact.ts` → `whatsapp`            |
| Coordenadas      | `src/data/contact.ts` → `coords`              |
| Teléfono         | `src/data/contact.ts`                           |
| Carta y precios  | `src/data/menu.ts`                              |
| Horarios         | `src/data/hours.ts`                             |
| Galería          | `src/data/gallery.ts` + fotos en `src/assets/images/` |
| Promos           | `src/data/benefits.ts`                          |
| Textos ES/EN/PT  | `src/i18n/locales/`                             |
| Fotos            | ver `src/assets/images/README.md`               |

Todo lo marcado **DEMO** es placeholder para el dueño.

## Stack

Vite, React, TypeScript, Tailwind v4, GSAP, Motion, Lenis, Three.js / R3F, tsParticles, Lottie, Swiper, Leaflet, i18next, Howler, PWA.

## Marca

Paleta y voz en `docs/brand-analysis.md`. Tokens en `src/styles/tokens.css`. No inventar colores fuera de ahí.
