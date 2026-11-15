import { useState } from 'react';
import { imagenes, mostrarFotosReales } from './datos';

interface Props {
  nombre: string;
  className?: string;
  priority?: boolean;
}

export function Foto({ nombre, className = '', priority = false }: Props) {
  const foto = imagenes[nombre];
  const ejemplo = `/fotos/ejemplos/${foto.ejemplo}`;
  const [src, setSrc] = useState(
    mostrarFotosReales ? `/fotos/reales/${foto.archivo}` : ejemplo,
  );
  const provisional = src === ejemplo;

  return (
    <div className={`foto ${className}`}>
      <img
        src={src}
        alt={provisional ? `Imagen ilustrativa: ${foto.alt}` : foto.alt}
        onError={() => setSrc(ejemplo)}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      {provisional && <span className="foto__nota">Imagen ilustrativa</span>}
    </div>
  );
}
