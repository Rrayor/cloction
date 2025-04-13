import { ClockCollection } from '@/models/clock-collection.model';

export const SampleCollection: ClockCollection = {
  title: "Sample Clock Collection",
  settings: {
    columnCount: 4,
  },
  createdAt: new Date('2023-10-01 00:00:00'),
  updatedAt: new Date('2023-10-01 00:00:00'),
  clocks: [
    {
      id: '550e8400-e29b-41d4-a716-446655440000', // New York
      title: 'New York',
      timezone: 'America/New_York',
      showDate: true,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440001', // London
      title: 'London',
      timezone: 'Europe/London',
      hourFormat24: true,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440002', // Tokyo
      title: 'Tokyo',
      timezone: 'Asia/Tokyo',
      showDayOfWeek: true,
    },
    {
      id: '550e8400-e29b-41d4-a716-446655440003', // Sydney
      title: 'Sydney',
      timezone: 'Australia/Sydney',
      showSeconds: true,
    },
  ],
};