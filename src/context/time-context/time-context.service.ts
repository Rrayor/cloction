import { DateTime } from 'luxon'
import { createContext, useContext } from 'react'

export const TimeContext = createContext<DateTime | undefined>(undefined)

export function useTimeContext() {
  const time = useContext(TimeContext)
  if (!time) {
    throw new Error('TimeContext is not available')
  }
  return time
}
