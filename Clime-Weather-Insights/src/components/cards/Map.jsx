import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MapClick from './MapClick'
import MapTileLayer from './MapTileLayer';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const API_KEY = import.meta.env.VITE_API_KEY;

function Map({ coords, onMapClick, mapType }) {

    const {lat, lon} = coords;

  return (
    <MapContainer 
    center={[lat, lon]} 
    zoom={5} 
    scrollWheelZoom={true} 
    style={{ width: "100%", height: "100%"}}>
      <MapTileLayer />

      <TileLayer opacity={0.6} key={mapType} url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />

      <MapClick onMapClick={onMapClick} coords={coords} />
      <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

export default Map