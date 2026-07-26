import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function MapClick({ onMapClick, coords }) {

  const map = useMap();

  useEffect(() => {
    map.panTo([coords.lat, coords.lon]);
  }, [map, coords.lat, coords.lon]);

   useEffect(() => {
    map.on('click', (e) => {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
    })
   }, [map, onMapClick]);

  return null;
}

export default MapClick