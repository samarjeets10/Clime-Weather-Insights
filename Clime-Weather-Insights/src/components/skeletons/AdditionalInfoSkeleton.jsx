import Card from '../cards/Card'
import { Skeleton } from '../ui/skeleton'

function AdditionalInfoSkeleton() {
  return (
    <Card title="Additional Weather Info" childrenClassName="grid grid-cols-2 md:grid-cols-4 gap-8">
        {
            Array.from({length: 8}).map((_, index) => (
                <div key={`additional-info-skeleton-${index}`} className='p-4 flex flex-col gap-8 bg-accent border shadow-sm dark:border-none rounded-xl'>
                    <div className='flex justify-between items-center gap-4'>
                        <Skeleton className='size-8' />
                        <Skeleton className='w-5 h-4' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Skeleton className='h-4 w-4' />
                        <Skeleton className='h-4 w-4' />
                    </div>
                </div>
            ))
        }
    </Card>
  )
}

export default AdditionalInfoSkeleton