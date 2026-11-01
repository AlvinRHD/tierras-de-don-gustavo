import { lazy, Suspense } from 'react';
import { ubicacion } from '../data/sitio';
import { comoLlegarUrl, verEnMapaUrl, whatsappUrl } from '../lib/enlaces';
import { useEnVista } from '../lib/useEnVista';
import { Provisional } from '../components/Provisional';

const MapaLeaflet = lazy(() => import('../components/MapaLeaflet'));

export function Mapa() {
  const [ref, visto] = useEnVista<HTMLDivElement>();
  return (
    <section id="ubicacion" className="seccion mapa" aria-labelledby="t-mapa">
      <div className="contenedor">
        <h2 id="t-mapa">Dónde estamos</h2>
        <div className="mapa__rejilla">
          <div ref={ref} className="mapa__marco">
            {visto ? (
              <Suspense fallback={<p className="mapa__estado" role="status">Cargando mapa…</p>}>
                <MapaLeaflet />
              </Suspense>
            ) : (
              <p className="mapa__estado">El mapa se carga al llegar aquí.</p>
            )}
          </div>
          <div className="mapa__info">
            <p>
              {ubicacion.referencia ?? 'La referencia exacta para llegar se publicará cuando el propietario la confirme.'}{' '}
              <Provisional mostrar={!ubicacion.confirmada} texto="Ubicación aproximada" />
            </p>
            <div className="mapa__acciones">
              <a className="boton boton--oscuro" href={comoLlegarUrl} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
              <a className="boton boton--contorno" href={verEnMapaUrl} target="_blank" rel="noopener noreferrer">Abrir en OpenStreetMap</a>
              <a className="boton boton--contorno" href={whatsappUrl('Hola, quisiera saber cómo llegar a Las Tierras de Don Gustavo.')} target="_blank" rel="noopener noreferrer">
                Preguntar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
