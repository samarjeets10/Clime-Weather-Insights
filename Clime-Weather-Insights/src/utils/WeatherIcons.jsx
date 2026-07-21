import clsx from 'clsx'
import { 
  Sun, 
  CloudSun, 
  Cloud, 
  CloudFog, 
  CloudDrizzle, 
  CloudRain, 
  CloudSnow, 
  CloudLightning,
  Snowflake,
  HelpCircle,
  Wind
} from 'lucide-react';

export function WeatherIcons(code, size = "w-8 h-8") {
  const weatherMap = {
    0:  { label: "Clear sky", 
          icon: <Sun className={clsx(size, "text-yellow-500")} /> 
        },
    1:  { label: "Mainly clear", icon: <CloudSun className={clsx(size, "text-yellow-400")} /> },
    2:  { label: "Partly cloudy", icon: <CloudSun className={clsx(size, "text-slate-400")} /> },
    3:  { label: "Overcast", icon: <Cloud className={clsx(size, "text-slate-500")} /> },
    45: { label: "Fog", icon: <CloudFog className={clsx(size, "text-slate-400")} /> },
    48: { label: "Depositing rime fog", icon: <CloudFog className={clsx(size, "text-slate-400")} /> },
    51: { label: "Light Drizzle", icon: <CloudDrizzle className={clsx(size, "text-blue-400")} /> },
    53: { label: "Moderate Drizzle", icon: <CloudDrizzle className={clsx(size, "text-blue-500")} /> },
    55: { label: "Dense Drizzle", icon: <CloudDrizzle className={clsx(size, "text-blue-600")} /> },
    56: { label: "Light Freezing Drizzle", icon: <CloudSnow className={clsx(size, "text-blue-300")} /> },
    57: { label: "Dense Freezing Drizzle", icon: <CloudSnow className={clsx(size, "text-blue-400")} /> },
    61: { label: "Slight Rain", icon: <CloudRain className={clsx(size, "text-blue-400")} /> },
    63: { label: "Moderate Rain", icon: <CloudRain className={clsx(size, "text-blue-500")} /> },
    65: { label: "Heavy Rain", icon: <CloudRain className={clsx(size, "text-blue-600")} /> },
    66: { label: "Light Freezing Rain", icon: <CloudSnow className={clsx(size, "text-blue-400")} /> },
    67: { label: "Heavy Freezing Rain", icon: <CloudSnow className={clsx(size, "text-blue-500")} /> },
    71: { label: "Slight Snowfall", icon: <Snowflake className={clsx(size, "text-sky-200")} /> },
    73: { label: "Moderate Snowfall", icon: <Snowflake className={clsx(size, "text-sky-300")} /> },
    75: { label: "Heavy Snowfall", icon: <Snowflake className={clsx(size, "text-sky-400")} /> },
    77: { label: "Snow Grains", icon: <Snowflake className={clsx(size, "text-sky-200")} /> },
    80: { label: "Slight Rain Showers", icon: <CloudRain className={clsx(size, "text-blue-400")} /> },
    81: { label: "Moderate Rain Showers", icon: <CloudRain className={clsx(size, "text-blue-500")} /> },
    82: { label: "Violent Rain Showers", icon: <CloudLightning className={clsx(size, "text-blue-600")} /> },
    85: { label: "Slight Snow Showers", icon: <CloudSnow className={clsx(size, "text-sky-300")} /> },
    86: { label: "Heavy Snow Showers", icon: <CloudSnow className={clsx(size, "text-sky-400")} /> },
    95: { label: "Thunderstorm", icon: <CloudLightning className={clsx(size, "text-yellow-500")} /> },
    96: { label: "Thunderstorm with slight hail", icon: <CloudLightning className={clsx(size, "text-yellow-600")} /> },
    99: { label: "Thunderstorm with heavy hail", icon: <CloudLightning className={clsx(size, "text-red-500")} /> },
  }

  return weatherMap[code] || { 
    label: "Unknown", 
    icon: <HelpCircle className={clsx(size, "text-slate-400")} /> 
  };
};