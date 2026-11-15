# Las Tierras de Don Gustavo — versión 2.1

Rebuild de la página del ecoparque en Perquín, Morazán. Mantiene **React + TypeScript + Vite**, CSS propio y despliegue en Netlify. Sin librerías de animación, mapas adicionales ni base de datos.

## Abrir el proyecto en VS Code

```bash
npm install
npm run dev
```

Abre el enlace local que muestra Vite (por lo general `http://localhost:5173`).
Para comprobar la versión de publicación ejecuta `npm run build`, y opcionalmente `npm run preview`.

## Novedades de la versión 2.1

- **Menú flotante:** la barra permanece visible al desplazarse y se compacta después de bajar un poco. Resalta la sección actual. En celular se abre con el botón de menú.
- **Sección de redes:** el bloque verde ahora presenta Facebook, Instagram y TikTok con enlaces directos a tres publicaciones seleccionadas del proyecto anterior.
- **Sin feed automático:** las publicaciones no se actualizan solas, para evitar integrar APIs, credenciales o scripts de terceros. Los enlaces y usuarios se cambian en `src/datos.ts`.
- **Miniaturas livianas:** las tres imágenes de esta sección son ilustraciones heredadas del proyecto anterior y se encuentran en `public/fotos/publicaciones/`. No se presentan como fotos originales.

## ¿Dónde cambio cada cosa?

- `src/datos.ts`: teléfono, perfiles y enlaces a publicaciones, ubicación, precios, cabañas, preguntas y fotografías.
- `src/App.tsx`: navbar, portada, cabañas, redes, visita, mapa y pie.
- `src/Galeria.tsx`: filtros de fotografías y visor ampliado.
- `src/Foto.tsx`: imagen + respaldo si falta un archivo.
- `src/styles.css`: todo el diseño y la adaptación a móviles.

## Añadir las fotos reales

En `public/fotos/reales/README.md` está la lista de nombres exactos. Copia allí las fotos originales del parque, optimizadas en WebP. Después pon `mostrarFotosReales = true` en `src/datos.ts`. La galería, las tarjetas y la portada se actualizarán de una sola vez. Mientras no estén, se ven **ilustraciones identificadas como provisionales**, no fotografías inventadas.

## Mapa de Google

El mapa incrustado usa Google Maps. Los botones «Mapa» y «Satélite» cambian la vista. Sin clave utiliza un iframe básico; el modo satélite en ese iframe depende de la compatibilidad de Google. Para tener integración oficial más estable, crea una clave para **Maps Embed API**, limita la clave a tu dominio y añade en Netlify la variable `VITE_GOOGLE_MAPS_KEY` (o colócala localmente en un `.env` que no debes subir a Git). Los botones «Cómo llegar» y «Abrir vista satelital» siempre abren Google Maps, sin clave.

## Antes de ponerlo público

1. Confirmar la localización y el acceso: las coordenadas se conservaron del proyecto original.
2. Confirmar las tarifas de cabañas y qué incluyen. Los $50 son datos del proyecto anterior, no garantías de precio.
3. Confirmar el coste de la visita diurna: el original mencionaba $40 sin unidad y por eso no se anuncia como tarifa fija.
4. Confirmar que el horario publicado corresponde efectivamente a atención y visitas, y verificar políticas de mascotas.
5. Sustituir las ilustraciones, el icono y la imagen de compartir por fotos/identidad oficiales, con permiso.

## Netlify

Netlify reconoce el archivo `netlify.toml`: comando `npm run build`, carpeta publicada `dist`. Lo recomendable es publicar esta versión primero como vista previa o en otra rama; no reemplaza tu sitio actual automáticamente.
