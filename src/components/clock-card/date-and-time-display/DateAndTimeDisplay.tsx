import { useContext, useMemo } from 'react';
import DateDisplay from '@/components/clock-card/date-display/DateDisplay';
import DayOfWeekDisplay from '@/components/clock-card/day-of-week-display/DayOfWeekDisplay';
import DigitalClock from '@/components/clock-card/digital-clock/DigitalClock';
import { TimeContext } from '@/components/time-context/TimeContextProvider';
import { CollectionContext } from '@/components/collection-context/CollectionContext';

export interface DateAndTimeDisplayProps {
  clockId: string;
}

export default function DateAndTimeDisplay({ clockId }: DateAndTimeDisplayProps) {
  const time = useContext(TimeContext)
  const collectionContext = useContext(CollectionContext)
  if (!collectionContext)
    throw new Error('CollectionContext is not available');
  if (!time)
    throw new Error('TimeContext is not available');
  
  const [collection, _] = collectionContext
  const { timezone, showDate, showDayOfWeek, hourFormat24, showSeconds } = collection.clocks[clockId]
  const localizedTime = time.setZone(timezone);

    const clockFormat = useMemo(() => {
      const timeFormat = hourFormat24 ? 'HH:mm' : 'hh:mm'
      const secondsFormat = showSeconds ? ':ss' : ''
      const ampmFormat = hourFormat24 ? '' : ' a'
      return `${timeFormat}${secondsFormat}${ampmFormat}`
    }, [hourFormat24, showSeconds])

  return (
    <>
      <DigitalClock time={localizedTime} format={clockFormat} />
      {showDate && <DateDisplay date={{ year: localizedTime.year, month: localizedTime.month, day: localizedTime.day }} />}
      {showDayOfWeek && <DayOfWeekDisplay dayOfWeek={localizedTime.weekdayLong || ''} />}
    </>
  );
}