import {z} from 'zod'

export const CollectionSettingsSchema = z.object({
  columnCount: z.number().min(1).max(10).default(3),
})

export type CollectionSettings = z.infer<typeof CollectionSettingsSchema>