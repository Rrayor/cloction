import { useMemo } from 'react';
import TimezoneName from '@/components/clock-card/timezone-name/TimezoneName';
import { Card } from '@chakra-ui/react';
import DateAndTimeDisplay from '@/components/clock-card/date-and-time-display/DateAndTimeDisplay';
import TimeContextProvider from '@/components/time-context/TimeContextProvider';

export interface ClockCardProps {
  title: string;
  timezone: string;
  showDayOfWeek?: boolean;
  showSeconds?: boolean;
  showDate?: boolean;
  hourFormat24?: boolean;
}

export default function ClockCard({ title, timezone, showDayOfWeek, showSeconds, showDate, hourFormat24 }: ClockCardProps) {
  const clockFormat = useMemo(() => {
    const timeFormat = hourFormat24 ? 'HH:mm' : 'hh:mm';
    const secondsFormat = showSeconds ? ':ss' : '';
    const ampmFormat = hourFormat24 ? '' : ' a';
    return `${timeFormat}${secondsFormat}${ampmFormat}`;
  }, [hourFormat24, showSeconds]);

  const memoizedCardElements = useMemo(() => (
    <>
      <Card.Body>
        <Card.Description>
          <TimezoneName timezone={timezone} format="long" />
          <br />
          <TimezoneName timezone={timezone} format="short" />
        </Card.Description>
      </Card.Body>
      <Card.Footer>
        <div className="text-lg">Additional Info</div>
      </Card.Footer>
    </>
  ), [timezone]);

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <TimeContextProvider>
          <DateAndTimeDisplay 
            clockFormat={clockFormat} 
            showDate={showDate} 
            showDayOfWeek={showDayOfWeek}
            timezone={timezone}
          />
        </TimeContextProvider>
      </Card.Header>
      {memoizedCardElements}
    </Card.Root>
  );
}