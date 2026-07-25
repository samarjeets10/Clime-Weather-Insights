import { useEffect } from 'react'
import { useMap } from 'react-leaflet'
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

const MAPTILE_API_KEY = import.meta.env.VITE_MAPTILE_API_KEY;

function MapTileLayer() {

    const map = useMap();
    useEffect(() => {

        const tileLayer = new MaptilerLayer({
            style: 'basic-v2-dark', 
            apiKey: MAPTILE_API_KEY,
        });

        tileLayer.addTo(map);

        return () => {map.removeLayer(tileLayer)}
    }, [map]);

  return null
}

export default MapTileLayer