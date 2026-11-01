export const sitio = {
  nombre: 'Las Tierras de Don Gustavo',
  slogan: 'Naturaleza, aventura y descanso en El Salvador',
  avisosProvisionales: true,
  anio: new Date().getFullYear(),
};

export const ubicacion = {
  lat: 13.979120600737167, 
  lng: -88.17253831320961,
  zoom: 15,
  confirmada: true,
  referencia: 'El volcáncillo, Perquín',
};

export const contacto = {
  whatsapp: { numero: '50362138659', confirmado: true },
  messenger: 'Las Tierras De Don Gustavo',
  correo: 'lastierrasdedongustavo@gmail.com',
  horarioAtencion: "Lunes a domingo, 8:00 a. m. a 6:00 p. m.",
};

export type TipoMensaje = 'general' | 'cabanas' | 'visitas';

export const mensajesWhatsApp: Record<TipoMensaje, string> = {
  general: 'Hola, quisiera información sobre Las Tierras de Don Gustavo.',
  cabanas:
    'Hola, quisiera consultar la disponibilidad de una cabaña en Las Tierras de Don Gustavo. Fecha de llegada: (ingrese)Fecha de salida: (ingrese) Número de personas:',
  visitas:
    'Hola, quisiera información sobre las actividades y la visita al parque Las Tierras de Don Gustavo (horarios, tarifas y qué incluye).',
};

export type Red = {
  id: 'facebook' | 'instagram' | 'tiktok';
  nombre: string;
  usuario: string;
  perfil: string;
  publicacion: { url: string; imagen: string; alt: string; texto: string };
};

export const redes: Red[] = [
  {
    id: 'facebook',
    nombre: 'Facebook',
    usuario: 'Las Tierras De Don Gustavo',
    perfil: 'https://www.facebook.com/profile.php?id=61552948418470',
    publicacion: {
      url: 'https://www.facebook.com/share/p/1Dg4PrpvJ6/',
      imagen: '/fotos/redes-1.svg',
      alt: 'Imagen de facebook',
      texto: 'Miranos en Facebook',
    },
  },
  {
    id: 'instagram',
    nombre: 'Instagram',
    usuario: 'tierrasdongustavo',
    perfil: 'https://www.instagram.com/tierrasdongustavo/',
    publicacion: {
      url: 'https://www.instagram.com/p/DaBMoovlejl/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
      imagen: '/fotos/redes-2.svg',
      alt: 'Imagen de Instagram',
      texto: 'O en Instagram',
    },
  },
  {
    id: 'tiktok',
    nombre: 'TikTok',
    usuario: 'lastierras_dongustavo_sv',
    perfil: 'https://www.tiktok.com/@lastierras_dongustavo_sv?is_from_webapp=1&sender_device=pc',
    publicacion: {
      url: 'https://www.tiktok.com/@lastierras_dongustavo_sv/video/7610525329026731272',
      imagen: '/fotos/redes-3.svg',
      alt: 'Imagen de tiktok',
      texto: 'También en Tiktok',
    },
  },
];
