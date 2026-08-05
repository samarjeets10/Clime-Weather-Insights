import Card from './cards/Card'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getWeather } from '@/api'
import clsx from 'clsx'
import { getUvLevel, getUvColor, uvRanges } from '@/utils/uvRanges'

function UVIndex( { coords } ) {

  const { data } = useSuspenseQuery({
    queryKey: ['weather', coords.lat, coords.lon],
    queryFn: () => getWeather(coords)
  });

  const value = data?.daily?.uv_index_max?.[0] ?? "--";
  const level = getUvLevel(value);
  const color = getUvColor(level);
  const max = 12;

  return (
     <Card title="UV Index (Today's Max)" childrenClassName="flex flex-col gap-3">
      <div className='flex justify-between items-center'>
        <span className='text-lg font-bold'>UV</span>
        <span className='text-lg font-semibold'>{value}</span>
      </div>
      <div className='w-full h-2 rounded bg-sidebar overflow-hidden'>
        <div className={clsx('h-full rounded', color)} style={{ width: `${Math.min((value / max) * 100, 100)}%` }} />
      </div>
      <div className='flex justify-between text-xs'>
        <p>0</p>
        <p>{max}+</p>
      </div>
      <div className='flex justify-between flex-wrap gap-1'>
        {Object.keys(uvRanges).map((quality) => (
          <span
            key={quality}
            className={clsx('px-2 py-1 rounded-md text-xs font-medium', quality === level ? color : 'bg-muted text-muted-foreground')}
          >
            {quality}
          </span>
        ))}
      </div>
    </Card>
  )
}

export default UVIndex