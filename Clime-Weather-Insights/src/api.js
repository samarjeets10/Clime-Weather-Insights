
import { weatherSchema } from "./schemas/weatherSchemas";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }) {

    try {
        const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,uv_index&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max&timezone=auto`);
        const data = await resp.json();

        return weatherSchema.parse(data);

    } catch (error) {
        throw Error("Something went wrong!", error);
    }
}