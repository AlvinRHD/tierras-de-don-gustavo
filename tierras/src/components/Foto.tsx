import { useEffect, useRef, useState } from 'react';
import type { FotoInfo } from '../data/fotos';

type Props = FotoInfo & { prioridad?: boolean; sizes?: string; className?: string };

/** Imagen con reserva de espacio, carga diferida, fundido de entrada y estado de error. */
export function Foto({ src, alt, ancho, alto, prioridad = false, sizes, className = '' }: Props) {
  const [estado, setEstado] = useState<'cargando' | 'lista' | 'error'>('cargando');
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setEstado('cargando');
    const img = ref.current;
    if (img?.complete && img.naturalWidth > 0) setEstado('lista');
  }, [src]);

  if (estado === 'error') {
    return (
      <div className={`foto foto--error ${className}`} role="img" aria-label={alt}>
        <span>Imagen no disponible</span>
      </div>
    );
  }

  return (
    <img
      ref={ref}
      className={`foto foto--${estado} ${className}`}
      src={src}
      alt={alt}
      width={ancho}
      height={alto}
      sizes={sizes}
      loading={prioridad ? 'eager' : 'lazy'}
      decoding="async"
      {...(prioridad ? { fetchPriority: 'high' as const } : {})}
      onLoad={() => setEstado('lista')}
      onError={() => setEstado('error')}
    />
  );
}
