import { useQuery } from '@tanstack/react-query'
import { getWeather } from './api'
import Card from './components/cards/Card'
import DailyForecast from './components/cards/DailyForecast'

function App() {
  const { data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({ lat: 50, lon: 50 })
  })

  const current = JSON.stringify(data?.current ?? {}).slice(0, 100)
  const hourly = JSON.stringify(data?.hourly ?? {}).slice(0, 100)

  return (
    <div className='flex flex-col gap-8'>
      <Card title="Current Weather">{current}</Card>
      <DailyForecast daily={data?.daily} />
      <Card title="Hourly Forecast (48 Hours)">{hourly}</Card>
    </div>
  )
}

export default App