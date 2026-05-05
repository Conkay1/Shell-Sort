import { useState } from 'react'
import HomeScreen from './components/screens/HomeScreen.jsx'
import LevelSelectScreen from './components/screens/LevelSelectScreen.jsx'
import GameScreen from './components/game/GameScreen.jsx'
import { LEVELS } from './data/levels.js'

export default function App() {
  const [screen, setScreen] = useState('home')    // 'home' | 'levels' | 'game'
  const [currentLevel, setCurrentLevel] = useState(null)

  function startLevel(lvl) {
    setCurrentLevel(lvl)
    setScreen('game')
  }

  function goHome() {
    setCurrentLevel(null)
    setScreen('home')
  }

  function goNextLevel() {
    if (!currentLevel) return goHome()
    const next = LEVELS.find(l => l.id === currentLevel.id + 1)
    next ? startLevel(next) : goHome()
  }

  if (screen === 'home')
    return <HomeScreen onPlay={() => setScreen('levels')} />

  if (screen === 'levels')
    return <LevelSelectScreen onSelect={startLevel} onBack={goHome} />

  if (screen === 'game')
    return (
      <GameScreen
        levelConfig={currentLevel}
        onHome={goHome}
        onNextLevel={goNextLevel}
      />
    )

  return null
}
