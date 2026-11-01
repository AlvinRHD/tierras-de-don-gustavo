import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { sitio, ubicacion } from '../data/sitio';

// Marcador propio (divIcon) para no depender de imágenes de Leaflet que Vite no resuelve.
const marcador = L.divIcon({
  className: 'marcador',
  html: '<span></span>',
  iconSize: [30, 38],
  iconAnchor: [15, 38],
  popupAnchor: [0, -34],
});

export default function MapaLeaflet() {
  return (
    <MapContainer
      center={[ubicacion.lat, ubicacion.lng]}
      zoom={ubicacion.zoom}
      scrollWheelZoom={false}
      className="mapa__lienzo"
      aria-label={`Mapa con la ubicación de ${sitio.nombre}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[ubicacion.lat, ubicacion.lng]} icon={marcador} keyboard>
        <Popup>
          <strong>{sitio.nombre}</strong>
          {!ubicacion.confirmada && <><br />Ubicación aproximada (por confirmar)</>}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
