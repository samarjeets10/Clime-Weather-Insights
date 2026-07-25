import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MapClick from './MapClick'
import MapTileLayer from './MapTileLayer';

const API_KEY = import.meta.env.VITE_API_KEY;

function Map({ coords, onMapClick, mapType }) {

    const {lat, lon} = coords;

  return (
    <MapContainer 
    center={[lat, lon]} 
    zoom={5} 
    scrollWheelZoom={true} 
    style={{ width: "100%", height: "500px"}}>

        {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /> */}

        <MapTileLayer />
       
        <TileLayer key={mapType} url={`https://tile.openweathermap.org/map/${mapType}/{z}/{x}/{y}.png?appid=${API_KEY}`} />
        <MapClick onMapClick={onMapClick} coords={coords} />
        <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

export default Map