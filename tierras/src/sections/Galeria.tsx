import { useMemo, useState } from 'react';
import { galeria } from '../data/contenido';
import { Foto } from '../components/Foto';
import { Lightbox } from '../components/Lightbox';

export function Galeria() {
  const categorias = useMemo(() => [...new Set(galeria.map((g) => g.categoria))], []);
  const [filtro, setFiltro] = useState<string>('Todas');
  const [abierta, setAbierta] = useState<number | null>(null);

  const visibles = filtro === 'Todas' ? galeria : galeria.filter((g) => g.categoria === filtro);

  return (
    <section id="galeria" className="seccion galeria" aria-labelledby="t-galeria">
      <div className="contenedor">
        <h2 id="t-galeria">Galería</h2>
        {categorias.length > 1 && (
          <div className="galeria__filtros" role="group" aria-label="Filtrar fotografías por categoría">
            {['Todas', ...categorias].map((c) => (
              <button key={c} aria-pressed={filtro === c} onClick={() => setFiltro(c)}>{c}</button>
            ))}
          </div>
        )}
        <ul className="mosaico">
          {visibles.map((g, i) => (
            <li key={g.id} className={`mosaico__item mosaico__item--${g.forma}`}>
              <button onClick={() => setAbierta(i)} aria-label={`Ampliar: ${g.foto.alt}`}>
                <Foto {...g.foto} sizes="(min-width: 900px) 25vw, 50vw" />
              </button>
            </li>
          ))}
        </ul>
      </div>
      {abierta !== null && (
        <Lightbox items={visibles} indice={abierta} onCambiar={setAbierta} onCerrar={() => setAbierta(null)} />
      )}
    </section>
  );
}
