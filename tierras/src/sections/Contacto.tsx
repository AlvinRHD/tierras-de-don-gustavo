import { contacto, redes } from '../data/sitio';
import { messengerUrl, whatsappUrl } from '../lib/enlaces';
import { IconoMessenger, IconoWhatsApp, iconoRed } from '../components/Iconos';
import { Provisional } from '../components/Provisional';

export function Contacto() {
  return (
    <section id="contacto" className="seccion contacto" aria-labelledby="t-contacto">
      <div className="contenedor contacto__rejilla">
        <div>
          <h2 id="t-contacto">Escríbenos</h2>
          <p className="intro">
            La forma más rápida de reservar o resolver dudas es WhatsApp. Cada botón abre el chat con el mensaje listo para enviar.{' '}
            <Provisional mostrar={!contacto.whatsapp.confirmado} texto="Número provisional" />
          </p>
          {contacto.horarioAtencion && <p>Horario de atención: {contacto.horarioAtencion}</p>}
        </div>
        <div className="contacto__acciones">
          <a className="boton boton--oscuro boton--grande" href={whatsappUrl('cabanas')} target="_blank" rel="noopener noreferrer">
            <IconoWhatsApp /> Consultar una cabaña
          </a>
          <a className="boton boton--contorno boton--grande" href={whatsappUrl('visitas')} target="_blank" rel="noopener noreferrer">
            <IconoWhatsApp /> Actividades y visitas
          </a>
          <a className="boton boton--contorno boton--grande" href={whatsappUrl('general')} target="_blank" rel="noopener noreferrer">
            <IconoWhatsApp /> Consulta general
          </a>
          <ul className="contacto__otros">
            {messengerUrl && (
              <li><a className="enlace" href={messengerUrl} target="_blank" rel="noopener noreferrer"><IconoMessenger width={18} height={18} /> Messenger</a></li>
            )}
            {contacto.correo && (
              <li><a className="enlace" href={`mailto:${contacto.correo}`}>{contacto.correo}</a></li>
            )}
            {redes.map((r) => {
              const Icono = iconoRed[r.id];
              return r.perfil ? (
                <li key={r.id}><a className="enlace" href={r.perfil} target="_blank" rel="noopener noreferrer"><Icono width={18} height={18} /> {r.nombre}</a></li>
              ) : (
                <li key={r.id} className="dato__pendiente"><Icono width={18} height={18} /> {r.nombre}: enlace por confirmar</li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
