import Card from './Card'

function AdditionalInfo({current, daily}) {
    
    const sunrise = daily?.sunrise[0];
    const sunset = daily?.sunset[0]; 

    const rows = [
        {
            label: "Cloudiness (%)",
            value: current?.cloud_cover,
        },
        {
            label: "UV Index",
            value: daily?.uv_index_max?.[0]
        },
        {
            label: "Wind Direction",
            value: `${current?.wind_direction_10m}°`
        },
        {
            label: "Pressure (hPa)",
            value: current?.pressure_msl
        },
        {
            label: "Sunrise",
            value: sunrise
                ? new Date(sunrise).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })
                : '--',
        },
        {
            label: "Sunset",
            value: sunset ?
                new Date(sunset).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                }) : '--'
        },
    ]


  return (
    <Card title="Additional Weather Info" childrenClassName="flex flex-col gap-8">
        {
            rows.map((row) => (
                <div key={row.label} className='flex justify-between'>
                    <span className='text-gray-500'>{row.label}</span>
                    <span>{row.value}</span>
                </div>
            ))
        }
    </Card>
  )
}

export default AdditionalInfo