// Datos que se cambian con frecuencia: aquí, no repartidos por los componentes.
export const sitio = {
  nombre: 'Las Tierras de Don Gustavo',
  lugar: 'El Volcancillo, Perquín, Morazán',
  whatsapp: '50362138659',
  correo: 'lastierrasdedongustavo@gmail.com',
  horarioAtencion: 'Lunes a domingo · 8:00 a. m. a 6:00 p. m.',
  coordenadas: '13.979120600737167,-88.17253831320961',
  facebook: 'https://www.facebook.com/profile.php?id=61552948418470',
  instagram: 'https://www.instagram.com/tierrasdongustavo/',
  tiktok: 'https://www.tiktok.com/@lastierras_dongustavo_sv',
};

// Enlaces recuperados de la sección «Novedades» del sitio anterior.
// Son publicaciones seleccionadas, no un feed que se actualiza automáticamente.
export const publicaciones = [
  {
    id: 'facebook', nombre: 'Facebook', usuario: 'Las Tierras de Don Gustavo',
    perfil: sitio.facebook, imagen: 'facebook.webp',
    enlace: 'https://www.facebook.com/share/p/1Dg4PrpvJ6/',
  },
  {
    id: 'instagram', nombre: 'Instagram', usuario: '@tierrasdongustavo',
    perfil: sitio.instagram, imagen: 'instagram.webp',
    enlace: 'https://www.instagram.com/p/DaBMoovlejl/',
  },
  {
    id: 'tiktok', nombre: 'TikTok', usuario: '@lastierras_dongustavo_sv',
    perfil: sitio.tiktok, imagen: 'tiktok.webp',
    enlace: 'https://www.tiktok.com/@lastierras_dongustavo_sv/video/7610525329026731272',
  },
] as const;

// Cambia a true cuando hayas añadido las fotos de /public/fotos/reales/.
export const mostrarFotosReales = false;

type Imagen = { archivo: string; ejemplo: string; alt: string };
export const imagenes: Record<string, Imagen> = {
  portada: {
    archivo: 'portada.webp', ejemplo: 'portada.webp',
    alt: 'Entorno natural del ecoparque',
  },
  cabanaA: {
    archivo: 'cabana-a.webp', ejemplo: 'cabana-a.svg',
    alt: 'Cabaña tipo A rodeada de naturaleza',
  },
  cabanaB: {
    archivo: 'cabana-b.webp', ejemplo: 'cabana-b.svg',
    alt: 'Cabaña tipo B y su entorno',
  },
  bosque: {
    archivo: 'bosque.webp', ejemplo: 'bosque.svg',
    alt: 'Senderos y vegetación del ecoparque',
  },
  paisaje: {
    archivo: 'paisaje.webp', ejemplo: 'paisaje.svg',
    alt: 'Paisaje verde visto desde el ecoparque',
  },
  descanso: {
    archivo: 'descanso.webp', ejemplo: 'descanso.svg',
    alt: 'Espacios naturales para descansar',
  },
  paseo: {
    archivo: 'paseo.webp', ejemplo: 'paseo.svg',
    alt: 'Caminos para recorrer el parque',
  },
  detalle: {
    archivo: 'detalle.webp', ejemplo: 'detalle.svg',
    alt: 'Rincón de naturaleza y árboles',
  },
};

export type Cabana = {
  nombre: string;
  foto: string;
  capacidad: string;
  precio: string;
  detalles: string[];
};

export const cabanas: Cabana[] = [
  {
    nombre: 'Cabaña tipo A', foto: 'cabanaA', capacidad: '4 personas',
    precio: '$50', detalles: ['Baño privado', 'Camas'],
  },
  {
    nombre: 'Cabaña tipo B', foto: 'cabanaB', capacidad: '4 personas',
    precio: '$50', detalles: ['Baño privado', 'Camas'],
  },
];

export const galeria = [
  { foto: 'bosque', titulo: 'Entre árboles', categoria: 'Naturaleza' },
  { foto: 'cabanaA', titulo: 'Un lugar para quedarse', categoria: 'Cabañas' },
  { foto: 'paisaje', titulo: 'Aire libre', categoria: 'Paisajes' },
  { foto: 'descanso', titulo: 'Momentos de calma', categoria: 'Naturaleza' },
  { foto: 'cabanaB', titulo: 'Descanso en el parque', categoria: 'Cabañas' },
  { foto: 'paseo', titulo: 'Explorar sin prisa', categoria: 'Naturaleza' },
  { foto: 'detalle', titulo: 'El paisaje de cerca', categoria: 'Paisajes' },
];

export const preguntas = [
  {
    pregunta: '¿Cómo puedo reservar una cabaña?',
    respuesta: 'Escríbenos por WhatsApp e indica la fecha de llegada, de salida y cuántas personas se hospedarán. Te confirmaremos la disponibilidad por ese medio.',
  },
  {
    pregunta: '¿Cuánto cuesta la entrada?',
    respuesta: 'La tarifa de visita está pendiente de confirmación (en la versión anterior aparecía $40 sin especificar a qué correspondía). Consulta el precio actualizado por WhatsApp.',
  },
  {
    pregunta: '¿Qué debería llevar?',
    respuesta: 'Te recomendamos calzado cómodo, agua, protector solar y una bolsa para recoger tus residuos. Confirma con el parque cualquier requisito especial.',
  },
  {
    pregunta: '¿Se permiten mascotas?',
    respuesta: 'Aún no tenemos confirmación de esa política. Consúltalo directamente antes de viajar.',
  },
];

export function whatsapp(texto: string) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;
}

export const consultaVisita = whatsapp('Hola, quisiera saber los precios y horarios para visitar Las Tierras de Don Gustavo.');
export const consultaCabana = (nombre: string) => whatsapp(
  `Hola, quisiera consultar disponibilidad de ${nombre}. Llegada: __ / Salida: __ / Personas: __.`,
);

export const googleMaps = {
  llegar: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(sitio.coordenadas)}`,
  mapa: `https://www.google.com/maps/@?api=1&map_action=map&center=${encodeURIComponent(sitio.coordenadas)}&zoom=16&basemap=roadmap`,
  satelite: `https://www.google.com/maps/@?api=1&map_action=map&center=${encodeURIComponent(sitio.coordenadas)}&zoom=16&basemap=satellite`,
};
