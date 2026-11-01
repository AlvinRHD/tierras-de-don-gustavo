import { fotos, type FotoInfo } from './fotos';
import type { TipoMensaje } from './sitio';

/* ───────── Descubre el parque ───────── */
export const descubre = {
  confirmado: true,
  titulo: 'Un lugar para bajar el ritmo',
  intro:
    'Las Tierras de Don Gustavo Son un Eco-Parque, contamos con amplias áreas verdes, cascadas, cabaña donde puedes alojarte y más',
  puntos: [
    { titulo: 'Qué es', texto: 'Un parque de naturaleza y aventura con alojamiento en cabañas, abierto a quienes quieren salir de la ciudad.' },
    { titulo: 'Qué experiencia ofrece', texto: 'Paisaje, aire libre y tiempo sin prisa, para visitar en el día o quedarse a dormir.' },
    { titulo: 'Qué puedes disfrutar', texto: 'Las actividades y espacios se irán detallando conforme el propietario los confirme.' },
    { titulo: 'Qué lo hace especial', texto: 'La historia y el carácter propio del parque, contados por quienes lo cuidan.' },
  ],
  fotoAncha: fotos.parque1,
  fotoAlta: fotos.parque2,
};

/* ───────── Experiencias ───────── */
export type Experiencia = {
  id: string;
  nombre: string;
  descripcion: string;
  detalle: string | null;
  foto: FotoInfo;
  confirmado: boolean;
  accion: { tipo: 'seccion'; destino: string; texto: string } | { tipo: 'whatsapp'; mensaje: TipoMensaje; texto: string };
};

export const experiencias: Experiencia[] = [
  {
    id: 'naturaleza',
    nombre: 'Naturaleza',
    descripcion: 'Caminar entre árboles, respirar aire fresco y mirar el paisaje con calma.',
    detalle: null,
    foto: fotos.expNaturaleza,
    confirmado: true,
    accion: { tipo: 'whatsapp', mensaje: 'visitas', texto: 'Preguntar por esta experiencia' },
  },
  {
    id: 'aventura',
    nombre: 'Aventura',
    descripcion: 'Espacios para moverse y explorar. Las actividades específicas se publicarán al confirmarlas.',
    detalle: null,
    foto: fotos.expAventura,
    confirmado: true,
    accion: { tipo: 'whatsapp', mensaje: 'visitas', texto: 'Preguntar por actividades' },
  },
  {
    id: 'recreacion',
    nombre: 'Espacios recreativos',
    descripcion: 'Áreas abiertas para compartir en familia o con amigos.',
    detalle: null,
    foto: fotos.expRecreo,
    confirmado: true,
    accion: { tipo: 'whatsapp', mensaje: 'visitas', texto: 'Preguntar por los espacios' },
  },
  {
    id: 'descanso',
    nombre: 'Descanso y alojamiento',
    descripcion: 'Cabañas para pasar la noche y despertar rodeado de paisaje.',
    detalle: null,
    foto: fotos.expDescanso,
    confirmado: true,
    accion: { tipo: 'seccion', destino: '#cabanas', texto: 'Ver las cabañas' },
  },
];

/* ───────── Cabañas ───────── */
export type Cabana = {
  id: string;
  nombre: string;
  descripcion: string;
  capacidad: string | null; // ej. "Hasta 4 personas"
  comodidades: string[]; // vacío = "por confirmar"
  precio: string | null; // ej. "Desde $60 por noche"
  condiciones: string | null;
  fotos: FotoInfo[];
  confirmado: boolean;
};

export const cabanas: Cabana[] = [
  {
    id: 'tipo-a',
    nombre: 'Cabaña tipo A',
    descripcion: 'Espacio de madera rodeado de árboles, pensado para descansar y despertar con el paisaje.',
    capacidad: '4 personas',
    comodidades: ['Baño privado', 'Camas'],
    precio: 'Desde $50 por noche',
    condiciones: 'Excelentes',
    fotos: [fotos.cabanaA1, fotos.cabanaA2, fotos.cabanaA3],
    confirmado: true,
  },
  {
    id: 'tipo-b',
    nombre: 'Cabaña tipo B',
    descripcion: 'Otra opción de alojamiento dentro del parque. Nombre, capacidad y servicios se definirán con el propietario.',
    capacidad: '4 personas',
    comodidades: ['Baño privado', 'Camas'],
    precio: 'Desde $50 por noche',
    condiciones: 'Excelentes',
    fotos: [fotos.cabanaB1, fotos.cabanaB2],
    confirmado: true,
  },
];

