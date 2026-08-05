import { Suspense } from 'react'
import AirPollution from './AirPollution'
import clsx from 'clsx'
import ChevronLeft from '../assets/chevron.svg?react'
import SidePanelSkeleton from './skeletons/SidePanelSkeleton'
import UVIndex from './UVIndex'

function SidePanel({ coords, isSidePanelOpen, setIsSidePanelOpen }) {
  return (
    <div className={clsx('fixed top-0 right-0 h-screen w-(--sidebar-width) shadow-md bg-sidebar z-1001 py-8 px-4 overflow-y-scroll transition-transform duration-300 lg:translate-x-0', isSidePanelOpen ? 'translate-x-0!' : 'translate-x-full')}>
        <button onClick={() => setIsSidePanelOpen(false)}>
          <ChevronLeft className='size-8 cursor-pointer -ml-2 lg:hidden' />
        </button>
        <Suspense fallback={<SidePanelSkeleton />}>
            <AirPollution coords={coords} />
        </Suspense>
        <div className='mt-6'>
          <Suspense fallback={<SidePanelSkeleton />}>
            <UVIndex coords={coords} />
          </Suspense>
        </div>
    </div>
  )
}

export default SidePanel