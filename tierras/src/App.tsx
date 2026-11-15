import { useEffect, useState } from 'react';
import {
  ArrowDown, ArrowRight, ArrowUpRight, BedDouble, Check, ChevronDown,
  Clock3, Compass, Leaf, MapPin, MessageCircle, Phone, Users,  House, Images, Share2, Info,
} from 'lucide-react';
import { Foto } from './Foto';
import { Galeria } from './Galeria';
import {
  cabanas, consultaCabana, consultaVisita, googleMaps,
  preguntas, publicaciones, sitio, whatsapp,
} from './datos';



const enlaces = [
  { texto: 'Inicio', href: '#inicio', Icono: House },
  { texto: 'Cabañas', href: '#cabanas', Icono: BedDouble },
  { texto: 'Galería', href: '#fotos', Icono: Images },
  { texto: 'Redes', href: '#redes', Icono: Share2 },
  { texto: 'Tu visita', href: '#visita', Icono: Info },
  { texto: 'Ubicación', href: '#ubicacion', Icono: MapPin },
];




const iconosRed = { facebook: 'f', instagram: '◎', tiktok: '♪' };



function Encabezado() {
  const [actual, setActual] = useState('#inicio');

  useEffect(() => {
    const secciones = document.querySelectorAll('main section[id]');

    function actualizar() {
      let visible = '#inicio';

      secciones.forEach(seccion => {
        if (seccion.getBoundingClientRect().top < 180) {
          visible = `#${seccion.id}`;
        }
      });

      setActual(visible);
    }

    actualizar();
    window.addEventListener('scroll', actualizar, { passive: true });

    return () => window.removeEventListener('scroll', actualizar);
  }, []);

  return (
    <header className="dock">
      <nav className="dock__nav" aria-label="Navegación principal">
        {enlaces.map(({ texto, href, Icono }) => (
          <a
            key={href}
            href={href}
            className={`dock__boton ${actual === href ? 'activo' : ''}`}
            aria-label={texto}
            aria-current={actual === href ? 'location' : undefined}
            data-label={texto}
          >
            <Icono size={23} strokeWidth={1.8} aria-hidden="true" />
          </a>
        ))}

        <a
          href={consultaVisita}
          className="dock__boton dock__whatsapp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          data-label="WhatsApp"
        >
          <MessageCircle size={23} strokeWidth={1.9} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}



function Portada() {
  return (
    <section className="portada" id="inicio">
      <div className="container portada__interior">
        <div className="portada__texto">
          <div className="ubicacion-corta"><MapPin size={15} /> {sitio.lugar}</div>
          <h1>Un lugar para <em>bajar el ritmo.</em></h1>
          <p>Un poco de aire fresco, paisajes para recordar y tiempo para quienes más quieres.</p>
          <div className="portada__acciones">
            <a className="boton boton--verde" href="#cabanas">Conoce las cabañas <ArrowRight size={17} /></a>
            <a className="enlace-flecha" href="#fotos">Explorar el lugar <ArrowDown size={17} /></a>
          </div>
          <div className="portada__detalle"><Leaf size={19} /> Ecoparque · Naturaleza · Descanso</div>
        </div>
        <div className="portada__imagen">
          <Foto nombre="portada" priority />
          <div className="portada__tarjeta">
            <span>ESPECIAL PARA ESCAPAR DE LA RUTINA</span>
            <strong>Respira. Camina. Disfruta.</strong>
          </div>
          <span className="portada__adorno" aria-hidden="true">01 / 04</span>
        </div>
      </div>
    </section>
  );
}

function DatosRapidos() {
  return (
    <section className="datos-rapidos" aria-label="Información rápida">
      <div className="container datos-rapidos__interior">
        <div><BedDouble size={23} /><span><strong>Desde $50</strong><small>Por cabaña / noche*</small></span></div>
        <div><Compass size={23} /><span><strong>Visita por el día</strong><small>Consulta la tarifa actual</small></span></div>
        <div><MapPin size={23} /><span><strong>Perquín, Morazán</strong><small>Encuentra cómo llegar</small></span></div>
        <a href={consultaVisita} target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp <ArrowUpRight size={18} /></a>
      </div>
    </section>
  );
}

function Cabanas() {
  return (
    <section className="seccion" id="cabanas" aria-labelledby="titulo-cabanas">
      <div className="container">
        <div className="titulo-seccion titulo-seccion--fila">
          <div>
            <span className="eyebrow">Quédate un poco más</span>
            <h2 id="titulo-cabanas">El descanso también tiene su lugar.</h2>
          </div>
          <p>Dos opciones para quedarte a dormir. Pregunta por disponibilidad y condiciones antes de reservar.</p>
        </div>
        <div className="cabanas">
          {cabanas.map(cabana => (
            <article className="cabana" key={cabana.nombre}>
              <div className="cabana__foto"><Foto nombre={cabana.foto} /></div>
              <div className="cabana__informacion">
                <div className="cabana__encabezado">
                  <h3>{cabana.nombre}</h3>
                  <div className="cabana__precio"><small>Desde</small><strong>{cabana.precio}</strong><small>/ noche*</small></div>
                </div>
                <div className="cabana__detalles">
                  <span><Users size={16} /> {cabana.capacidad}</span>
                  {cabana.detalles.map(detalle => <span key={detalle}><Check size={16} /> {detalle}</span>)}
                </div>
                <a className="boton boton--borde" href={consultaCabana(cabana.nombre)} target="_blank" rel="noopener noreferrer">
                  Consultar disponibilidad <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="nota-precios">*Precios de referencia tomados de la versión anterior. Deben confirmarse con el parque; no representan una reserva ni una tarifa garantizada.</p>
      </div>
    </section>
  );
}

function Experiencia() {
  return (
    <section className="experiencia" id="redes" aria-labelledby="titulo-experiencia">
      <div className="container experiencia__interior">
        <div className="experiencia__foto"><Foto nombre="bosque" /></div>
        <div className="experiencia__texto">
          <span className="eyebrow eyebrow--clara">No todo tiene que ir deprisa</span>
          <h2 id="titulo-experiencia">A veces el mejor plan es no tener prisa.</h2>
          <p>Un poco de aire libre, naturaleza y tiempo para compartir. Mira algunos de los momentos que mostramos en nuestras redes.</p>

          <div className="publicaciones" aria-label="Publicaciones del parque en redes sociales">
            <div className="publicaciones__titulo">
              <span>EN NUESTRAS REDES</span>
              <small>Descubre más del lugar</small>
            </div>
            {publicaciones.map(red => (
                <a
                  key={red.id}
                  className="publicacion"
                  href={red.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir publicación en ${red.nombre}`}
                >
                  <img src={`/fotos/publicaciones/${red.imagen}`} alt="" loading="lazy" />
                  <span className="publicacion__texto">
                    <strong><span className="logo-red" aria-hidden="true">{iconosRed[red.id]}</span> {red.nombre}</strong>
                    <small>{red.usuario}</small>
                  </span>
                  <span className="publicacion__accion">Ver publicación <ArrowUpRight size={15} /></span>
                </a>
            ))}
          </div>

          <div className="experiencia__final">
            <span>Miniaturas ilustrativas del sitio anterior.</span>
            <a href="#fotos" className="enlace-claro">Ver galería <ArrowUpRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visita() {
  return (
    <section className="seccion visita" id="visita" aria-labelledby="titulo-visita">
      <div className="container">
        <div className="titulo-seccion titulo-seccion--fila">
          <div>
            <span className="eyebrow">Antes de hacer maletas</span>
            <h2 id="titulo-visita">Todo lo que necesitas saber.</h2>
          </div>
          <p>Reunimos lo importante aquí, para que encuentres respuestas sin tener que buscar por toda la página.</p>
        </div>
        <div className="visita__interior">
          <div className="visita__resumen">
            <div className="dato-visita"><Clock3 size={22} /><div><strong>Horario de atención indicado</strong><p>{sitio.horarioAtencion}</p></div></div>
            <div className="dato-visita"><Phone size={22} /><div><strong>Visitas y reservaciones</strong><p>Confirma precios, disponibilidad y condiciones por WhatsApp.</p></div></div>
            <div className="dato-visita"><Leaf size={22} /><div><strong>Para disfrutar mejor</strong><p>Trae calzado cómodo, agua y cuida los espacios naturales.</p></div></div>
            <a className="boton boton--verde" href={consultaVisita} target="_blank" rel="noopener noreferrer">Consultar mi visita <ArrowUpRight size={18} /></a>
          </div>
          <div className="preguntas">
            <h3>Preguntas frecuentes</h3>
            {preguntas.map(item => (
              <details key={item.pregunta}>
                <summary>{item.pregunta} <ChevronDown size={18} /></summary>
                <p>{item.respuesta}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Ubicacion() {
  const [modo, setModo] = useState<'m' | 'k'>('m');
  const clave = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  const coordenadas = encodeURIComponent(sitio.coordenadas);
  const mapa = clave
    ? `https://www.google.com/maps/embed/v1/place?key=${clave}&q=${coordenadas}&zoom=16&maptype=${modo === 'k' ? 'satellite' : 'roadmap'}`
    : `https://maps.google.com/maps?q=${coordenadas}&z=16&output=embed&t=${modo}`;

  return (
    <section className="seccion ubicacion" id="ubicacion" aria-labelledby="titulo-ubicacion">
      <div className="container ubicacion__interior">
        <div className="ubicacion__texto">
          <span className="eyebrow">¿Dónde estamos?</span>
          <h2 id="titulo-ubicacion">La naturaleza está más cerca de lo que crees.</h2>
          <p>Encuéntranos en <strong>{sitio.lugar}, El Salvador.</strong> Puedes explorar el mapa o abrir la ruta directamente desde tu teléfono.</p>
          <a className="boton boton--verde" href={googleMaps.llegar} target="_blank" rel="noopener noreferrer">
            Cómo llegar <ArrowUpRight size={18} />
          </a>
          <a className="ubicacion__extra" href={googleMaps.satelite} target="_blank" rel="noopener noreferrer">
            Abrir vista satelital en Google Maps <ArrowUpRight size={16} />
          </a>
          <p className="texto-pequeno">Ubicación basada en las coordenadas del proyecto original. Confirma el acceso con el parque.</p>
        </div>
        <div className="mapa">
          <div className="mapa__barra">
            <strong><MapPin size={17} /> Las Tierras de Don Gustavo</strong>
            <div className="mapa__modos" aria-label="Tipo de mapa">
              <button className={modo === 'm' ? 'activo' : ''} onClick={() => setModo('m')} aria-pressed={modo === 'm'}>Mapa</button>
              <button className={modo === 'k' ? 'activo' : ''} onClick={() => setModo('k')} aria-pressed={modo === 'k'}>Satélite</button>
            </div>
          </div>
          <iframe
            key={modo}
            title={`Google Maps, vista ${modo === 'm' ? 'de mapa' : 'satelital'}`}
            src={mapa}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="mapa__pie"><span>{sitio.lugar}</span><a href={googleMaps.mapa} target="_blank" rel="noopener noreferrer">Ver en Maps <ArrowUpRight size={15} /></a></div>
        </div>
      </div>
    </section>
  );
}

function Pie() {
  return (
    <footer className="pie">
      <div className="container pie__interior">
        <div>
          <span className="pie__marca">Las Tierras<br />de Don Gustavo.</span>
          <p>Un rincón de naturaleza para compartir y descansar.</p>
        </div>
        <div>
          <strong>Explora</strong>
          {enlaces.map(enlace => <a href={enlace.href} key={enlace.href}>{enlace.texto}</a>)}
        </div>
        <div>
          <strong>Estamos aquí</strong>
          <span>{sitio.lugar}, El Salvador</span>
          <a href={`mailto:${sitio.correo}`}>{sitio.correo}</a>
          <a href={whatsapp('Hola, quisiera información sobre Las Tierras de Don Gustavo.')} target="_blank" rel="noopener noreferrer">WhatsApp <ArrowUpRight size={15} /></a>
        </div>
      </div>
      <div className="container pie__inferior">
        <small>© {new Date().getFullYear()} Las Tierras de Don Gustavo</small>
        <div className="pie__sociales">
          {publicaciones.map(red => (
            <a key={red.id} href={red.perfil} target="_blank" rel="noopener noreferrer" aria-label={`Perfil de ${red.nombre}`}>
              <span className="logo-red" aria-hidden="true">{iconosRed[red.id]}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="saltar" href="#contenido">Saltar al contenido</a>
      <Encabezado />
      <main id="contenido">
        <Portada />
        <DatosRapidos />
        <Cabanas />
        <Experiencia />
        <Galeria />
        <Visita />
        <Ubicacion />
      </main>
      <Pie />
    </>
  );
}
