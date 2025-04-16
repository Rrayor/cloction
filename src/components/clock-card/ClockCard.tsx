import { useCallback, useMemo } from 'react'
import { Card, Flex, IconButton } from '@chakra-ui/react'
import DateAndTimeDisplay from '@/components/clock-card/date-and-time-display/DateAndTimeDisplay'
import TimeContextProvider from '@/context/time-context/TimeContextProvider'
import ClockCardBody from '@/components/clock-card/clock-card-body/ClockCardBody'
import { useCollectionContext } from '@/context/collection-context/CollectionContext'
import DeleteIcon from '@/components/icons/DeleteIcon'
import { ClockEditIcon } from '@/components/icons/ClockEditIcon'

export interface ClockCardProps {
  clockId: string
}

export default function ClockCard({ clockId }: ClockCardProps) {
  const [collection, _] = useCollectionContext()
  const { title, timezone } = collection.clocks[clockId]

  const cardBody = useMemo(() => <ClockCardBody timezone={timezone} />, [timezone])

  const deleteClock = useCallback(() => {
    console.log('Delete clock', clockId)
  }, [clockId])

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>
          <Flex justifyContent="space-between" alignItems="center">
            {title}
            <Flex gap={2}>
              <IconButton 
                aria-label="Delete clock"
                size="sm"
                variant="solid"
                background="red.500"
                onClick={deleteClock}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="Edit clock"
                size="sm"
                variant="solid"
                background="blue.500"
                onClick={() => console.log('Edit clock', clockId)}
              >
                <ClockEditIcon />
              </IconButton>
            </Flex>
          </Flex>
        </Card.Title>
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