import { weatherSchema } from "./schemas/weatherSchemas";
// const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.open-meteo.com/v1/forecast";

const CURRENT_PARAMS = [
  "temperature_2m", "relative_humidity_2m", "apparent_temperature", "is_day",
  "precipitation", "rain", "showers", "snowfall", "weather_code",
  "cloud_cover", "pressure_msl", "surface_pressure",
  "wind_speed_10m", "wind_direction_10m", "wind_gusts_10m",
].join(",");

const HOURLY_PARAMS = [
  "temperature_2m", "relative_humidity_2m", "apparent_temperature", "dew_point_2m",
  "precipitation_probability", "precipitation", "rain", "showers", "snowfall",
  "weather_code", "pressure_msl", "surface_pressure", "cloud_cover", "visibility",
  "wind_speed_10m", "wind_direction_10m", "wind_gusts_10m", "uv_index",
].join(",");

const DAILY_PARAMS = [
  "weather_code", "temperature_2m_max", "temperature_2m_min", "temperature_2m_mean",
  "apparent_temperature_max", "apparent_temperature_min", "sunrise", "sunset",
  "uv_index_max", "precipitation_sum", "precipitation_probability_max",
  "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant",
].join(",");

const MINUTELY_PARAMS = [
  "precipitation", "rain", "snowfall", "weather_code",
].join(",");

export async function getWeather({ lat, lon }) {

    try {
        const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&timezone=auto` + 
            `&forecast_days=8&forecast_hours=48` +
            `&current=${CURRENT_PARAMS}` +
            `&minutely_15=${MINUTELY_PARAMS}` +
            `&hourly=${HOURLY_PARAMS}` +
            `&daily=${DAILY_PARAMS}`;

        const resp = await fetch(url);

        if (!resp.ok) {
            throw new Error(`Weather API returned ${resp.status}`);
        }

        const data = await resp.json();
        return weatherSchema.parse(data);

    } catch (error) {
        throw Error(`Something went wrong! ${error.message}`, {cause: error});
    }
}