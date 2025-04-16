import { Text } from '@chakra-ui/react'

export interface DateDisplayProps {
  date: {
    year: number
    month: number
    day: number
  }
}

export default function DateDisplay({ date }: DateDisplayProps) {
  const formattedDate = new Date(date.year, date.month - 1, date.day)
    .toLocaleDateString(navigator.language)

  return (
    <Text textStyle="xl">{formattedDate}</Text>
  )
}