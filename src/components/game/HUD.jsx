import ProgressBar from '../ui/ProgressBar.jsx'

export default function HUD({
  levelId, timeRemaining, timerTotal, score,
  comboCount, hintsLeft, shufflesLeft,
  onPause, onHint, onShuffle,
}) {
  const pct = timeRemaining / timerTotal
  const warning = pct <= 0.3

  return (
    <div style={{
      background: '#FFFFFF',
      borderBottom: '1px solid var(--border)',
      padding: '8px 12px',
      flexShrink: 0,
    }}>
      {/* Timer row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
        <div style={{ flex: 1 }}>
          <ProgressBar value={timeRemaining} max={timerTotal} warning={warning} />
        </div>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          minWidth: 30,
          textAlign: 'right',
          color: warning ? '#E05050' : 'var(--text)',
          transition: 'color 0.3s',
        }}>
          {timeRemaining}s
        </div>
      </div>

      {/* Score / combo / controls row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 10, color: 'var(--text-muted)', lineHeight: 1 }}>Level {levelId}</div>
          <div style={{ fontSize: 20, fontWeight: 900, lineHeight: 1.2 }}>
            {score.toLocaleString()}
          </div>
        </div>

        {comboCount > 0 && (
          <div style={{
            background: '#E8C137',
            color: '#2A2D4A',
            fontWeight: 900,
            fontSize: 11,
            padding: '3px 10px',
            borderRadius: 99,
            animation: 'scale-pulse 0.3s',
          }}>
            {comboCount + 1}× COMBO
          </div>
        )}

        <div style={{ display: 'flex', gap: 6 }}>
          {hintsLeft > 0 && (
            <IconBtn onClick={onHint} label={`💡 ${hintsLeft}`} />
          )}
          {shufflesLeft > 0 && (
            <IconBtn onClick={onShuffle} label={`🔀 ${shufflesLeft}`} />
          )}
          <IconBtn onClick={onPause} label="⏸" />
        </div>
      </div>
    </div>
  )
}

function IconBtn({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: '#F0EDE8',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '4px 8px',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        lineHeight: 1,
      }}
    >
      {label}
    </button>
  )
}
