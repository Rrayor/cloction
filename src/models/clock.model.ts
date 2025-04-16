import {z} from 'zod'

export const ClockSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  timezone: z.string(),
  showSeconds: z.boolean().default(false).optional(),
  showDate: z.boolean().default(false).optional(),
  showDayOfWeek: z.boolean().default(false).optional(),
  hourFormat24: z.boolean().default(false).optional(),
})

export type Clock = z.infer<typeof ClockSchema>