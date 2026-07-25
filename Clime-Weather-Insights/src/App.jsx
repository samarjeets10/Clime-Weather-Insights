import { useQuery } from '@tanstack/react-query'
import { getGeoCode, getWeather } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'
import CurrentWeather from './components/cards/CurrentWeather'
import AdditionalInfo from './components/cards/AdditionalInfo'
import Map from './components/cards/Map'
import { useState } from 'react'
import LocationDropdown from './components/dropdowns/LocationDropdown'

function App() {

  const [coordinates, setCoords] = useState({lat: 16, lon: 74});
  const [location, setLocation] = useState('Mumbai');

  const { data: geoCodeData } = useQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeoCode(location),
    enabled: location !== 'custom',
  });

  const coords = location === 'custom' ? coordinates : {
    lat: geoCodeData?.results?.[0]?.latitude ?? coordinates.lat,
    lon: geoCodeData?.results?.[0]?.longitude ?? coordinates.lon
  }

  const { data } = useQuery({
    queryKey: ['weather', coords.lat, coords.lon],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
  })

  const onMapClick = (lat, lon) => {
    setCoords({lat, lon});
    setLocation('custom')
  }

  

  return (
    <div className='flex flex-col gap-8'>
      <LocationDropdown location={location} setLocation={setLocation} />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather current={data?.current} timeZone={data?.timezone} />
      <HourlyForecast hourly={data?.hourly} />
      <DailyForecast daily={data?.daily}  />
      <AdditionalInfo current={data?.current} daily={data?.daily} />
    </div>
  )
}

export default App