import {Grid } from '@chakra-ui/react'
import ClockCard from '@/components/clock-card/ClockCard'
import { useContext } from 'react'
import { CollectionContext } from '@/components/collection-context/CollectionContext'

export default function ClockGrid() {
  const collection = useContext(CollectionContext)

  return (
    <Grid templateColumns={`repeat(${collection.settings?.columnCount}, 1fr)`} gap={6} mt={10}>
      {
        collection.clocks.map((clock) => (
          <ClockCard
            key={clock.id}
            title={clock.title}
            timezone={clock.timezone}
            showDayOfWeek={clock.showDayOfWeek}
            showSeconds={clock.showSeconds}
            showDate={clock.showDate}
            hourFormat24={clock.hourFormat24}
          />
        ))
      }
    </Grid>
  )
}