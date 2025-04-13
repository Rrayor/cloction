import { Text } from '@chakra-ui/react'
import { useMemo } from 'react';

export interface DateDisplayProps {
  date: {
    year: number;
    month: number;
    day: number;
  }
}

export default function DateDisplay({ date }: DateDisplayProps) {
  const formattedDate = useMemo(() => {
    return new Date(date.year, date.month - 1, date.day).toLocaleDateString(navigator.language);
  }, [date])

  return (
    <Text textStyle="xl">{formattedDate}</Text>
  );
}