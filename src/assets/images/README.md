# Fotos reales — guía de nombres

No hay fotos en el repo (ni de Instagram ni hotlink). La demo usa shaders, degradados y SVG. Para reemplazar placeholders, dejá archivos en esta carpeta con estos nombres y actualizá las referencias en `src/data/gallery.ts`.

| Archivo                 | Uso                         | Ratio sugerido | Peso máx. |
| ----------------------- | --------------------------- | -------------- | --------- |
| `hero-sunset.jpg`       | Hero / atardecer            | 3:2, ≥1600 px  | 400 KB    |
| `lugar-deck.jpg`        | Deck de madera              | 4:3            | 300 KB    |
| `lugar-faro.jpg`        | Faro de Punta Colorada      | 3:4            | 300 KB    |
| `lugar-mar.jpg`         | Horizonte / mar             | 16:9           | 300 KB    |
| `fuego-brasero.jpg`     | Brasero / fogón             | 4:5            | 300 KB    |
| `fuego-olla.jpg`        | Olla de hierro              | 4:5            | 300 KB    |
| `exp-sunset.jpg`        | Experiencia sunset          | 4:5            | 300 KB    |
| `exp-brunch.jpg`        | Brunch                      | 4:5            | 300 KB    |
| `exp-fuego.jpg`         | Noches de fuego             | 4:5            | 300 KB    |
| `exp-eventos.jpg`       | Eventos                     | 4:5            | 300 KB    |
| `pet-deck.jpg`          | Perro en el deck            | 4:3            | 250 KB    |
| `artesanal-metal.jpg`   | Escultura de metal          | 4:3            | 250 KB    |
| `galeria-01.jpg` … `08` | Carrusel                    | 4:5 o 3:2      | 250 KB    |
| `carta-*.jpg`           | Platos (opcional)           | 1:1            | 180 KB    |

Exportar AVIF y WebP (vite-imagetools lo hace al importar):

```ts
import hero from '@/assets/images/hero-sunset.jpg?w=800;1440&format=avif;webp'
```

Alt descriptivo en español, sin “imagen de”. Ejemplo: “Deck de madera frente al faro al atardecer”.
