import Card from '../cards/Card'
import { Skeleton } from '../ui/skeleton'
function CurrentSkeleton() {
  return (
    <Card title="Current Weather" childrenClassName="flex flex-col items-center justify-center gap-6 2xl:justify-between">
        <div className='flex flex-col items-center justify-between gap-4 2xl:gap-6'>
            <Skeleton className='w-30 h-15' />
            <Skeleton className='size-14 rounded-full' />
            <Skeleton className='w-36 h-7' />
        </div>
        <div className='flex flex-col text-center gap-2'>
            <p className='text-xl text-center'>Local Time:</p>
            <Skeleton className='w-36 h-10' />
        </div>
        <div className='w-full flex items-center justify-between'>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Feels Like</p>
                <Skeleton className='w-16 h-6' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Humidity</p>
                <Skeleton className='w-16 h-6' />
            </div>
            <div className='flex flex-col items-center gap-2'>
                <p className='text-lg text-gray-500'>Wind Speed</p>
                <Skeleton className='w-16 h-6' />
            </div>
        </div>
    </Card>
  )
}

export default CurrentSkeleton