import { ecologico } from '../data/contenido';
import { Foto } from '../components/Foto';
import { Provisional } from '../components/Provisional';

export function Ecologico() {
  return (
    <section id="naturaleza" className="seccion ecologico" aria-labelledby="t-eco">
      <div className="contenedor ecologico__rejilla">
        <div className="ecologico__fotos">
          <Foto {...ecologico.foto1} className="ecologico__foto-a" sizes="(min-width: 900px) 30vw, 70vw" />
          <Foto {...ecologico.foto2} className="ecologico__foto-b" sizes="(min-width: 900px) 20vw, 50vw" />
        </div>
        <div>
          <h2 id="t-eco">{ecologico.titulo}</h2>
          <p className="intro">{ecologico.intro}</p>
          <ul className="ecologico__lista">
            {ecologico.practicas.map((p) => (
              <li key={p.titulo}><strong>{p.titulo}.</strong> {p.texto}</li>
            ))}
          </ul>
          <p className="ecologico__nota">{ecologico.nota} <Provisional /></p>
        </div>
      </div>
    </section>
  );
}
