import Card from './Card'
import { WeatherIcons } from '../../utils/WeatherIcons'

function CurrentWeather({ current, timeZone }) {

    const code = current?.weather_code;
    const info = WeatherIcons(code, "w-12 h-12");
    const localTime = current?.time ? 
                new Intl.DateTimeFormat('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: timeZone,
                }).format(new Date(current.time))
                : '--';

    
  return (
    <Card title="Current Weather" childrenClassName="flex flex-col items-center gap-6">
        <div className='flex flex-col items-center gap-3'>
            <h2 className='text-6xl font-semibold text-center'>{Math.round(current?.temperature_2m)}°C</h2>
            <span>{info.icon}</span>
            <h3 className='text-xl capitalize'>{info.label}</h3>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='text-xl text-center'>Local Time:</p>
            <h3 className='text-4xl font-semibold'>{localTime}</h3>
        </div>
        <div className='w-full flex justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Feels Like</p>
                <p>{Math.round(current?.apparent_temperature)}°C</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Humidity</p>
                <p>{Math.round(current?.relative_humidity_2m)}%</p>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Wind Speed</p>
                <p>{current?.wind_speed_10m} km/h</p>
            </div>
        </div>
    </Card>
  )
}

export default CurrentWeather