# Tartaruga Sea-Bar – Demo web

## Qué es
Web demo de una sola página para Tartaruga Sea-Bar (Faro de Punta Colorada, Uruguay).
Concepto: "Un día en el Faro" (el cielo va de día a noche con el scroll).
Se publica en GitHub Pages.

Contexto de marca: @docs/brand-analysis.md

## Comandos
- `npm install` instala dependencias
- `npm run dev` servidor local
- `npm run build` build de producción
- `npm run lint` y `npm run test` antes de cada commit
- `npm run e2e` pruebas Playwright

## Stack
Vite, React, TypeScript, Tailwind v4, GSAP (+ plugins), Motion, Lenis,
Three.js/R3F, tsParticles, Lottie, Swiper, MapLibre, i18next, Howler,
vite-plugin-pwa.

## Estructura
- `src/components/` UI por sección
- `src/scenes/` Three.js y shaders
- `src/data/` carta, horarios y textos de ejemplo (todo marcado DEMO)
- `src/i18n/` es, en, pt
- `src/styles/tokens.css` colores y tipografías de marca
- `public/` assets estáticos

## Marca (no inventar colores fuera de tokens)
- Azul marino #16213F, blanco, naranjas/rojos de atardecer, ámbar, madera,
  óxido, verde cactus, arena.
- Etiquetas en monoespaciada; display en serif.
- Voz: cálida, marina, rioplatense, poética. Nunca corporativa.

## Reglas
- Una responsabilidad por librería. No sumar una nueva si otra ya cubre el caso.
- Un solo canvas 3D global; módulos pesados con lazy loading.
- Todo debe respetar `prefers-reduced-motion`.
- Presupuesto: Lighthouse móvil 90+ Performance, 100 Accessibility.
- Mobile first. Probar siempre a 375 px.
- Sin fotos tomadas de Instagram. Placeholders y SVG propios.
- Contenido editable solo desde `src/data/` e `src/i18n/`.

## Deploy
Push a `main` dispara GitHub Actions y publica en Pages.
`base` de Vite = nombre del repo.

## Flujo
Trabajar por fases, commit al cerrar cada una, mensajes claros.
Correr lint, test y build antes de cada commit. Si algo falla, arreglarlo antes de seguir.

## Nunca
- Subir secretos o claves.
- Hotlinkear imágenes externas.
- Dejar `console.log` ni código muerto.
- Romper la accesibilidad por una animación.
