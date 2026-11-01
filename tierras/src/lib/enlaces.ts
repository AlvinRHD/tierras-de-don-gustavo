import { contacto, mensajesWhatsApp, ubicacion, type TipoMensaje } from '../data/sitio';

export function whatsappUrl(mensaje: TipoMensaje | string): string {
  const texto = mensaje in mensajesWhatsApp ? mensajesWhatsApp[mensaje as TipoMensaje] : mensaje;
  return `https://wa.me/${contacto.whatsapp.numero}?text=${encodeURIComponent(texto)}`;
}

export function mensajeCabana(nombre: string): string {
  return `Hola, quisiera consultar la disponibilidad de la ${nombre} en Las Tierras de Don Gustavo. Fecha de llegada: ___ Fecha de salida: ___ Número de personas: ___`;
}

export const comoLlegarUrl = `https://www.google.com/maps/dir/?api=1&destination=${ubicacion.lat},${ubicacion.lng}`;
export const verEnMapaUrl = `https://www.openstreetmap.org/?mlat=${ubicacion.lat}&mlon=${ubicacion.lng}#map=${ubicacion.zoom}/${ubicacion.lat}/${ubicacion.lng}`;
export const messengerUrl = contacto.messenger ? `https://m.me/${contacto.messenger}` : '';
