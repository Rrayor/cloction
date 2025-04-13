import {Text} from '@chakra-ui/react';
import { DateTime } from 'luxon';

export interface DigitalClockProps {
  time: DateTime;  
  format: string;
}

export default function DigitalClock({ time, format }: DigitalClockProps) {
  
  return <Text textStyle="xl">{time.toFormat(format)}</Text>

}