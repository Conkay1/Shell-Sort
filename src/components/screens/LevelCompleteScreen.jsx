import Button from '../ui/Button.jsx'

export default function LevelCompleteScreen({ stars, score, levelId, onHome, onNext }) {
  return (
    <div style={{
      flex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 28, padding: 32,
      background: 'var(--bg)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-muted)', marginBottom: 8 }}>
          Level {levelId} Complete!
        </div>

        {/* Stars with pop-in animation */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginBottom: 20 }}>
          {[0, 1, 2].map(i => (
            <div
              key={i}
              style={{
                animation: i < stars ? `star-pop 0.4s ${i * 0.18}s both` : undefined,
                opacity: i < stars ? 1 : 0.2,
              }}
            >
              <svg width={52} height={52} viewBox="0 0 24 24">
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill="#E8C137"
                  stroke="#C4A020"
                  strokeWidth="1"
                />
              </svg>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 30, fontWeight: 900 }}>{score.toLocaleString()}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>points</div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <Button variant="secondary" onClick={onHome}>Menu</Button>
        {onNext && <Button onClick={onNext}>Next →</Button>}
      </div>
    </div>
  )
}
