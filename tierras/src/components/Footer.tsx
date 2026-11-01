import { contacto, redes, sitio, ubicacion } from '../data/sitio';
import { whatsappUrl } from '../lib/enlaces';
import { iconoRed } from './Iconos';
import { enlacesNav } from './Nav';

export function Footer() {
  return (
    <footer className="pie">
      <div className="pie__interior">
        <div>
          <p className="pie__marca">{sitio.nombre}</p>
          <p className="pie__texto">{sitio.slogan}</p>
          <p className="pie__texto">
            {ubicacion.referencia ?? 'Ubicación exacta por confirmar'}
          </p>
        </div>
        <nav aria-label="Secciones del sitio">
          <ul className="pie__lista">
            {enlacesNav.map((l) => (<li key={l.href}><a href={l.href}>{l.texto}</a></li>))}
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div>
          <ul className="pie__lista">
            <li><a href={whatsappUrl('general')} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            {contacto.correo && <li><a href={`mailto:${contacto.correo}`}>{contacto.correo}</a></li>}
          </ul>
          <ul className="pie__redes">
            {redes.filter((r) => r.perfil).map((r) => {
              const Icono = iconoRed[r.id];
              return (
                <li key={r.id}>
                  <a href={r.perfil} target="_blank" rel="noopener noreferrer" aria-label={`${r.nombre} de ${sitio.nombre}`}>
                    <Icono />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p className="pie__legal">
        © {sitio.anio} {sitio.nombre}. Todos los derechos reservados. El Salvador, San Miguel.
      </p>
    </footer>
  );
}
