import { nosotros } from '../data/contenido';
import { Foto } from '../components/Foto';
import { Provisional } from '../components/Provisional';

export function Nosotros() {
  return (
    <section id="nosotros" className="seccion nosotros" aria-labelledby="t-nosotros">
      <div className="contenedor nosotros__rejilla">
        <Foto {...nosotros.foto} className="nosotros__foto" sizes="(min-width: 900px) 40vw, 90vw" />
        <div>
          <h2 id="t-nosotros">{nosotros.titulo} <Provisional mostrar={!nosotros.confirmado} /></h2>
          {nosotros.parrafos.map((p) => <p key={p}>{p}</p>)}
        </div>
      </div>
    </section>
  );
}
