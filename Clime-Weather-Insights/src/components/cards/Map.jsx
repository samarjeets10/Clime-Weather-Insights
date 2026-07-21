import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function Map() {
  return (
    <MapContainer center={[16, 74]} zoom={5} scrollWheelZoom={false} style={{ width: "900px", height: "500px"}}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[16, 74]} />
    </MapContainer>
  )
}

export default Map