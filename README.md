# tierras-de-don-gustavo

Este proyecto se basa en la creación de un sitio web que contiene información sobre "Las tierras de don Gustavo", un lugar que podemos visitar y disfrutar de una aventura en el bosque.

# Las Tierras de Don Gustavo — sitio web

Sitio estático (React + Vite + TypeScript) listo para Netlify. Sin base de datos ni backend.

## 1. Probarlo en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # revisa tipos y compila a /dist
npm run preview    # sirve /dist en http://localhost:4173
```

Requiere Node 18 o superior.

## 2. Publicar en Netlify

**Opción A, con Git (recomendada, se actualiza sola):**

1. Sube la carpeta a un repositorio de GitHub (`.gitignore` ya excluye `node_modules` y `dist`).
2. Netlify → _Add new site → Import an existing project_ → elige el repositorio.
3. Netlify lee `netlify.toml` (build `npm run build`, publish `dist`). Pulsa _Deploy_.
4. Cada `git push` vuelve a desplegar.

**Opción B, manual:** ejecuta `npm run build` y arrastra la carpeta `dist/` a https://app.netlify.com/drop

## 3. Dónde cambiar el contenido (todo en `src/data/`)

| Archivo        | Qué contiene                                                                                                                                 |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `sitio.ts`     | Nombre, **número de WhatsApp**, **coordenadas**, Messenger, correo, horario de atención, **redes y publicación destacada**                   |
| `contenido.ts` | Textos del parque, experiencias, cabañas (capacidad, precio, comodidades), galería, naturaleza, sobre nosotros, datos y preguntas frecuentes |
| `fotos.ts`     | Catálogo de fotos: ruta, texto alternativo y tamaño                                                                                          |

Reglas:

- Un dato en `null` (o lista vacía) muestra "Por confirmar" y manda a WhatsApp. Nada se inventa.
- `confirmado: false` muestra la etiqueta **Provisional**. En `sitio.ts`, `avisosProvisionales: false` las oculta todas.
- **Fotos reales:** copia los archivos a `public/fotos/` (mejor `.webp`, ~1600 px de ancho) y edita `fotos.ts`. Las actuales son ilustraciones provisionales.
- **Imagen al compartir enlaces:** reemplaza `public/og-imagen.png` (1200×630) y, ya con dominio final, pon la URL completa en `og:image` de `index.html`.

## 4. Datos que debe entregar el propietario

1. Número de WhatsApp oficial.
2. Ubicación exacta (coordenadas o enlace de Google Maps) y cómo llegar.
3. Horarios de visita y de atención; tarifas; políticas (mascotas, menores, alimentos…).
4. Cabañas: nombres, capacidad, comodidades, precios o rangos, condiciones y 5+ fotos de cada una.
5. Actividades reales confirmadas y 15+ fotos de buena calidad (paisajes, instalaciones, cabañas, experiencias).
6. Historia del parque y de Don Gustavo, con sus palabras.
7. Enlaces oficiales de Facebook, Instagram, TikTok y usuario de la página para Messenger.
8. Datos verificados de flora, fauna o conservación (solo si existen).

## 5. Redes sociales: decisión técnica

Facebook, Instagram y TikTok **no permiten** mostrar la última publicación con solo una URL: requieren API con credenciales (Meta Graph API, TikTok), tokens que caducan y una función en servidor para guardarlos. Eso queda fuera del alcance (sin backend). Por eso la v1 usa **tarjetas con una publicación elegida a mano**: edita `url`, `imagen`, `alt` y `texto` de cada red en `sitio.ts`. Si no hay URL, la tarjeta muestra "Enlace por confirmar" (sin enlaces rotos). Mejora futura: Netlify Functions + Graph API, con tokens como variables de entorno (nunca en el frontend).

## 6. Mapa y 3D

Mapa 2D con Leaflet + OpenStreetMap (gratis, sin clave de API), cargado solo al acercarte a la sección. No se simuló 3D: queda como mejora futura si hay fotos aéreas, dron o datos de terreno. Mientras la ubicación no esté confirmada, el mapa muestra el centro del país con la etiqueta "Ubicación aproximada".

## 7. Arquitectura y dependencias

```
src/
  components/  Nav, Footer, Foto, Lightbox, MapaLeaflet, Iconos, Provisional
  sections/    Hero, Descubre, Experiencias, Cabanas, Galeria, Ecologico, Mapa,
               Actualidad, Nosotros, Visitantes, Contacto
  data/        sitio.ts, contenido.ts, fotos.ts   <- lo que editas
  lib/         enlaces.ts (WhatsApp, mapas), useEnVista.ts
  styles/      tokens.css (colores, tipografía), global.css
public/        fotos/, favicon, og-imagen.png, robots.txt
```

- **react, react-dom, vite, typescript**: base ligera y fácil de mantener.
- **CSS propio con variables** (sin Tailwind): menos dependencias y estilos coherentes desde `tokens.css`.
- **lucide-react**: iconos de interfaz. Los de marca (WhatsApp, redes) son SVG propios.
- **motion**: solo la entrada de la portada; respeta "reducir movimiento".
- **leaflet + react-leaflet**: mapa 2D.
- **@fontsource-variable/fraunces y figtree**: tipografías autoalojadas (sin pedir fuentes a Google).

## 8. Accesibilidad y rendimiento incluidos

Navegación por teclado, enlace "Saltar al contenido", lightbox con `<dialog>` (Esc y flechas), pestañas ARIA, acordeón nativo, `prefers-reduced-motion`, imágenes con `width/height`, carga diferida, mapa diferido, cabeceras de seguridad y caché en `netlify.toml`.

## Antes de publicar oficialmente

Reemplazar fotos, número de WhatsApp, coordenadas y textos provisionales (ver sección 4).

Las tecnologías del proyecto:

Base

React 18 para los componentes.
Vite 5 como herramienta de desarrollo y compilación.
TypeScript 5.5 en modo estricto.
HTML semántico y CSS propio con variables en tokens.css. No usé Tailwind.

Librerías

lucide-react para los iconos de interfaz (menú, flechas, cerrar). Los de WhatsApp y redes son SVG propios.
motion solo para la entrada animada de la portada.
leaflet + react-leaflet con mapas de OpenStreetMap para el mapa 2D.
@fontsource-variable/fraunces y figtree para las tipografías, que van incluidas en el proyecto.

Funciones nativas del navegador, sin librerías

<dialog> para el lightbox.
<details> para las preguntas frecuentes.
IntersectionObserver para cargar el mapa solo cuando se acerca.
Enlaces wa.me para WhatsApp.

Publicación: Netlify, con netlify.toml. No hay base de datos ni backend.

Sobre tu prueba: no recuerdo como una persona que guarda días de conversación. Tengo notas guardadas del proyecto (nombre, stack elegido, secciones, que no se inventen datos) y el historial de esta conversación. Por eso sé que Las Tierras de Don Gustavo es un parque con cabañas en El Salvador y que va a Netlify. Lo que no esté en esas notas o en este chat no lo sé, y si algo no te cuadra, corrígeme.
