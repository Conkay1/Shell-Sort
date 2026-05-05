import { useProgress } from '../../hooks/usePersistence.js'
import { LEVELS } from '../../data/levels.js'
import StarRating from '../ui/StarRating.jsx'

export default function LevelSelectScreen({ onSelect, onBack }) {
  const { getProgress } = useProgress()
  const progress = getProgress()

  // First unlocked = 1; highest completed + 1 unlocks next
  const maxUnlocked = Object.keys(progress.levels).reduce((max, id) => {
    return progress.levels[id].completed ? Math.max(max, Number(id) + 1) : max
  }, 1)

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* Header */}
      <div style={{
        padding: '12px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        background: '#fff', borderBottom: '1px solid var(--border)',
        flexShrink: 0,
      }}>
        <button onClick={onBack} style={backBtnStyle}>←</button>
        <h2 style={{ fontSize: 18, fontWeight: 900, flex: 1 }}>Select Level</h2>
        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
          ⭐ {progress.totalStars} / {LEVELS.length * 3}
        </div>
      </div>

      {/* Grid */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 12px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 8,
        }}>
          {LEVELS.map(lvl => {
            const done = progress.levels[lvl.id]
            const unlocked = lvl.id <= maxUnlocked

            return (
              <button
                key={lvl.id}
                disabled={!unlocked}
                onClick={() => onSelect(lvl)}
                style={{
                  aspectRatio: '1',
                  background: unlocked ? '#fff' : '#EEE',
                  border: `2px solid ${unlocked ? '#2A2D4A' : '#DDD'}`,
                  borderRadius: 10,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 3, padding: 4,
                  cursor: unlocked ? 'pointer' : 'not-allowed',
                  opacity: unlocked ? 1 : 0.4,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, color: '#2A2D4A' }}>{lvl.id}</div>
                {done
                  ? <StarRating stars={done.stars} max={3} size={9} />
                  : <div style={{ height: 9 }} />
                }
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const backBtnStyle = {
  background: 'none',
  border: 'none',
  fontSize: 20,
  cursor: 'pointer',
  color: '#2A2D4A',
  padding: '2px 6px',
}
