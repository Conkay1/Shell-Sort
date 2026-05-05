import { useReducer } from 'react'
import { findConsecutiveMatch, removeMatched } from '../engine/matchEngine.js'
import { calculateStars } from '../engine/starCalculator.js'

const COMBO_MULTIPLIERS = [1, 2, 3, 4]
const MAX_COMBO = COMBO_MULTIPLIERS.length - 1

const INITIAL = {
  phase: 'idle',         // 'idle'|'playing'|'paused'|'levelComplete'|'gameOver'
  levelConfig: null,
  shelves: [],           // ShellInstance[][] — index 0 = bottom of stack
  holdSlots: [],         // (ShellInstance|null)[]
  matchingSlotIndices: null,
  score: 0,
  comboCount: 0,         // increments on each cascade
  timeRemaining: 0,
  timerRunning: false,
  starsEarned: 0,
  hintsLeft: 0,
  shufflesLeft: 1,
}

function addToFirstEmpty(holdSlots, shell) {
  const idx = holdSlots.findIndex(s => s === null)
  if (idx === -1) return null
  const next = [...holdSlots]
  next[idx] = shell
  return next
}

function reducer(state, action) {
  switch (action.type) {

    case 'START_LEVEL': {
      const { levelConfig, shelves } = action
      return {
        ...INITIAL,
        phase: 'playing',
        levelConfig,
        shelves,
        holdSlots: Array(levelConfig.holdSlots).fill(null),
        timeRemaining: levelConfig.timerSeconds,
        timerRunning: true,
        hintsLeft: levelConfig.hintsAllowed,
        shufflesLeft: levelConfig.shufflesAllowed,
      }
    }

    case 'TAP_SHELL': {
      if (state.phase !== 'playing') return state
      if (state.matchingSlotIndices !== null) return state // animation in progress

      const { shelfIndex } = action
      const shelf = state.shelves[shelfIndex]
      if (!shelf || shelf.length === 0) return state

      const shell = shelf[shelf.length - 1]
      const newShelves = state.shelves.map((s, i) =>
        i === shelfIndex ? s.slice(0, -1) : s
      )
      const newHold = addToFirstEmpty(state.holdSlots, shell)
      if (!newHold) return state // hold area full

      const matchIndices = findConsecutiveMatch(newHold)
      return {
        ...state,
        shelves: newShelves,
        holdSlots: newHold,
        matchingSlotIndices: matchIndices,
        comboCount: matchIndices ? state.comboCount : 0,
      }
    }

    case 'CLEAR_MATCH': {
      if (!state.matchingSlotIndices) return state

      const multiplier = COMBO_MULTIPLIERS[Math.min(state.comboCount, MAX_COMBO)]
      const newHold = removeMatched(state.holdSlots, state.matchingSlotIndices)
      const cascade = findConsecutiveMatch(newHold)
      const newCombo = cascade ? Math.min(state.comboCount + 1, MAX_COMBO) : 0

      const allShelvesEmpty = state.shelves.every(s => s.length === 0)
      const allHoldEmpty = newHold.every(s => s === null)

      if (allShelvesEmpty && allHoldEmpty && !cascade) {
        return {
          ...state,
          holdSlots: newHold,
          matchingSlotIndices: null,
          score: state.score + 100 * multiplier,
          comboCount: 0,
          phase: 'levelComplete',
          timerRunning: false,
          starsEarned: calculateStars(state.timeRemaining, state.levelConfig.starThresholds),
        }
      }

      return {
        ...state,
        holdSlots: newHold,
        matchingSlotIndices: cascade,
        score: state.score + 100 * multiplier,
        comboCount: newCombo,
      }
    }

    case 'TICK': {
      if (!state.timerRunning || state.phase !== 'playing') return state
      const t = state.timeRemaining - 1
      if (t <= 0) return { ...state, timeRemaining: 0, timerRunning: false, phase: 'gameOver' }
      return { ...state, timeRemaining: t }
    }

    case 'PAUSE':
      return state.phase === 'playing'
        ? { ...state, timerRunning: false, phase: 'paused' }
        : state

    case 'RESUME':
      return state.phase === 'paused'
        ? { ...state, timerRunning: true, phase: 'playing' }
        : state

    case 'USE_SHUFFLE': {
      if (state.shufflesLeft <= 0 || state.phase !== 'playing') return state
      const all = state.shelves.flatMap(s => s)
      const shuffled = [...all].sort(() => Math.random() - 0.5)
      let i = 0
      const newShelves = state.shelves.map(s => {
        const chunk = shuffled.slice(i, i + s.length)
        i += s.length
        return chunk
      })
      return { ...state, shelves: newShelves, shufflesLeft: state.shufflesLeft - 1 }
    }

    case 'USE_HINT':
      return state.hintsLeft > 0
        ? { ...state, hintsLeft: state.hintsLeft - 1 }
        : state

    default:
      return state
  }
}

export function useGameState() {
  const [state, dispatch] = useReducer(reducer, INITIAL)
  return { state, dispatch }
}
