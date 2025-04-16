import { useMemo } from 'react'
import { Card } from '@chakra-ui/react'
import DateAndTimeDisplay from '@/components/clock-card/date-and-time-display/DateAndTimeDisplay'
import TimeContextProvider from '@/context/time-context/TimeContextProvider'
import ClockCardBody from '@/components/clock-card/clock-card-body/ClockCardBody'
import { useCollectionContext } from '@/context/collection-context/CollectionContext'

export interface ClockCardProps {
  clockId: string
}

export default function ClockCard({ clockId }: ClockCardProps) {
  const [collection, _] = useCollectionContext()
  const { title, timezone } = collection.clocks[clockId]

  const cardBody = useMemo(() => <ClockCardBody timezone={timezone} />, [timezone])

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <TimeContextProvider>
          <DateAndTimeDisplay 
            clockId={clockId} 
          />
        </TimeContextProvider>
      </Card.Header>
      {cardBody}
    </Card.Root>
  )
}