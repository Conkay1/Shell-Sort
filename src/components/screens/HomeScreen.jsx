import Button from '../ui/Button.jsx'

export default function HomeScreen({ onPlay }) {
  return (
    <div style={{
      flex: 1,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 28, padding: 32,
      background: 'var(--bg)',
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 64, lineHeight: 1 }}>🐚</div>
        <h1 style={{ fontSize: 34, fontWeight: 900, color: 'var(--text)', marginTop: 12 }}>
          Shell Sort
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: 14, marginTop: 10, maxWidth: 280, lineHeight: 1.5 }}>
          Tap shells from the shelves into the holding area. Match 3 in a row to clear them!
        </p>
      </div>
      <Button onClick={onPlay} style={{ width: 200, textAlign: 'center', fontSize: 17 }}>
        Play
      </Button>
    </div>
  )
}
