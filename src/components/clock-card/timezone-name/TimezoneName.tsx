import { DateTime } from 'luxon'

export interface TimezoneNameProps {
  timezone: string
  format: 'long' | 'short'
}

export default function TimezoneName({ timezone, format }: TimezoneNameProps) {
  const time = DateTime.now().setZone(timezone)

  return (
    <span className="text-sm text-gray-500">{time.zone.offsetName(time.toUnixInteger(), { format })}</span>
  )
}