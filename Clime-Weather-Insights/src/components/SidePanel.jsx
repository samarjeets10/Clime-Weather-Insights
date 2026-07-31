import { Suspense } from 'react'
import AirPollution from './AirPollution'
import clsx from 'clsx'
import ChevronLeft from '../assets/chevron.svg?react'
import SidePanelSkeleton from './skeletons/SidePanelSkeleton'

function SidePanel({ coords, isSidePanelOpen, setIsSidePanelOpen }) {
  return (
    <div className={clsx('fixed top-0 right-0 h-screen w-90 shadow-md bg-sidebar z-1000 py-8 px-4 overflow-y-scroll transition-transform duration-300', isSidePanelOpen ? 'translate-x-0' : 'translate-x-full')}>
        <button onClick={() => setIsSidePanelOpen(false)}>
          <ChevronLeft className='size-8 cursor-pointer invert -ml-2' />
        </button>
        <Suspense fallback={<SidePanelSkeleton />}>
            <AirPollution coords={coords} />
        </Suspense>
    </div>
  )
}

export default SidePanel