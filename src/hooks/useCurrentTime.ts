import { useState, useEffect, useRef } from 'react'
import { DateTime } from 'luxon'

export function useCurrentTime(updateInterval: number) {
  const [time, setTime] = useState(DateTime.now())
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const updateTime = () => {
      const now = DateTime.now()
      setTime(now)

      // Calculate the time until the next second starts
      const nextTick = updateInterval - now.millisecond
      timeoutIdRef.current = setTimeout(updateTime, nextTick)
    }

    // Start the first update
    updateTime()

    // Cleanup: Clear any pending timeouts on unmount
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return time
}
