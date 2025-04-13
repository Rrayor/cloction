import { DateTime } from 'luxon';
import { useMemo } from 'react';

export interface TimezoneNameProps {
  timezone: string;
  format: 'long' | 'short';
}

export default function TimezoneName({ timezone, format }: TimezoneNameProps) {
  return useMemo(() => {const time = DateTime.now().setZone(timezone);

  return (
    <span className="text-sm text-gray-500">{time.zone.offsetName(time.toUnixInteger(), { format })}</span>
  )}, [timezone])
}