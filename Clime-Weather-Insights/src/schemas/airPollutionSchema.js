import { z } from "zod";

export const airPollutionSchema = z.object({
  coord: z.object({
    lat: z.number(),
    lon: z.number()
  }),

  list: z.array(
    z.object({
      dt: z.number(), // unix timestamp

      main: z.object({
        aqi: z.number(), // 1 = Good, 2 = Fair, 3 = Moderate, 4 = Poor, 5 = Very Poor
      }),

      components: z.object({
        co: z.number(),
        no: z.number(),
        no2: z.number(),
        o3: z.number(),
        so2: z.number(),
        pm2_5: z.number(),
        pm10: z.number(),
        nh3: z.number(),
      }),
    })
  ),
});