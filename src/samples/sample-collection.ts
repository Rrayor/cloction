import { ClockCollection } from '@/models/clock-collection.model'

export const SampleCollection: ClockCollection = {
  title: "Sample Clock Collection",
  settings: {
    columnCount: 4,
  },
  createdAt: new Date('2023-10-01 00:00:00'),
  updatedAt: new Date('2023-10-01 00:00:00'),
  clocks: {
    '550e8400-e29b-41d4-a716-446655440000': {
    id: '550e8400-e29b-41d4-a716-446655440000',
    title: 'New York',
    timezone: 'America/New_York',
    showDate: true,
  },
  '550e8400-e29b-41d4-a716-446655440001': {
    id: '550e8400-e29b-41d4-a716-446655440001',
    title: 'London',
    timezone: 'Europe/London',
    hourFormat24: true,
  },
  '550e8400-e29b-41d4-a716-446655440002': {
    id: '550e8400-e29b-41d4-a716-446655440002',
    title: 'Tokyo',
    timezone: 'Asia/Tokyo',
    showDayOfWeek: true,
  },
  '550e8400-e29b-41d4-a716-446655440003': {
    id: '550e8400-e29b-41d4-a716-446655440003',
    title: 'Sydney',
    timezone: 'Australia/Sydney',
    showSeconds: true,
  },
  },
}