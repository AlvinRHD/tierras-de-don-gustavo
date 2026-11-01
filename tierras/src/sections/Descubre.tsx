import { descubre } from '../data/contenido';
import { Foto } from '../components/Foto';
import { Provisional } from '../components/Provisional';

export function Descubre() {
  return (
    <section id="descubre" className="seccion descubre" aria-labelledby="t-descubre">
      <div className="contenedor descubre__rejilla">
        <div className="descubre__texto">
          <h2 id="t-descubre">{descubre.titulo}</h2>
          <p className="intro">{descubre.intro} <Provisional mostrar={!descubre.confirmado} /></p>
          <dl className="descubre__puntos">
            {descubre.puntos.map((p) => (
              <div key={p.titulo}>
                <dt>{p.titulo}</dt>
                <dd>{p.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="descubre__fotos">
          <Foto {...descubre.fotoAncha} className="descubre__foto-a" sizes="(min-width: 900px) 40vw, 90vw" />
          <Foto {...descubre.fotoAlta} className="descubre__foto-b" sizes="(min-width: 900px) 25vw, 60vw" />
        </div>
      </div>
    </section>
  );
}
