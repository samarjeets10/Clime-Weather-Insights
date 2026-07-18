
import { weatherSchema } from "./schemas/weatherSchemas";
const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }) {

    try {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`);
        const data = await resp.json();

        return weatherSchema.parse(data);

    } catch (error) {
        throw Error("Something went wrong!", error);
    }
}