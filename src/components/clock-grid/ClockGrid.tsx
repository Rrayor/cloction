import {Grid } from '@chakra-ui/react'
import ClockCard from '@/components/clock-card/ClockCard'
import { useCollectionContext } from '@/context/collection-context/CollectionContext'

export default function ClockGrid() {
  const [collection, _] = useCollectionContext()

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