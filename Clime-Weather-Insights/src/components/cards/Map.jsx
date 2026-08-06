import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MapClick from './MapClick'
import MapTileLayer from './MapTileLayer';
import L from 'leaflet';

// Use stable CDN paths to completely bypass Vite local bundling issues
const customMarkerIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
      <Marker position={[lat, lon]} icon={customMarkerIcon} />
    </MapContainer>
  )
}

export default Map








// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
// import "leaflet/dist/leaflet.css"
// import MapClick from './MapClick'
// import MapTileLayer from './MapTileLayer';
// import L from 'leaflet';
// import markerIcon from 'leaflet/dist/images/marker-icon.png';
// import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
// import markerShadow from 'leaflet/dist/images/marker-shadow.png';
// 
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconUrl: markerIcon,
//   iconRetinaUrl: markerIcon2x,
//   shadowUrl: markerShadow,
// });
// 
// const API_KEY = import.meta.env.VITE_API_KEY;
// 
// function Map({ coords, onMapClick, mapType }) {
// 
//     const {lat, lon} = coords;
// 
//   return (
//     <MapContainer 
//     center={[lat, lon]} 
//     zoom={5} 
//     scrollWheelZoom={true} 
//     style={{ width: "100%", height: "100%"}}>
//       <MapTileLayer />
// 
//       <TileLayer opacity={0.6} key={mapType} url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
// 
//       <MapClick onMapClick={onMapClick} coords={coords} />
//       <Marker position={[lat, lon]} />
//     </MapContainer>
//   )
// }
// 
// export default Map