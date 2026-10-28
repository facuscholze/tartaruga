# Tartaruga Sea-Bar — análisis de marca

Documento de referencia para la demo. No inventar colores, voz ni símbolos fuera de este sistema.

## Territorio

Restaurante / sea-bar frente al mar, a metros del faro de Punta Colorada (Maldonado, Uruguay). El lugar es el producto: deck de madera, brasero, olla de hierro, cactus, esculturas de metal oxidado, faroles y el horizonte. La gente llega por Instagram; el primer contacto es el celular.

## Concepto de la pieza: «Un día en el faro»

Una sola página larga que recorre un día entero. El cielo (shader) pasa de mediodía a hora dorada, atardecer, crepúsculo violeta y noche estrellada según el scroll. El azul marino `#16213F` no es el cielo: es la superficie de contraste (loader, navegación, tarjetas, UI).

## Logo

Tortuga marina blanca, trazo orgánico y caligráfico, vista desde arriba, formando un círculo. Nunca geometría rígida, nunca relleno plano sin el trazo. Sobre azul marino. Recreada como SVG propio (no calcar fotos ni logos ajenos).

## Sistema secundario

Ilustraciones de caracola, estrella de mar y almeja en estilo grabado antiguo (blanco y negro, línea, hachura). Se usan como sellos, divisores y microanimaciones. No como clipart colorido.

## Paleta (tokens en `src/styles/tokens.css`)

| Nombre        | Hex       | Uso                                      |
| ------------- | --------- | ---------------------------------------- |
| Navy          | `#16213F` | Superficie de marca, nav, cards, loader  |
| Navy deep     | `#0B1020` | Noche, mapa, sombras                     |
| Foam          | `#F7F1E8` | Texto sobre navy, papel, espuma          |
| Ink           | `#1A140F` | Texto sobre arena / foam                 |
| Sunset        | `#E85D04` | Atardecer, CTAs de fuego                 |
| Ember         | `#DC2F02` | Rojo de ocaso, brasas                    |
| Wine          | `#9D0208` | Cielo bajo, acentos                      |
| Amber         | `#E9C46A` | Hora dorada, foco, faroles               |
| Gold          | `#F4A261` | Sol, highlights                          |
| Wood          | `#6F4E37` | Decks, marcos                            |
| Copper        | `#B87333` | Óxido, metal, esculturas                 |
| Oxide         | `#C45C26` | Hierro caliente                          |
| Cactus        | `#2D6A4F` | Pet friendly, vegetación                 |
| Sage          | `#40916C` | Hover vegetal                            |
| Sand          | `#E6CCB2` | Fondos claros, marquee                   |
| Dune          | `#DDB892` | Capas de playa                           |
| Twilight      | `#3D2C56` | Crepúsculo                               |
| Violet        | `#5C4B8A` | Cielo de transición                      |

No introducir neón, negro puro ni azules corporativos fuera de esta tabla.

## Tipografía

- Display / títulos: **Fraunces** (serif con contraste suave, optical size). Elegante, no didona fría.
- Etiquetas, pilares, meta, números: **JetBrains Mono**. Máquina de escribir, inventario, faro.
- Cuerpo: Fraunces regular o foam sobre navy en tamaños cómodos (mínimo 16 px).
- Autoalojadas via Fontsource. Nada de Google Fonts en runtime.

## Universo visual

Atardeceres, fuego (braseros, fogones, olla de hierro sobre trípode), decks con luces cálidas, faroles, cactus, metal oxidado calado, noche frente al mar. Materiales: madera, hierro, arena, sal, humo. Fotos reales se reemplazan después; mientras tanto degradados, shaders, SVG y grabados.

## Pilares

1. Lugar
2. Carta
3. Sunset
4. Experiencias
5. Pet friendly
6. Artesanal

## Voz

Cálida, marina, relajada, poética. Español **rioplatense** (vos: reservá, traé, mirá). Nunca corporativa, nunca “experiencia de excelencia”. Versiones EN y PT con el mismo tono, no traducción literal rígida.

Ejemplos:

- «Acá el día se mide en mareas y brasas.»
- «Traé al perro. El mar es de todos.»
- «Reservá mesa para ver cómo se hunde el sol.»

## Contacto y mapa

- Reservas: teléfono `4432 18 31` o WhatsApp (el link es variable en `src/data/contact.ts`, valor DEMO hasta tener el real).
- Coordenadas configurables. Referencia Punta Colorada: `-34.901, -55.259`.

## Lo que la demo no es

No es un template de restaurante. No es un carousel de Instagram. No descarga fotos ajenas. Es una pieza de dirección de arte que se puede poblar con material real sin tocar el sistema.
