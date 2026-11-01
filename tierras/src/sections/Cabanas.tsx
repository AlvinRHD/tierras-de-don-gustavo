import { useState } from 'react';
import { cabanas, sinDato, type Cabana } from '../data/contenido';
import { mensajeCabana, whatsappUrl } from '../lib/enlaces';
import { Foto } from '../components/Foto';
import { IconoWhatsApp } from '../components/Iconos';
import { Provisional } from '../components/Provisional';

function FichaCabana({ cabana, invertida }: { cabana: Cabana; invertida: boolean }) {
  const [i, setI] = useState(0);
  const foto = cabana.fotos[i];
  const nota = <span className="dato__pendiente">{sinDato}</span>;

  return (
    <article className={`cabana ${invertida ? 'cabana--invertida' : ''}`} aria-labelledby={`t-${cabana.id}`}>
      <div className="cabana__galeria">
        <Foto key={foto.src} {...foto} className="cabana__principal" sizes="(min-width: 900px) 50vw, 95vw" />
        {cabana.fotos.length > 1 && (
          <ul className="cabana__miniaturas" aria-label={`Fotografías de ${cabana.nombre}`}>
            {cabana.fotos.map((f, n) => (
              <li key={f.src}>
                <button onClick={() => setI(n)} aria-label={`Ver fotografía ${n + 1} de ${cabana.fotos.length}`} aria-current={n === i}>
                  <Foto {...f} alt="" sizes="120px" />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cabana__info">
        <h3 id={`t-${cabana.id}`}>{cabana.nombre} <Provisional mostrar={!cabana.confirmado} /></h3>
        <p>{cabana.descripcion}</p>
        <dl className="cabana__datos">
          <div><dt>Capacidad</dt><dd>{cabana.capacidad ?? nota}</dd></div>
          <div>
            <dt>Comodidades</dt>
            <dd>
              {cabana.comodidades.length ? (
                <ul className="cabana__lista">{cabana.comodidades.map((c) => <li key={c}>{c}</li>)}</ul>
              ) : nota}
            </dd>
          </div>
          <div><dt>Precio</dt><dd>{cabana.precio ?? 'Consulta el precio por WhatsApp.'}</dd></div>
          {cabana.condiciones && <div><dt>Condiciones</dt><dd>{cabana.condiciones}</dd></div>}
          <div><dt>Disponibilidad</dt><dd>La confirmamos por WhatsApp según tus fechas. No hay calendario automático.</dd></div>
        </dl>
        <a className="boton boton--oscuro" href={whatsappUrl(mensajeCabana(cabana.nombre))} target="_blank" rel="noopener noreferrer">
          <IconoWhatsApp width={18} height={18} /> Consultar disponibilidad
        </a>
      </div>
    </article>
  );
}

export function Cabanas() {
  return (
    <section id="cabanas" className="seccion cabanas" aria-labelledby="t-cabanas">
      <div className="contenedor">
        <h2 id="t-cabanas">Cabañas</h2>
        <p className="intro">Dormir en el parque es parte de la experiencia. Cuéntanos tus fechas y cuántos son, y te respondemos por WhatsApp.</p>
        <div className="cabanas__lista">
          {cabanas.map((c, n) => <FichaCabana key={c.id} cabana={c} invertida={n % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}
