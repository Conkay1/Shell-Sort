import { useCallback, useEffect } from 'react'
import { useGameState } from '../../hooks/useGameState.js'
import { useTimer } from '../../hooks/useTimer.js'
import { useMatchChecker } from '../../hooks/useMatchChecker.js'
import { useProgress } from '../../hooks/usePersistence.js'
import { generateLevel } from '../../engine/levelGenerator.js'
import HUD from './HUD.jsx'
import HoldingArea from './HoldingArea.jsx'
import ShelfGrid from './ShelfGrid.jsx'
import LevelCompleteScreen from '../screens/LevelCompleteScreen.jsx'
import GameOverScreen from '../screens/GameOverScreen.jsx'

export default function GameScreen({ levelConfig, onHome, onNextLevel }) {
  const { state, dispatch } = useGameState()
  const { save } = useProgress()

  const tick = useCallback(() => dispatch({ type: 'TICK' }), [dispatch])
  useTimer(state.timerRunning, tick)
  useMatchChecker(state.matchingSlotIndices, dispatch)

  // Start (or restart) the level whenever levelConfig changes
  useEffect(() => {
    if (!levelConfig) return
    const shelves = generateLevel(levelConfig)
    dispatch({ type: 'START_LEVEL', levelConfig, shelves })
  }, [levelConfig]) // eslint-disable-line react-hooks/exhaustive-deps

  // Persist result once when level completes
  useEffect(() => {
    if (state.phase === 'levelComplete' && state.levelConfig) {
      save(state.levelConfig.id, state.starsEarned, state.score)
    }
  }, [state.phase]) // eslint-disable-line react-hooks/exhaustive-deps

  if (!state.levelConfig) return null

  if (state.phase === 'levelComplete') {
    return (
      <LevelCompleteScreen
        stars={state.starsEarned}
        score={state.score}
        levelId={state.levelConfig.id}
        onHome={onHome}
        onNext={onNextLevel}
      />
    )
  }

  if (state.phase === 'gameOver') {
    return (
      <GameOverScreen
        score={state.score}
        levelId={state.levelConfig.id}
        onHome={onHome}
        onRetry={() => {
          const shelves = generateLevel(levelConfig)
          dispatch({ type: 'START_LEVEL', levelConfig, shelves })
        }}
      />
    )
  }

  if (state.phase === 'paused') {
    return (
      <div style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.65)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: 16, zIndex: 10,
      }}>
        <div style={{ color: '#fff', fontSize: 26, fontWeight: 900 }}>PAUSED</div>
        <button
          onClick={() => dispatch({ type: 'RESUME' })}
          style={overlayBtnStyle('#fff', '#2A2D4A')}
        >
          Resume
        </button>
        <button onClick={onHome} style={overlayBtnStyle('transparent', '#fff')}>
          Quit to Menu
        </button>
      </div>
    )
  }

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', background: 'var(--bg)',
      overflow: 'hidden',
    }}>
      <HUD
        levelId={state.levelConfig.id}
        timeRemaining={state.timeRemaining}
        timerTotal={state.levelConfig.timerSeconds}
        score={state.score}
        comboCount={state.comboCount}
        hintsLeft={state.hintsLeft}
        shufflesLeft={state.shufflesLeft}
        onPause={() => dispatch({ type: 'PAUSE' })}
        onHint={() => dispatch({ type: 'USE_HINT' })}
        onShuffle={() => dispatch({ type: 'USE_SHUFFLE' })}
      />
      <div style={{
        flex: 1, overflowY: 'auto',
        padding: 12,
        display: 'flex', flexDirection: 'column', gap: 12,
      }}>
        <HoldingArea
          holdSlots={state.holdSlots}
          matchingSlotIndices={state.matchingSlotIndices}
        />
        <ShelfGrid
          shelves={state.shelves}
          onTapShelf={(i) => dispatch({ type: 'TAP_SHELL', shelfIndex: i })}
        />
      </div>
    </div>
  )
}

function overlayBtnStyle(bg, color) {
  return {
    background: bg,
    color,
    border: bg === 'transparent' ? '2px solid #fff' : 'none',
    borderRadius: 8,
    padding: '12px 36px',
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    minWidth: 180,
  }
}
