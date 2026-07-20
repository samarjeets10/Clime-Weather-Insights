import React from 'react'
import Card from './cards/Card'
import { WeatherIcons } from '../utils/WeatherIcons'

function CurrentWeather({ current }) {

    const code = current?.weather_code;
    const info = WeatherIcons(code);
  return (
    <Card title="Current Weather" childrenClassName="flex flex-col items-center">
        <div className='flex flex-col items-center gap-2'>
            <h2 className='text-6xl font-semibold text-center'>{Math.round(current?.temperature_2m)}°C</h2>
            <span>{info.icon}</span>
        </div>
    </Card>
  )
}

export default CurrentWeather