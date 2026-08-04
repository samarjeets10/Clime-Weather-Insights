import { getAirPollution } from '@/api'
import { useSuspenseQuery } from '@tanstack/react-query'
import Card from './cards/Card';
import { Slider } from '@base-ui/react';
import clsx from 'clsx';
import Information from '../assets/information.svg?react'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

function AirPollution({ coords }) {

    const { data } = useSuspenseQuery({
        queryKey: ['pollution', coords.lat, coords.lon],
        queryFn: () => getAirPollution(coords)
    });

    const airQualityRanges = {
        SO2: {
            Good: { min: 0, max: 20 },
            Fair: { min: 20, max: 80 },
            Moderate: { min: 80, max: 250 },
            Poor: { min: 250, max: 350 },
            "Very Poor": { min: 350, max: null },
        },
        NO2: {
            Good: { min: 0, max: 40 },
            Fair: { min: 40, max: 70 },
            Moderate: { min: 70, max: 150 },
            Poor: { min: 150, max: 200 },
            "Very Poor": { min: 200, max: null },
        },
        PM10: {
            Good: { min: 0, max: 20 },
            Fair: { min: 20, max: 50 },
            Moderate: { min: 50, max: 100 },
            Poor: { min: 100, max: 200 },
            "Very Poor": { min: 200, max: null },
        },
        PM2_5: {
            Good: { min: 0, max: 10 },
            Fair: { min: 10, max: 25 },
            Moderate: { min: 25, max: 50 },
            Poor: { min: 50, max: 75 },
            "Very Poor": { min: 75, max: null },
        },
        O3: {
            Good: { min: 0, max: 60 },
            Fair: { min: 60, max: 100 },
            Moderate: { min: 100, max: 140 },
            Poor: { min: 140, max: 180 },
            "Very Poor": { min: 180, max: null },
        },
        CO: {
            Good: { min: 0, max: 4400 },
            Fair: { min: 4400, max: 9400 },
            Moderate: { min: 9400, max: 12400 },
            Poor: { min: 12400, max: 15400 },
            "Very Poor": { min: 15400, max: null },
        },
    };


  return (
    <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-semibold'>Air Pollution</h1>
        <h1 className='text-5xl font-semibold'>
            {data.list[0].main.aqi}
        </h1>
        
        <div className='flex items-center gap-2'>
            <h1 className='text-2xl font-semibold'>AQI</h1>
            <Tooltip>
                <TooltipTrigger className='cursor-pointer'>
                    <Information className='size-4' />
                </TooltipTrigger>
                <TooltipContent className="z-[200000] w-75">
                    <p> Possible values: 1, 2, 3, 4, 5. Where 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor.</p>
                </TooltipContent>
            </Tooltip>
        </div>
         
        {
            Object.entries(data.list[0].components).filter(([key]) => airQualityRanges[key.toUpperCase()]).map(([key, value]) => {

                const pollutant = airQualityRanges[key.toUpperCase()];
                const max = Math.max(pollutant['Very Poor'].min, value);
                const currentLevel = (() => {
                    for (const [level, range] of Object.entries(pollutant)) {
                        if (value >= range.min && value <= range.max) return level;
                    }
                })();

                const qualityColor = (() => {
                    switch(currentLevel) {
                        case "Good" : return 'bg-green-500'
                        case "Fair" : return 'bg-yellow-500'
                        case "Moderate" : return 'bg-orange-500'
                        case "Poor" : return 'bg-red-500'
                        case "Very Poor" : return 'bg-purple-500'
                        default: return 'bg-zinc-500'
                    }
                })();

                return (
                   <Card 
                   key={key}
                   childrenClassName="flex flex-col gap-3"
                   className="hover:scale-105 transition-transform duration-300 from-sidebar-accent to-sidebar-accent/60 gap-0!"
                   >
                        <div className='flex justify-between'>
                            <span className='text-lg font-bold capitalize'>{key}</span>
                            <span className='text-lg font-semibold'>{value}</span>
                        </div>
                        <Slider.Root disabled value={value} min={0} max={max}  className="w-full">
                            <Slider.Control className="flex items-center">
                                <Slider.Track className="h-1 w-full rounded bg-sidebar">
                                <Slider.Indicator className="h-full rounded bg-neutral-400" />
                                <Slider.Thumb className="h-4 w-4 rounded-full bg-neutral-200" />
                                </Slider.Track>
                            </Slider.Control>
                        </Slider.Root>
                        <div className='flex justify-between text-xs'>
                            <p>0</p>
                            <p>{max}</p>
                        </div>
                        <div className='flex justify-between'>
                            {
                                Object.keys(pollutant).map((quality) => (
                                    <span className={clsx('px-2 py-1 rounded-md text-xs font-medium', quality === currentLevel ? qualityColor : 'bg-muted text-muted-foreground')}>
                                        {quality}
                                    </span>
                                ))
                            }
                        </div>
                    </Card>
                )
            })
        }
    </div>
  )
}

export default AirPollution