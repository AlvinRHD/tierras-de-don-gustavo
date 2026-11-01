import { MotionConfig } from 'motion/react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Descubre } from './sections/Descubre';
import { Experiencias } from './sections/Experiencias';
import { Cabanas } from './sections/Cabanas';
import { Galeria } from './sections/Galeria';
import { Ecologico } from './sections/Ecologico';
import { Mapa } from './sections/Mapa';
import { Actualidad } from './sections/Actualidad';
import { Nosotros } from './sections/Nosotros';
import { Visitantes } from './sections/Visitantes';
import { Contacto } from './sections/Contacto';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="saltar" href="#contenido">Saltar al contenido</a>
      <Nav />
      <main id="contenido">
        <Hero />
        <Descubre />
        <Experiencias />
        <Cabanas />
        <Galeria />
        <Ecologico />
        <Mapa />
        <Actualidad />
        <Nosotros />
        <Visitantes />
        <Contacto />
      </main>
      <Footer />
    </MotionConfig>
  );
}
