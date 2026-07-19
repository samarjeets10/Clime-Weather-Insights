import { z } from "zod";

export const weatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  generationtime_ms: z.number(),
  utc_offset_seconds: z.number(),
  timezone: z.string(),
  timezone_abbreviation: z.string(),
  elevation: z.number(),

  current_units: z.record(z.string()),
  current: z.object({
    time: z.string(),
    interval: z.number(),
    temperature_2m: z.number(),
    relative_humidity_2m: z.number(),
    apparent_temperature: z.number(),
    is_day: z.number(), // 0 for night, 1 for day
    precipitation: z.number(),
    weather_code: z.number(),
    wind_speed_10m: z.number(),
  }),

  hourly_units: z.record(z.string()),
  hourly: z.object({
    time: z.array(z.string()),
    temperature_2m: z.array(z.number().nullable()),
    relative_humidity_2m: z.array(z.number().nullable()),
    apparent_temperature: z.array(z.number().nullable()),
    precipitation_probability: z.array(z.number().nullable()),
    weather_code: z.array(z.number().nullable()),
    wind_speed_10m: z.array(z.number().nullable()),
    uv_index: z.array(z.number().nullable()),
  }),

  daily_units: z.record(z.string()),
  daily: z.object({
    time: z.array(z.string()),
    weather_code: z.array(z.number().nullable()),
    temperature_2m_max: z.array(z.number().nullable()),
    temperature_2m_min: z.array(z.number().nullable()),
    sunrise: z.array(z.string()),
    sunset: z.array(z.string()),
    uv_index_max: z.array(z.number().nullable()),
    precipitation_probability_max: z.array(z.number().nullable()),
  }),
});