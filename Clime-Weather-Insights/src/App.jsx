import { useQuery } from '@tanstack/react-query'
import { getWeather } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'
import CurrentWeather from './components/cards/CurrentWeather'
import AdditionalInfo from './components/cards/AdditionalInfo'
import Map from './components/cards/Map'
import { useState } from 'react'
import LocationDropdown from './components/dropdowns/LocationDropdown'

function App() {

  const [coords, setCoords] = useState({lat: 10, lon: 29});

  const { data } = useQuery({
    queryKey: ['weather', coords.lat, coords.lon],
    queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
  })

  const onMapClick = (lat, lon) => {
    setCoords({lat, lon});
  }

  return (
    <div className='flex flex-col gap-8'>
      <LocationDropdown />
      <Map coords={coords} onMapClick={onMapClick} />
      <CurrentWeather current={data?.current} timeZone={data?.timezone} />
      <HourlyForecast hourly={data?.hourly} />
      <DailyForecast daily={data?.daily}  />
      <AdditionalInfo current={data?.current} daily={data?.daily} />
    </div>
  )
}

export default App