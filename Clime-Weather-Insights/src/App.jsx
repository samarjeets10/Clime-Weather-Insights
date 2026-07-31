import { useSuspenseQuery } from '@tanstack/react-query'
import { getGeoCode } from './api'
import DailyForecast from './components/cards/DailyForecast'
import HourlyForecast from './components/cards/HourlyForecast'
import CurrentWeather from './components/cards/CurrentWeather'
import AdditionalInfo from './components/cards/AdditionalInfo'
import Map from './components/cards/Map'
import { Suspense, useState } from 'react'
import LocationDropdown from './components/dropdowns/LocationDropdown'
import MapTypeDropdown from './components/dropdowns/MapTypeDropdown'
import MapLegend from './components/cards/MapLegend'
import CurrentSkeleton from './components/skeletons/CurrentSkeleton'
import DailySkeleton from './components/skeletons/DailySkeleton'
import HourlySkeleton from './components/skeletons/HourlySkeleton'
import AdditionalInfoSkeleton from './components/skeletons/AdditionalInfoSkeleton'
import SidePanel from './components/SidePanel'
import Menu from './assets/menu-svgrepo-com.svg?react'

function App() {

  const [coordinates, setCoords] = useState({lat: 16, lon: 74});
  const [location, setLocation] = useState('Mumbai');
  const [mapType, setMapType] = useState('clouds_new');
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const { data: geoCodeData } = useSuspenseQuery({
    queryKey: ['geocode', location],
    queryFn: () => getGeoCode(location),
  });

  const coords = location === 'custom' ? coordinates : {
    lat: geoCodeData?.results?.[0]?.latitude ?? coordinates.lat,
    lon: geoCodeData?.results?.[0]?.longitude ?? coordinates.lon
  }

  const onMapClick = (lat, lon) => {
    setCoords({lat, lon});
    setLocation('custom')
  }

  return (
    <>
      <div className='flex flex-col gap-8 p-8 w-full lg:w-[calc(100dvw_-_var(--sidebar-width))] 2xl:h-screen'>

        <div className='flex gap-8'>
          <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-semibold'>Location: </h1>
            <LocationDropdown location={location} setLocation={setLocation} />
          </div>

          <div className='flex items-center gap-4'>
            <h1 className='text-2xl font-semibold'>Map Type:</h1>
            <MapTypeDropdown mapType={mapType} setMapType={setMapType} />
          </div>
          <button onClick={() => setIsSidePanelOpen(true)}>
            <Menu className='size-8 cursor-pointer invert ml-auto lg:hidden' />
          </button>
        </div>

      <div className='grid grid-cols-1 2xl:flex-1 2xl:min-h-0 md:grid-cols-2 2xl:grid-cols-4 gap-6'>

         <div className='relative col-span-1 md:col-span-2 2xl:col-span-4 h-120 2xl:h-auto 2xl:row-span-2 order-1'>
            <Map coords={coords} onMapClick={onMapClick} mapType={mapType} />
            <MapLegend mapType={mapType} />
          </div>

          <div className='col-span-1 order-2 2xl:col-start-1 2xl:row-start-3'>
            <Suspense fallback={<CurrentSkeleton />} >
              <CurrentWeather coords={coords} />
            </Suspense>
          </div>

          <div className='col-span-1 order-3 2xl:order-4 2xl:col-start-4 2xl:row-start-3'>
            <Suspense fallback={<DailySkeleton />}>
              <DailyForecast coords={coords} />
            </Suspense>
          </div>

         <div className='col-span-1 md:col-span-2 2xl:row-span-1 order-4 2xl:order-3 2xl:col-start-2 2xl:row-start-3'>
           <Suspense fallback={<HourlySkeleton />}>
              <HourlyForecast coords={coords} />
            </Suspense>
         </div>

          <div className='col-span-1 md:col-span-2 2xl:row-span-1 order-5 2xl:col-start-2 2xl:row-start-4'>
            <Suspense fallback={<AdditionalInfoSkeleton />}>
              <AdditionalInfo coords={coords} />
            </Suspense>
          </div>

        </div>
      </div>

      <SidePanel coords={coords} isSidePanelOpen={isSidePanelOpen} setIsSidePanelOpen={setIsSidePanelOpen} />
    </>
  )
}

export default App