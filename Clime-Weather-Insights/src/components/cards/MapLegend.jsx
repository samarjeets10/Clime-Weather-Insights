import React from 'react'

function MapLegend({ mapType }) {

    const mapLegends = {
        temp_new: {
            title: "Temperature (°C)",
            unit: "°C",
            stops: [
                { value: -30, color: "#8257DB" },
                { value: -20, color: "#208CEC" },
                { value: -10, color: "#20C4E8" },
                { value: 0, color: "#23DDDD" },
                { value: 10, color: "#C2FF28" },
                { value: 20, color: "#FFF028" },
                { value: 25, color: "#FFC228" },
                { value: 30, color: "#FC8014" },
            ],
        },

        precipitation_new: {
            title: "Precipitation (mm)",
            unit: "mm",
            stops: [
                { value: 0, color: "transparent" },
                { value: 1, color: "rgba(110,110,205,0.3)" },
                { value: 10, color: "rgba(80,80,225,0.7)" },
                { value: 140, color: "rgba(20,20,255,0.9)" },
            ],
        },

        clouds_new: {
            title: "Cloud Cover (%)",
            unit: "%",
            stops: [
                { value: 0, color: "rgba(255,255,255,0)" },
                { value: 25, color: "rgba(250,250,255,0.3)" },
                { value: 50, color: "rgba(247,247,255,0.5)" },
                { value: 75, color: "rgba(244,244,255,1)" },
                { value: 100, color: "rgba(240,240,255,1)" },
            ],
        },

        pressure_new: {
            title: "Pressure (Pa)",
            unit: "Pa",
            stops: [
                { value: 94000, color: "#0073FF" },
                { value: 98000, color: "#4BD0D6" },
                { value: 101000, color: "#B0F720" },
                { value: 104000, color: "#FB5515" },
                { value: 108000, color: "#C60000" },
            ],
        },

        wind_new: {
            title: "Wind Speed (m/s)",
            unit: "m/s",
            stops: [
                { value: 1, color: "rgba(255,255,255,0)" },
                { value: 5, color: "rgba(238,206,206,0.4)" },
                { value: 15, color: "rgba(179,100,188,0.7)" },
                { value: 25, color: "rgba(63,33,59,0.8)" },
                { value: 50, color: "rgba(116,76,172,0.9)" },
                { value: 100, color: "rgba(70,0,175,1)" },
                { value: 200, color: "rgba(13,17,38,1)" },
            ],
        },

        snow_new: {
                title: "Snow (mm)",
                unit: "mm",
                stops: [
                { value: 0, color: "transparent" },
                { value: 5, color: "#00D8FF" },
                { value: 10, color: "#00B6FF" },
                { value: 25, color: "#9549FF" },
            ],
        },
    };

    const legend = mapLegends[mapType];
    if (!legend) return null;

    const maxValue = legend.stops[legend.stops.length - 1].value;
    const gradientStops = legend.stops.map((stop) => `${stop.color} ${(stop.value / maxValue) * 100}%`).join(", ")

  return (
    <div className='absolute right-4 top-4 z-[1000] w-96  rounded-xl shadow-lg p-4 bg-background/60 border border-accent/70 flex flex-col gap-3'>
        <h3 className='text-sm font-semibold text-foreground'>{legend.title}</h3>
        <div
        className='w-full h-6 rounded-xl border border-accent/70' 
        style={{background: `linear-gradient(to right, ${gradientStops})`}} />
        <div className='flex justify-between text-xs text-foreground'>
            <span>{legend.stops[0].value} {legend.unit}</span>
            <span>{legend.stops[legend.stops.length - 1].value} {legend.unit}</span>
        </div>
    </div>
  )
}

export default MapLegend