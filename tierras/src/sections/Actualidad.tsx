import { redes, sitio, type Red } from '../data/sitio';
import { iconoRed } from '../components/Iconos';
import { Foto } from '../components/Foto';
import { Provisional } from '../components/Provisional';

function TarjetaRed({ red }: { red: Red }) {
  const Icono = iconoRed[red.id];
  const { publicacion: pub } = red;
  const destino = pub.url || red.perfil;
  const etiqueta = pub.url ? 'Ver publicación' : 'Ver perfil';

  const imagen = <Foto src={pub.imagen} alt={pub.alt} ancho={1000} alto={1000} sizes="(min-width: 900px) 30vw, 90vw" />;

  return (
    <article className="red">
      <header className="red__cabecera">
        <Icono width={22} height={22} />
        <div>
          <h3>{red.nombre}</h3>
          {red.usuario && <p>{red.usuario}</p>}
        </div>
      </header>
      {destino ? (
        <a className="red__imagen" href={destino} target="_blank" rel="noopener noreferrer" aria-label={`${etiqueta} en ${red.nombre}`}>{imagen}</a>
      ) : (
        <div className="red__imagen">{imagen}</div>
      )}
      <p className="red__texto">{pub.texto}</p>
      {destino ? (
        <a className="enlace" href={destino} target="_blank" rel="noopener noreferrer">{etiqueta} en {red.nombre}</a>
      ) : (
        <p className="dato__pendiente">Enlace por confirmar <Provisional /></p>
      )}
    </article>
  );
}

export function Actualidad() {
  return (
    <section id="novedades" className="seccion actualidad" aria-labelledby="t-novedades">
      <div className="contenedor">
        <h2 id="t-novedades">Novedades del parque</h2>
        <p className="intro">Lo último que compartimos en redes. Síguenos en {sitio.nombre.replace('Las ', '')} para no perderte nada.</p>
        <div className="redes">
          {redes.map((r) => <TarjetaRed key={r.id} red={r} />)}
        </div>
      </div>
    </section>
  );
}
