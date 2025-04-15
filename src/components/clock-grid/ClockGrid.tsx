import {Grid } from '@chakra-ui/react'
import ClockCard from '@/components/clock-card/ClockCard'
import { useContext } from 'react'
import { CollectionContext } from '@/components/collection-context/CollectionContext'

export default function ClockGrid() {
  const collectionContext = useContext(CollectionContext)
  if (!collectionContext)
    throw new Error('CollectionContext is not available')

  const [collection, _] = collectionContext

  return (
    <Grid templateColumns={`repeat(${collection.settings?.columnCount}, 1fr)`} gap={6} mt={10}>
      {
        Object.values(collection.clocks).map((clock) => (
          <ClockCard
            key={clock.id}
            clockId={clock.id}
          />
        ))
      }
    </Grid>
  )
}