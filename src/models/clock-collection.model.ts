import { ClockSchema } from '@/models/clock.model'
import { CollectionSettingsSchema } from '@/models/collection-settings.model'
import {z} from 'zod'

export const ClockCollectionSchema = z.object({
  title: z.string(),
  settings: CollectionSettingsSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
  clocks: z.record(z.string().uuid(), ClockSchema),
})

export type ClockCollection = z.infer<typeof ClockCollectionSchema>