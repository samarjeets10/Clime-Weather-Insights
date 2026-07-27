import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

function MapClick({ onMapClick, coords }) {

  const map = useMap();

  useEffect(() => {
    map.panTo([coords.lat, coords.lon]);
  }, [map, coords.lat, coords.lon]);

  useEffect(() => {
    function handleClick(e) {
      const { lat, lng } = e.latlng;
      onMapClick(lat, lng);
    }

    map.on('click', handleClick);

    return () => {
      map.off('click', handleClick);
    }

  }, [map, onMapClick]);

  return null;
}

export default MapClick