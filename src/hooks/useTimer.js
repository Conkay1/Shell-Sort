import { useEffect } from 'react'

export function useTimer(running, onTick) {
  useEffect(() => {
    if (!running) return
    const id = setInterval(onTick, 1000)
    return () => clearInterval(id)
  }, [running, onTick])
}
