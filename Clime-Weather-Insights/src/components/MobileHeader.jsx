import { Menu } from "lucide-react"
import LightDarkToggle from "./LightDarkToggle"

function MobileHeader({ setIsSidePanelOpen }) {
  return (
    <div className='w-full h-16 p-4 bg-background sticky top-0 xs:hidden flex justify-between z-1000'>
        <h1 className="text-foreground font-bold text-3xl">Clime</h1>

         <div className="flex items-center gap-2">
            <LightDarkToggle />
            <button 
              onClick={() => setIsSidePanelOpen(true)}
              className="invert">
                <Menu className='size-8 cursor-pointer invert' />
            </button>
         </div>
    </div>
  )
}

export default MobileHeader