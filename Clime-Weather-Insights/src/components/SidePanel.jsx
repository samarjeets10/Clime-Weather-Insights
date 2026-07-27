import { Suspense } from 'react'
import AirPollution from './AirPollution'

function SidePanel({ coords }) {
  return (
    <div className='fixed top-0 right-0 h-screen w-90 shadow-md bg-sidebar z-1000 py-8 px-4'>
        <Suspense>
            <AirPollution coords={coords} />
        </Suspense>
    </div>
  )
}

export default SidePanel