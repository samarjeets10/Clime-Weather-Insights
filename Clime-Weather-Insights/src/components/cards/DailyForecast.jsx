import Card from './Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '../../api'
function DailyForecast() {

    const {data} = useSuspenseQuery({
        queryKey: ['weather'],
        queryFn: () => getWeather({lat: 50, lon: 50})
    });

    const daily = JSON.stringify(data?.daily ?? {}).slice(0, 100);

  return (
    <Card title="Daily Forecast">
        <div className='flex flex-col gap-4'>
            {data.daily.temperature_2m_max(day => (
                <div key={day.dt} className="flex justify-between">
                    <p>DATE</p>
                    
                </div>
            ))}
        </div>
    </Card>
  )
}

export default DailyForecast