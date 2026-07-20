import Card from './Card'
import { WeatherIcons } from '../../utils/WeatherIcons'

function DailyForecast({ daily }) {
  return (
    <Card title="Daily Forecast" childrenClassName="flex flex-col gap-4">
        {daily?.time?.map((date, index) => {
          const code = daily?.weather_code?.[index];
          const info = WeatherIcons(code);

          const day = daily?.temperature_2m_mean?.[index];
          const max = daily?.temperature_2m_max?.[index];
          const min = daily?.temperature_2m_min?.[index];

          return (
            <div key={date} className='flex justify-between items-center'>
              <p className='w-9'>{new Date(date + 'T00:00:00').toLocaleDateString(undefined, {
                weekday: 'short'
              })}</p>
              <div className='flex justify-center items-center'>{info.icon}</div>
              <p className='text-center'>{Math.round(day)}°C</p>
              <p className='text-center text-gray-500/75'>{Math.round(max)}°C</p>
              <p className='text-center text-gray-500/75'>{Math.round(min)}°C</p>
            </div>
          )
        })}
    </Card>
  )
}

export default DailyForecast