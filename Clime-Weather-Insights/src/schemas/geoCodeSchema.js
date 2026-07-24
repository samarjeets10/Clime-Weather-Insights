import { z } from "zod";

export const geocodingSchema = z.object({
  results: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      latitude: z.number(),
      longitude: z.number(),
      elevation: z.number().optional(),
      country: z.string().optional(),
      country_code: z.string().optional(),
      admin1: z.string().optional(),
      timezone: z.string().optional(),
      population: z.number().optional(),
    })
  ).optional(),
});