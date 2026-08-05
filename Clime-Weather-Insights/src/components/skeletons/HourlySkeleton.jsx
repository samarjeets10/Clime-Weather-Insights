import { Skeleton } from '../ui/skeleton'
import Card from '../cards/Card'

function HourlySkeleton() {
  return (
    <Card title="Hourly Forecast (48 Hours)" childrenClassName="flex flex-row gap-6 overflow-x-scroll overflow-y-visible">
        {
          Array.from({length: 48}).map((_, index) => (
              <div key={`hourly-skeleton-${index}`} className='flex flex-col items-center gap-2 p-2 2xl:justify-between'>
                <Skeleton className='w-15 h-6 2xl:scale-110' />
                <Skeleton className='size-8 rounded-full' />
                <Skeleton className='w-8 h-6 2xl:scale-110' />
              </div>
            )
          )
        }
    </Card>
  )
}

export default HourlySkeleton