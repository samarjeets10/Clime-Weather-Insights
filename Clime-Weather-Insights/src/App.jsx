import { useQuery } from '@tanstack/react-query'
import { getWeather } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'
import CurrentWeather from './components/CurrentWeather'

function App() {
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 30, lon: 31 })
  })

  return (
    <div className='flex flex-col gap-8'>
      <CurrentWeather current={data?.current} />
      <HourlyForecast hourly={data?.hourly} />
      <DailyForecast daily={data?.daily} />
    </div>
  )
}

export default App