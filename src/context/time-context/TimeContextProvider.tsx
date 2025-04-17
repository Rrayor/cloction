import { useCurrentTime } from '@/hooks/useCurrentTime'
import { useMemo } from 'react'
import { useCollectionContext } from '@/context/collection-context/collection-context.service'
import { TimeContext } from './time-context.service'

const SECOND_UPDATE_INTERVAL = 1_000
const MINUTE_UPDATE_INTERVAL = 60_000

export default function TimeContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [collection] = useCollectionContext()

  const updateInterval = useMemo(() => {
    return Object.values(collection.clocks).find((clock) => clock.showSeconds)
      ? SECOND_UPDATE_INTERVAL
      : MINUTE_UPDATE_INTERVAL
  }, [collection.clocks])

  const time = useCurrentTime(updateInterval)
  return <TimeContext value={time}>{children}</TimeContext>
}
