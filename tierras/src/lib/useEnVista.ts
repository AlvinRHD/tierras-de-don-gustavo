import { useEffect, useRef, useState } from 'react';

/** Devuelve true (y se queda en true) cuando el elemento se acerca a la pantalla. */
export function useEnVista<T extends HTMLElement>(margen = '300px') {
  const ref = useRef<T>(null);
  const [visto, setVisto] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || visto) return;
    if (!('IntersectionObserver' in window)) { setVisto(true); return; }
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisto(true); obs.disconnect(); } }, { rootMargin: margen });
    obs.observe(el);
    return () => obs.disconnect();
  }, [visto, margen]);
  return [ref, visto] as const;
}
