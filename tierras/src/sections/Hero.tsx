import { ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { fotos } from '../data/fotos';
import { sitio } from '../data/sitio';
import { Foto } from '../components/Foto';

const entrada = (retraso: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: retraso, ease: [0.22, 0.61, 0.36, 1] as const },
});

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="titulo-hero">
      <Foto {...fotos.hero} prioridad className="hero__foto" sizes="100vw" />
      <div className="hero__velo" aria-hidden="true" />
      <div className="hero__contenido">
        <motion.h1 id="titulo-hero" {...entrada(0.1)}>{sitio.nombre}</motion.h1>
        <motion.p className="hero__frase" {...entrada(0.35)}>{sitio.slogan}</motion.p>
        <motion.div className="hero__acciones" {...entrada(0.6)}>
          <a className="boton boton--claro" href="#descubre">Explorar el parque</a>
          <a className="boton boton--contorno-claro" href="#cabanas">Consultar cabañas</a>
        </motion.div>
      </div>
      <a className="hero__bajar" href="#descubre" aria-label="Ir a la siguiente sección">
        <ChevronDown size={28} aria-hidden="true" />
      </a>
    </section>
  );
}
