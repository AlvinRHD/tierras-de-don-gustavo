import { useEffect, useRef, type KeyboardEvent } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { ItemGaleria } from '../data/contenido';

type Props = {
  items: ItemGaleria[];
  indice: number;
  onCambiar: (i: number) => void;
  onCerrar: () => void;
};

/** Vista ampliada con <dialog> nativo: foco atrapado, Esc para cerrar y flechas para navegar. */
export function Lightbox({ items, indice, onCambiar, onCerrar }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = items[indice];
  const total = items.length;

  useEffect(() => {
    const d = ref.current;
    if (d && !d.open) d.showModal();
  }, []);

  const ir = (delta: number) => onCambiar((indice + delta + total) % total);

  const alTeclado = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); ir(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); ir(-1); }
  };

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={`Fotografía ${indice + 1} de ${total}`}
      onKeyDown={alTeclado}
      onClose={onCerrar}
      onClick={(e) => { if (e.target === ref.current) ref.current?.close(); }}
    >
      <figure className="lightbox__figura">
        <img key={item.id} src={item.foto.src} alt={item.foto.alt} width={item.foto.ancho} height={item.foto.alto} />
        <figcaption>
          <span>{item.foto.alt}</span>
          <span className="lightbox__cuenta" aria-hidden="true">{indice + 1} / {total}</span>
        </figcaption>
      </figure>
      <button className="lightbox__btn lightbox__cerrar" onClick={() => ref.current?.close()} aria-label="Cerrar vista ampliada" autoFocus>
        <X size={22} aria-hidden="true" />
      </button>
      {total > 1 && (
        <>
          <button className="lightbox__btn lightbox__prev" onClick={() => ir(-1)} aria-label="Fotografía anterior">
            <ChevronLeft size={26} aria-hidden="true" />
          </button>
          <button className="lightbox__btn lightbox__next" onClick={() => ir(1)} aria-label="Fotografía siguiente">
            <ChevronRight size={26} aria-hidden="true" />
          </button>
        </>
      )}
    </dialog>
  );
}
