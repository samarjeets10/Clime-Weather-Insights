import { getAirPollution } from '@/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './cards/Card';

function AirPollution({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['pollution'],
        queryFn: () => getAirPollution(coords)
    });

  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Air Pollution</h1>
        <h1 className='text-5xl font-semibold'>
            {data.list[0].main.aqi}
        </h1>
         <h1 className='text-2xl font-semibold'>AQI</h1>
        {
            Object.entries(data.list[0].components).map(([key, value]) => {
                return (
                   <Card 
                   key={key}
                   className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60"
                   >
                        <div className='flex justify-between'>
                            <span className='text-lg font-bold capitalize'>{key}</span>
                            <span className='text-lg font-semibold'>{value}</span>
                        </div>
                   </Card>
                )
            })
        }
    </div>
  )
}

export default AirPollution