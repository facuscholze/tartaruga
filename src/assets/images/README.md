# Fotos reales — guía de nombres

Dejá acá los archivos con estos **stems**. Si existe un `.jpg` o `.webp` gana sobre el `.png` de placeholder. El código los resuelve en `src/lib/media.ts`.

| Stem              | Uso                         | Ratio sugerido | Peso máx. |
| ----------------- | --------------------------- | -------------- | --------- |
| `hero-atardecer`  | Hero / video poster         | 16:9, ≥1600 px | 400 KB    |
| `fuego`           | Brasero / fogón             | 3:4            | 300 KB    |
| `plato-01`        | Plato carta                 | 1:1            | 180 KB    |
| `plato-02`        | Plato carta                 | 1:1            | 180 KB    |
| `plato-03`        | Plato carta                 | 1:1            | 180 KB    |
| `deck`            | Deck de madera              | 4:3            | 300 KB    |
| `faro`            | Faro de Punta Colorada      | 3:4            | 300 KB    |
| `mascota`         | Perro en el deck            | 4:3            | 250 KB    |

Video opcional: `public/video/hero.mp4` (muted, loop, ≤8 s, ≤1.5 MB). Si no está, el hero usa un loop de canvas + este poster.

OG: `public/og.png` 1200×630.

Alt descriptivo, sin “imagen de”. Ejemplo: “Deck de madera frente al faro al atardecer”.
