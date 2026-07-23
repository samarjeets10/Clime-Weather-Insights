import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import MapClick from './MapClick'

function Map({ coords, onMapClick }) {

    const {lat, lon} = coords;

  return (
    <MapContainer center={[lat, lon]} zoom={5} scrollWheelZoom={false} style={{ width: "600px", height: "500px"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapClick onMapClick={onMapClick} />
        <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

export default Map