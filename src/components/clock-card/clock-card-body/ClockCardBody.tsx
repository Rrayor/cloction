import TimezoneName from '@/components/clock-card/timezone-name/TimezoneName';
import { Card } from '@chakra-ui/react';

export interface ClockCardBodyProps {
  timezone: string;
}

export default function ClockCardBody({ timezone }: ClockCardBodyProps) {
  return (
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
  )
}