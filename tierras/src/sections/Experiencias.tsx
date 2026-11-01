import { useRef, useState, type KeyboardEvent } from 'react';
import { experiencias } from '../data/contenido';
import { whatsappUrl } from '../lib/enlaces';
import { Foto } from '../components/Foto';
import { Provisional } from '../components/Provisional';

export function Experiencias() {
  const [activa, setActiva] = useState(0);
  const botones = useRef<(HTMLButtonElement | null)[]>([]);
  const exp = experiencias[activa];

  const alTeclado = (e: KeyboardEvent<HTMLDivElement>) => {
    const dir = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const n = (activa + dir + experiencias.length) % experiencias.length;
    setActiva(n);
    botones.current[n]?.focus();
  };

  return (
    <section id="experiencias" className="seccion experiencias" aria-labelledby="t-exp">
      <div className="contenedor">
        <h2 id="t-exp">Experiencias</h2>
        <p className="intro">Elige una para ver de qué se trata. Las actividades concretas se publicarán cuando estén confirmadas.</p>
        <div className="experiencias__visor">
          <div className="experiencias__tabs" role="tablist" aria-label="Tipos de experiencia" aria-orientation="vertical" onKeyDown={alTeclado}>
            {experiencias.map((x, i) => (
              <button
                key={x.id}
                ref={(el) => { botones.current[i] = el; }}
                role="tab"
                id={`tab-${x.id}`}
                aria-selected={i === activa}
                aria-controls="panel-exp"
                tabIndex={i === activa ? 0 : -1}
                className="experiencias__tab"
                onClick={() => setActiva(i)}
              >
                {x.nombre}
              </button>
            ))}
          </div>
          <div id="panel-exp" role="tabpanel" aria-labelledby={`tab-${exp.id}`} className="experiencias__panel">
            <Foto key={exp.id} {...exp.foto} className="experiencias__foto" sizes="(min-width: 900px) 55vw, 95vw" />
            <div className="experiencias__detalle">
              <h3>{exp.nombre} <Provisional mostrar={!exp.confirmado} /></h3>
              <p>{exp.descripcion}</p>
              {exp.detalle && <p>{exp.detalle}</p>}
              {exp.accion.tipo === 'seccion' ? (
                <a className="boton boton--oscuro" href={exp.accion.destino}>{exp.accion.texto}</a>
              ) : (
                <a className="boton boton--oscuro" href={whatsappUrl(exp.accion.mensaje)} target="_blank" rel="noopener noreferrer">
                  {exp.accion.texto}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
