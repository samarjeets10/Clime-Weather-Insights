import React from 'react'
import Card from './Card'
import { WeatherIcons } from '../../utils/WeatherIcons';

function HourlyForecast({ hourly }) {
  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex flex-row gap-6 overflow-x-scroll">
        {
           hourly?.time?.map((hour, index) => {
            
            const code = hourly?.weather_code?.[index];
            const info = WeatherIcons(code);
            const temp = hourly?.temperature_2m?.[index];
            const time = new Date(hour).toLocaleTimeString(undefined, {
                hour: 'numeric',
                minute: "2-digit",
                hour12: true,
            });

            return (
                <div className='flex flex-col items-center gap-2 p-2'>
                    <p className='whitespace-nowrap'>{time}</p>
                    <div>{info.icon}</div>
                    <p>{temp}°C</p>
                </div>
            )
           })
        }
    </Card>
  )
}

export default HourlyForecast