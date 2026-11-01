/**
 * CATÁLOGO DE FOTOS
 * Para usar fotos reales: copia el archivo a public/fotos/ (idealmente .webp o .avif,
 * máx. ~1600 px de ancho) y cambia `src`, `alt`, `ancho` y `alto` de la entrada.
 * El resto del sitio se actualiza solo.
 */
export type FotoInfo = { src: string; alt: string; ancho: number; alto: number };

const f = (nombre: string, ancho: number, alto: number, alt: string): FotoInfo => ({
  src: `/fotos/${nombre}.svg`,
  ancho,
  alto,
  alt: `Ilustración provisional: ${alt}`,
});

export const fotos = {
  hero: f('hero', 1600, 1000, 'bosque y colinas verdes al amanecer'),
  parque1: f('parque-1', 1200, 800, 'colinas cubiertas de pinos bajo cielo despejado'),
  parque2: f('parque-2', 800, 1000, 'sendero de tierra entre colinas con bruma'),
  parque3: f('parque-3', 1000, 1000, 'laguna rodeada de colinas verdes'),
  paisaje1: f('paisaje-1', 1600, 700, 'panorama de colinas al atardecer'),
  expNaturaleza: f('exp-naturaleza', 1200, 800, 'bosque con bruma matinal'),
  expAventura: f('exp-aventura', 1200, 800, 'sendero que sube por la colina'),
  expRecreo: f('exp-recreo', 1200, 800, 'amplia explanada entre colinas'),
  expDescanso: f('exp-descanso', 1200, 800, 'laguna tranquila al atardecer'),
  cabanaA1: f('cabana-a-1', 1200, 800, 'cabaña de madera entre árboles al amanecer'),
  cabanaA2: f('cabana-a-2', 800, 1000, 'cabaña de madera con bruma'),
  cabanaA3: f('cabana-a-3', 1200, 800, 'cabaña de madera al atardecer'),
  cabanaB1: f('cabana-b-1', 1200, 800, 'cabaña de madera bajo cielo claro'),
  cabanaB2: f('cabana-b-2', 1200, 800, 'cabaña de madera entre la neblina'),
  eco1: f('eco-1', 1200, 800, 'bosque denso cubierto de neblina'),
  eco2: f('eco-2', 800, 1000, 'sendero de tierra al amanecer'),
  nosotros1: f('nosotros-1', 1000, 1000, 'bosque y colinas al atardecer'),
} satisfies Record<string, FotoInfo>;

export type ClaveFoto = keyof typeof fotos;
