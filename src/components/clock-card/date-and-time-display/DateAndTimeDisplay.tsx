import DateDisplay from '@/components/clock-card/date-display/DateDisplay'
import DayOfWeekDisplay from '@/components/clock-card/day-of-week-display/DayOfWeekDisplay'
import DigitalClock from '@/components/clock-card/digital-clock/DigitalClock'
import { useCollectionContext } from '@/context/collection-context/collection-context.service'
import { useTimeContext } from '@/context/time-context/time-context.service'

export interface DateAndTimeDisplayProps {
  clockId: string
}

function getClockFormat(hourFormat24: boolean, showSeconds: boolean): string {
  const timeFormat = hourFormat24 ? 'HH:mm' : 'hh:mm'
  const secondsFormat = showSeconds ? ':ss' : ''
  const ampmFormat = hourFormat24 ? '' : ' a'
  return `${timeFormat}${secondsFormat}${ampmFormat}`
}

export default function DateAndTimeDisplay({
  clockId,
}: DateAndTimeDisplayProps) {
  const time = useTimeContext()
  const [collection] = useCollectionContext()

  const { timezone, showDate, showDayOfWeek, hourFormat24, showSeconds } =
    collection.clocks[clockId]
  const localizedTime = time.setZone(timezone)

  const clockFormat = getClockFormat(
    hourFormat24 || false,
    showSeconds || false
  )

  return (
    <>
      <DigitalClock time={localizedTime} format={clockFormat} />
      {showDate && (
        <DateDisplay
          date={{
            year: localizedTime.year,
            month: localizedTime.month,
            day: localizedTime.day,
          }}
        />
      )}
      {showDayOfWeek && (
        <DayOfWeekDisplay dayOfWeek={localizedTime.weekdayLong || ''} />
      )}
    </>
  )
}
