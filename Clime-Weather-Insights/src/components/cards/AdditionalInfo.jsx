import Card from './Card'
 import Cloud from '../../assets/cloud.svg?react'
 import Sunrise from '../../assets/sunrisesvg.svg?react'
 import Sunset from '../../assets/sunset.svg?react'
 import Pressure from '../../assets/pressure.svg?react'
 import Wind from '../../assets/wind.svg?react'
 import Uv from '../../assets/uv.svg?react'
 import WindGustIcon from '../../assets/windgust.svg?react'
 import Eye from '../../assets/eye.svg?react'
 import { useSuspenseQuery } from '@tanstack/react-query'
 import { getWeather } from '@/api'
 import { getMetricSubtext, FormatComponent } from '../../utils/WeatherUtil'


function AdditionalInfo({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords.lat, coords.lon],
        queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
    })

    const current = data?.current;
    const daily = data?.daily;
    const hourly = data?.hourly;
    
    const sunrise = daily?.sunrise[0];
    const sunset = daily?.sunset[0]; 
    const visibilityKm = hourly?.visibility?.[0] != null ? (hourly.visibility[0] / 1000).toFixed(1) : undefined;


    const rows = [
        { 
            label: "Cloudiness (%)", value: current?.cloud_cover, 
            type: "number",
            Icon: Cloud 
        },
        { 
            label: "UV Index", value: daily?.uv_index_max?.[0],
            type: "number",
            Icon: Uv 
        },
        { 
            label: "Wind Direction", value: `${current?.wind_direction_10m}°`, 
            type: "text",
            Icon: Wind 
        },
        { 
            label: "Pressure (hPa)", value: current?.pressure_msl, 
            type: "number",
            Icon: Pressure
        },
        { 
            label: "Sunrise", 
            value: sunrise, 
            type: "time",
            Icon: Sunrise 
        },
        { 
            label: "Sunset",
            value: sunset,
            type: "time",
            Icon: Sunset
        },
        { 
            label: "Wind Gusts (km/h)", value: current?.wind_gusts_10m,
            type: "number",
            Icon: WindGustIcon
        },
        { 
            label: "Visibility (km)", value: visibilityKm,
            type: "text",
            Icon: Eye
        },
    ];

  return (
    <Card title="Additional Weather Info" childrenClassName="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
            rows.map(({label, value, type, Icon}) => (
                <div key={value} className='p-4 flex flex-col gap-8 bg-accent border shadow-sm dark:border-none rounded-xl'>
                    <div className='flex justify-between items-center gap-4'>
                        <Icon className='size-6' />
                        <p className='text-gray-400'>{label}</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                       <h2 className='text-3xl font-bold'>
                            <FormatComponent value={value} type={type} />
                       </h2>
                       <p className='text-xs font-semibold text-muted-forground leading-relaxed'>{getMetricSubtext(label, value)}</p>
                    </div>
                </div>
            ))
        }
    </Card>
  )
}

export default AdditionalInfo