import { SHELLS, RARITY_LABELS, RARITY_COLORS } from './data/shells.js'
import Shell from './components/Shell.jsx'

const RARITY_ORDER = ['common', 'uncommon', 'rare', 'very_rare', 'legendary']
const SIZES = [32, 56, 80]

function ShellCard({ shell }) {
  const rarityColor = RARITY_COLORS[shell.rarity]
  return (
    <div style={{
      background: '#FFFFFF',
      border: `2px solid ${rarityColor}`,
      borderRadius: 12,
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      minWidth: 140,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
        {SIZES.map(sz => (
          <div key={sz} style={{
            background: '#FAF7F2',
            borderRadius: 8,
            padding: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Shell shellId={shell.id} size={sz} colors={shell.colors} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 8 }}>
        {SIZES.map(sz => (
          <div key={sz} style={{ width: sz + 12, textAlign: 'center', fontSize: 9, color: '#888' }}>
            {sz}px
          </div>
        ))}
      </div>
      <div style={{ color: '#222', fontWeight: 'bold', fontSize: 13, textAlign: 'center' }}>
        {shell.name}
      </div>
      <div style={{
        background: rarityColor, color: '#fff', fontSize: 10, fontWeight: 'bold',
        padding: '2px 8px', borderRadius: 99,
      }}>
        {RARITY_LABELS[shell.rarity]}
      </div>
      <div style={{ color: '#666', fontSize: 10, textAlign: 'center', lineHeight: 1.4, maxWidth: 200 }}>
        {shell.description}
      </div>
    </div>
  )
}

function RaritySection({ rarity }) {
  const shells = SHELLS.filter(s => s.rarity === rarity)
  const rarityColor = RARITY_COLORS[rarity]
  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16,
        paddingBottom: 8, borderBottom: `2px solid ${rarityColor}`,
      }}>
        <div style={{
          background: rarityColor, color: '#fff', fontWeight: 'bold',
          padding: '4px 14px', borderRadius: 99, fontSize: 14,
        }}>
          {RARITY_LABELS[rarity]}
        </div>
        <span style={{ color: '#555', fontSize: 13 }}>
          {rarity === 'common' && 'Levels 1–50'}
          {rarity === 'uncommon' && 'Unlocks at Level 11'}
          {rarity === 'rare' && 'Unlocks at Level 21'}
          {rarity === 'very_rare' && 'Unlocks at Level 31'}
          {rarity === 'legendary' && 'Unlocks at Level 41'}
        </span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
        {shells.map(shell => <ShellCard key={shell.id} shell={shell} />)}
      </div>
    </section>
  )
}

export default function ShellGallery() {
  return (
    <div style={{
      minHeight: '100vh', background: '#FAF7F2', padding: '24px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ color: '#222', fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
          Shell-Sort — Graphics Review
        </h1>
        <p style={{ color: '#555', fontSize: 14, maxWidth: 560, margin: '0 auto' }}>
          All 25 seashells in flat-illustration style with bold pastel colors and
          dark navy outlines. Shown at 32px, 56px, and 80px to verify legibility.
        </p>
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {RARITY_ORDER.map(r => <RaritySection key={r} rarity={r} />)}
      </div>
    </div>
  )
}
