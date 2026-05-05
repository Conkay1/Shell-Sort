import Button from '../ui/Button.jsx'

export default function GameOverScreen({ score, levelId, onHome, onRetry }) {
  return (
    <div style={{
      flex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 28, padding: 32,
      background: 'var(--bg)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 52, lineHeight: 1 }}>⏱️</div>
        <div style={{ fontSize: 26, fontWeight: 900, color: '#E05050', marginTop: 12 }}>
          Time's Up!
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 4 }}>
          Level {levelId}
        </div>
        <div style={{ fontSize: 30, fontWeight: 900, marginTop: 12 }}>
          {score.toLocaleString()}
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>points</div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="secondary" onClick={onHome}>Menu</Button>
        <Button onClick={onRetry}>Try Again</Button>
      </div>
    </div>
  )
}
