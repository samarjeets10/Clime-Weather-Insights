import Card from './Card'
 import Cloud from '../../assets/cloud.svg?react'
 import Sunrise from '../../assets/sunrisesvg.svg?react'
 import Sunset from '../../assets/sunset.svg?react'
 import Pressure from '../../assets/pressure.svg?react'
 import Wind from '../../assets/wind.svg?react'
 import Uv from '../../assets/uv.svg?react'
 import { useSuspenseQuery } from '@tanstack/react-query'
 import { getWeather } from '@/api'


function AdditionalInfo({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['weather', coords.lat, coords.lon],
        queryFn: () => getWeather({ lat: coords.lat, lon: coords.lon })
    })

    const current = data?.current;
    const daily = data?.daily;
    
    const sunrise = daily?.sunrise[0];
    const sunset = daily?.sunset[0]; 

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
    ];

  return (
    <Card title="Additional Weather Info" childrenClassName="grid grid-cols-1 md:grid-cols-2 gap-8">
        {
            rows.map(({label, value, type, Icon}) => (
                <div key={label} className='flex justify-between items-center bg-sidebar-accent p-2 rounded-lg'>
                    <div className='flex items-center gap-4'>
                        <span className='text-gray-500'>{label}</span>
                        <Icon className='size-8' />
                    </div>
                    <span>
                        <FormatComponent value={value} type={type} />
                    </span>
                </div>
            ))
        }
    </Card>
  )
}


function FormatComponent({value, type}) {

    if (value === undefined || value === null) return '--';
        
    if (type === 'time') {
        return new Date(value).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        })
    }

    return value;
}

export default AdditionalInfo