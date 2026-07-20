import { useQuery } from '@tanstack/react-query'
import { getWeather } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'
import CurrentWeather from './components/cards/CurrentWeather'
import AdditionalInfo from './components/cards/AdditionalInfo'

function App() {
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 16, lon: 74 })
  })

  return (
    <div className='flex flex-col gap-8'>
      <CurrentWeather current={data?.current} timeZone={data?.timezone} />
      <HourlyForecast hourly={data?.hourly} />
      <DailyForecast daily={data?.daily} />
      <AdditionalInfo current={data?.current} daily={data?.daily} />
    </div>
  )
}

export default App