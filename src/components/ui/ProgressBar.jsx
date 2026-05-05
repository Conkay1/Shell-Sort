export default function ProgressBar({ value, max, warning }) {
  const pct = Math.max(0, Math.min(1, value / max)) * 100
  return (
    <div style={{
      height: 8,
      background: '#E0DDD8',
      borderRadius: 4,
      overflow: 'hidden',
    }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: warning ? '#E05050' : '#2A2D4A',
        borderRadius: 4,
        transition: 'width 0.9s linear, background 0.3s',
        animation: warning && pct < 15 ? 'timer-warn 0.8s ease-in-out infinite' : undefined,
      }} />
    </div>
  )
}
