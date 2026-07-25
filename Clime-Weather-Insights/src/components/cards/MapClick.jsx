import { useMap } from 'react-leaflet';

function MapClick({ onMapClick, coords }) {

    const map = useMap();
    map.panTo([coords.lat, coords.lon])

    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        onMapClick(lat, lng);
    })

  return null;
}

export default MapClick