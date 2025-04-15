import { useContext, useMemo } from 'react'
import { Card } from '@chakra-ui/react'
import DateAndTimeDisplay from '@/components/clock-card/date-and-time-display/DateAndTimeDisplay'
import TimeContextProvider from '@/components/time-context/TimeContextProvider'
import ClockCardBody from '@/components/clock-card/clock-card-body/ClockCardBody'
import { CollectionContext } from '@/components/collection-context/CollectionContext'

export interface ClockCardProps {
  clockId: string
}

export default function ClockCard({ clockId }: ClockCardProps) {
  const collectionContext = useContext(CollectionContext)
  if (!collectionContext)
    throw new Error('CollectionContext is not available')
  
  const [collection, _] = collectionContext
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