/* ───────── Galería ───────── */
export type FormaMosaico = 'normal' | 'ancha' | 'alta' | 'grande';
export type ItemGaleria = { id: string; foto: FotoInfo; categoria: 'Paisajes' | 'Cabañas' | 'Experiencias'; forma: FormaMosaico };

export const galeria: ItemGaleria[] = [
  { id: 'g1', foto: fotos.parque1, categoria: 'Paisajes', forma: 'grande' },
  { id: 'g2', foto: fotos.cabanaA1, categoria: 'Cabañas', forma: 'normal' },
  { id: 'g3', foto: fotos.parque2, categoria: 'Paisajes', forma: 'alta' },
  { id: 'g4', foto: fotos.paisaje1, categoria: 'Paisajes', forma: 'ancha' },
  { id: 'g5', foto: fotos.expAventura, categoria: 'Experiencias', forma: 'normal' },
  { id: 'g6', foto: fotos.cabanaB1, categoria: 'Cabañas', forma: 'normal' },
  { id: 'g7', foto: fotos.parque3, categoria: 'Paisajes', forma: 'normal' },
  { id: 'g8', foto: fotos.expNaturaleza, categoria: 'Experiencias', forma: 'ancha' },
  { id: 'g9', foto: fotos.cabanaA2, categoria: 'Cabañas', forma: 'alta' },
  { id: 'g10', foto: fotos.eco1, categoria: 'Paisajes', forma: 'normal' },
  { id: 'g11', foto: fotos.expDescanso, categoria: 'Experiencias', forma: 'normal' },
  { id: 'g12', foto: fotos.cabanaB2, categoria: 'Cabañas', forma: 'normal' },
  { id: 'g13', foto: fotos.expRecreo, categoria: 'Experiencias', forma: 'normal' },
];

/* ───────── Turismo ecológico ───────── */
export const ecologico = {
  titulo: 'Visitar la naturaleza es cuidarla',
  intro:
    'Recomendaciones generales para disfrutar del parque sin dejar huella. No describen programas ni certificaciones del parque.',
  practicas: [
    { titulo: 'Llévate tu basura', texto: 'Todo lo que entra contigo, sale contigo. Usa bolsas y botellas reutilizables.' },
    { titulo: 'Camina por los senderos', texto: 'Quedarte en los caminos marcados protege el suelo y las plantas.' },
    { titulo: 'Observa sin molestar', texto: 'No alimentes ni persigas a los animales, ni te lleves plantas o piedras.' },
    { titulo: 'Cuida el fuego', texto: 'Enciende fuego solo en las áreas que el parque indique.' },
    { titulo: 'Respeta el silencio', texto: 'La música alta aleja a la fauna y quita calma a otros visitantes.' },
  ],
  foto1: fotos.eco1,
  foto2: fotos.eco2,
  nota: 'Información verificada sobre flora, fauna y conservación del parque: pendiente del propietario.',
};

/* ───────── Sobre nosotros ───────── */
export const nosotros = {
  confirmado: false,
  titulo: 'La historia detrás del parque',
  parrafos: [
    'Aquí irá la historia de Las Tierras de Don Gustavo, contada con las palabras de su familia: cómo empezó, quién es Don Gustavo y por qué decidieron abrir el lugar a los visitantes.',
    'También se explicará qué esperan que sientan quienes lo visitan. Este texto es provisional y se reemplazará con el relato real.',
  ],
  foto: fotos.nosotros1,
};

/* ───────── Información para visitantes ───────── */
export type DatoVisita = { titulo: string; valor: string | null };

export const datosVisita: DatoVisita[] = [
  { titulo: 'Cómo llegar', valor: null },
  { titulo: 'Horarios', valor: 'Lunes a domingo, 8:00 a. m. a 6:00 p. m.'},
  { titulo: 'Tarifas de entrada', valor: '$40' },
  { titulo: 'Políticas y restricciones', valor: 'Personas caracterizadas por su honestidad' },
];

export type Pregunta = { pregunta: string; respuesta: string | null };

export const preguntas: Pregunta[] = [
  { pregunta: '¿Cómo reservo una cabaña?', respuesta: 'Escríbenos por WhatsApp con la fecha de llegada, la de salida y el número de personas. La disponibilidad se confirma por ese medio.' },
  { pregunta: '¿Cuál es el horario de visita?', respuesta: null },
  { pregunta: '¿Cuánto cuesta la entrada?', respuesta: null },
  { pregunta: '¿Se permiten mascotas?', respuesta: null },
  { pregunta: '¿Qué conviene llevar?', respuesta: 'Como recomendación general: agua, protector solar, calzado cómodo y una bolsa para tu basura.' },
];

export const sinDato = 'Por confirmar. Consúltalo por WhatsApp.';
