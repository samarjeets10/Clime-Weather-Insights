import { useMap } from 'react-leaflet';

function MapClick({ onMapClick }) {

    const map = useMap();

    map.on('click', (e) => {
        const { lat, lng } = e.latlng;
        map.panTo([lat, lng]);
        onMapClick(lat, lng);
    })

  return null;
}

export default MapClick