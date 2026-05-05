import { useEffect, useRef } from 'react'

// Watches matchingSlotIndices; fires CLEAR_MATCH after the flash animation completes.
export function useMatchChecker(matchingSlotIndices, dispatch) {
  const timerRef = useRef(null)

  useEffect(() => {
    if (matchingSlotIndices === null) return
    timerRef.current = setTimeout(() => {
      dispatch({ type: 'CLEAR_MATCH' })
    }, 400)
    return () => clearTimeout(timerRef.current)
  }, [matchingSlotIndices, dispatch])
}
