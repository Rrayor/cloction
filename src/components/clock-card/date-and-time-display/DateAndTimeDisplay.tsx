import { useContext } from 'react';
import DateDisplay from '@/components/clock-card/date-display/DateDisplay';
import DayOfWeekDisplay from '@/components/clock-card/day-of-week-display/DayOfWeekDisplay';
import DigitalClock from '@/components/clock-card/digital-clock/DigitalClock';
import { TimeContext } from '@/components/time-context/TimeContextProvider';

export interface DateAndTimeDisplayProps {
  showDate?: boolean;
  showDayOfWeek?: boolean;
  clockFormat: string;
  timezone: string;
}

export default function DateAndTimeDisplay({ showDate, showDayOfWeek, clockFormat, timezone }: DateAndTimeDisplayProps) {
  const time = useContext(TimeContext)
  if (!time)
    throw new Error('TimeContext is not available');

  const localizedTime = time.setZone(timezone);

  return (
    <>
      <DigitalClock time={localizedTime} format={clockFormat} />
      {showDate && <DateDisplay date={{ year: localizedTime.year, month: localizedTime.month, day: localizedTime.day }} />}
      {showDayOfWeek && <DayOfWeekDisplay dayOfWeek={localizedTime.weekdayLong || ''} />}
    </>
  );
}