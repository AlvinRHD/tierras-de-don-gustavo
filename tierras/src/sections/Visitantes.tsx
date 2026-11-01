import { datosVisita, preguntas, sinDato } from '../data/contenido';
import { ubicacion } from '../data/sitio';
import { whatsappUrl } from '../lib/enlaces';
import { Provisional } from '../components/Provisional';

export function Visitantes() {
  return (
    <section id="visitantes" className="seccion visitantes" aria-labelledby="t-visitantes">
      <div className="contenedor visitantes__rejilla">
        <div>
          <h2 id="t-visitantes">Antes de visitarnos</h2>
          <dl className="visitantes__datos">
            {datosVisita.map((d) => (
              <div key={d.titulo}>
                <dt>{d.titulo}</dt>
                <dd>
                  {d.titulo === 'Cómo llegar' && ubicacion.referencia ? ubicacion.referencia : d.valor ?? (
                    <>
                      <span className="dato__pendiente">{sinDato}</span> <Provisional />
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <a className="boton boton--oscuro" href={whatsappUrl('visitas')} target="_blank" rel="noopener noreferrer">Preguntar por WhatsApp</a>
        </div>
        <div>
          <h3 className="visitantes__subtitulo">Preguntas frecuentes</h3>
          <div className="faq">
            {preguntas.map((q) => (
              <details key={q.pregunta} name="faq">
                <summary>{q.pregunta}</summary>
                <p>
                  {q.respuesta ?? (
                    <>
                      Este dato está por confirmarse.{' '}
                      <a className="enlace" href={whatsappUrl(`Hola, tengo una consulta: ${q.pregunta}`)} target="_blank" rel="noopener noreferrer">
                        Pregúntanos por WhatsApp
                      </a>
                      .
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
