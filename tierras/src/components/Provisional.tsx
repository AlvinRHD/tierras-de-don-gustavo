import { sitio } from '../data/sitio';

/** Etiqueta visible cuando un dato aún no está confirmado por el propietario. */
export function Provisional({ mostrar = true, texto = 'Provisional' }: { mostrar?: boolean; texto?: string }) {
  if (!sitio.avisosProvisionales || !mostrar) return null;
  return (
    <span className="provisional" title="Este dato aún no está confirmado por el propietario">
      {texto}
    </span>
  );
}
