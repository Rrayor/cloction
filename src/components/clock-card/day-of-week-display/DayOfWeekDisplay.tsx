import { Text } from '@chakra-ui/react'

export interface DayOfWeekDisplayProps {
  dayOfWeek: string;
}

export default function DayOfWeekDisplay({ dayOfWeek }: DayOfWeekDisplayProps) {
  return (
    <Text textStyle="xl">{dayOfWeek}</Text>
  )
}