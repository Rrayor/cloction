import { useCollectionContext } from '@/context/collection-context/CollectionContext'
import { useCurrentTime } from '@/hooks/useCurrentTime'
import { DateTime } from 'luxon'
import { createContext, useContext, useMemo } from 'react'

const SECOND_UPDATE_INTERVAL = 1_000
const MINUTE_UPDATE_INTERVAL = 60_000

export const TimeContext = createContext<DateTime | undefined>(undefined)

export function useTimeContext() {
  const time = useContext(TimeContext)
  if (!time) {
    throw new Error('TimeContext is not available')
  }
  return time
}

export default function TimeContextProvider({ children }: { children: React.ReactNode }) {
  const [collection, _] = useCollectionContext()
  
  const updateInterval = useMemo(() => {
      return Object.values(collection.clocks).find((clock) => clock.showSeconds) ? SECOND_UPDATE_INTERVAL : MINUTE_UPDATE_INTERVAL
    }, [collection.clocks])

  const time = useCurrentTime(updateInterval)
  return (
    <TimeContext value={time}>
      {children}
    </TimeContext>
  )
}