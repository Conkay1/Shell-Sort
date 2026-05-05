import { useCallback } from 'react'

const KEY = 'shellsort_progress'
const VERSION = 1

function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { version: VERSION, levels: {}, totalStars: 0 }
    const data = JSON.parse(raw)
    if (data.version !== VERSION) return { version: VERSION, levels: {}, totalStars: 0 }
    return data
  } catch {
    return { version: VERSION, levels: {}, totalStars: 0 }
  }
}

export function useProgress() {
  const save = useCallback((levelId, stars, score) => {
    const data = load()
    const prev = data.levels[levelId] || { stars: 0, highScore: 0, completed: false }
    data.levels[levelId] = {
      stars: Math.max(prev.stars, stars),
      highScore: Math.max(prev.highScore, score),
      completed: true,
    }
    data.totalStars = Object.values(data.levels).reduce((sum, l) => sum + l.stars, 0)
    localStorage.setItem(KEY, JSON.stringify(data))
  }, [])

  const getProgress = useCallback(() => load(), [])

  return { save, getProgress }
}
