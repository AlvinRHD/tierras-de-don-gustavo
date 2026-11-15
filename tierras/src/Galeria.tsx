import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import { galeria } from './datos';
import { Foto } from './Foto';

export function Galeria() {
  const [filtro, setFiltro] = useState('Todas');
  const [seleccion, setSeleccion] = useState<number | null>(null);
  const dialogo = useRef<HTMLDialogElement>(null);
  const lista = galeria.filter(item => filtro === 'Todas' || item.categoria === filtro);

  useEffect(() => {
    if (seleccion !== null && !dialogo.current?.open) dialogo.current?.showModal();
  }, [seleccion]);

  function cerrar() {
    dialogo.current?.close();
    setSeleccion(null);
  }

  function mover(cantidad: number) {
    if (seleccion === null) return;
    setSeleccion((seleccion + cantidad + lista.length) % lista.length);
  }

  return (
    <section className="seccion" id="fotos" aria-labelledby="titulo-fotos">
      <div className="container">
        <div className="titulo-seccion titulo-seccion--fila">
          <div>
            <span className="eyebrow">Una mirada al lugar</span>
            <h2 id="titulo-fotos">Déjate llevar por las vistas.</h2>
          </div>
          <p>Un pequeño vistazo a lo que podrás encontrar. Pronto tendremos la galería fotográfica del parque.</p>
        </div>

        <div className="filtros" aria-label="Filtrar galería">
          {['Todas', 'Naturaleza', 'Cabañas', 'Paisajes'].map(item => (
            <button
              key={item}
              className={filtro === item ? 'filtro filtro--activo' : 'filtro'}
              aria-pressed={filtro === item}
              onClick={() => { setFiltro(item); setSeleccion(null); }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="galeria">
          {lista.map((item, indice) => (
            <button className="galeria__item" key={item.foto} onClick={() => setSeleccion(indice)}>
              <Foto nombre={item.foto} />
              <span className="galeria__nombre">{item.titulo}</span>
            </button>
          ))}
        </div>
      </div>

      <dialog
        className="visor"
        ref={dialogo}
        aria-label="Ver imagen ampliada"
        onClose={() => setSeleccion(null)}
        onClick={event => { if (event.target === dialogo.current) cerrar(); }}
        onKeyDown={event => {
          if (event.key === 'ArrowLeft') mover(-1);
          if (event.key === 'ArrowRight') mover(1);
        }}
      >
        {seleccion !== null && (
          <div className="visor__contenido">
            <Foto nombre={lista[seleccion].foto} />
            <p>{lista[seleccion].titulo} · {seleccion + 1} de {lista.length}</p>
          </div>
        )}
        <button className="visor__cerrar" onClick={cerrar} aria-label="Cerrar galería"><X /></button>
        <button className="visor__anterior" onClick={() => mover(-1)} aria-label="Imagen anterior"><ArrowLeft /></button>
        <button className="visor__siguiente" onClick={() => mover(1)} aria-label="Imagen siguiente"><ArrowRight /></button>
      </dialog>
    </section>
  );
}
