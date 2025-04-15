import { CollectionContext } from '@/components/collection-context/CollectionContext';
import { useCurrentTime } from '@/hooks/useCurrentTime';
import { DateTime } from 'luxon';
import { createContext, useContext, useMemo } from 'react';

const SECOND_UPDATE_INTERVAL = 1_000
const MINUTE_UPDATE_INTERVAL = 60_000

export const TimeContext = createContext<DateTime | undefined>(undefined)

export default function TimeContextProvider({ children }: { children: React.ReactNode }) {
  const collectionContext = useContext(CollectionContext);
  if (!collectionContext)
    throw new Error('CollectionContext is not available');

    const [collection, _] = collectionContext
  
  const updateInterval = useMemo(() => {
      return Object.values(collection.clocks).find((clock) => clock.showSeconds) ? SECOND_UPDATE_INTERVAL : MINUTE_UPDATE_INTERVAL
    }, [collection.clocks])

  const time = useCurrentTime(updateInterval)
  return (
    <TimeContext.Provider value={time}>
      {children}
    </TimeContext.Provider>
  )
}