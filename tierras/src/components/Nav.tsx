import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { sitio } from '../data/sitio';
import { whatsappUrl } from '../lib/enlaces';
import { IconoWhatsApp } from './Iconos';

export const enlacesNav = [
  { href: '#descubre', texto: 'El parque' },
  { href: '#experiencias', texto: 'Experiencias' },
  { href: '#cabanas', texto: 'Cabañas' },
  { href: '#galeria', texto: 'Galería' },
  { href: '#naturaleza', texto: 'Naturaleza' },
  { href: '#ubicacion', texto: 'Ubicación' },
  { href: '#visitantes', texto: 'Visita' },
];

export function Nav() {
  const [abierto, setAbierto] = useState(false);
  const [fondo, setFondo] = useState(false);

  useEffect(() => {
    const alScroll = () => setFondo(window.scrollY > 40);
    alScroll();
    window.addEventListener('scroll', alScroll, { passive: true });
    return () => window.removeEventListener('scroll', alScroll);
  }, []);

  useEffect(() => {
    if (!abierto) return;
    const alTeclado = (e: globalThis.KeyboardEvent) => e.key === 'Escape' && setAbierto(false);
    document.addEventListener('keydown', alTeclado);
    document.body.classList.add('sin-scroll');
    return () => {
      document.removeEventListener('keydown', alTeclado);
      document.body.classList.remove('sin-scroll');
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);

  return (
    <header className={`nav ${fondo || abierto ? 'nav--solido' : ''}`}>
      <div className="nav__interior">
        <a className="nav__marca" href="#inicio" onClick={cerrar}>{sitio.nombre}</a>
        <button
          className="nav__toggle"
          aria-expanded={abierto}
          aria-controls="menu-principal"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setAbierto((v) => !v)}
        >
          {abierto ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
        <nav id="menu-principal" className={`nav__menu ${abierto ? 'nav__menu--abierto' : ''}`} aria-label="Principal">
          <ul>
            {enlacesNav.map((l) => (
              <li key={l.href}><a href={l.href} onClick={cerrar}>{l.texto}</a></li>
            ))}
          </ul>
          <a className="boton boton--claro nav__cta" href={whatsappUrl('cabanas')} target="_blank" rel="noopener noreferrer" onClick={cerrar}>
            <IconoWhatsApp width={18} height={18} /> Reservar
          </a>
        </nav>
      </div>
    </header>
  );
}
