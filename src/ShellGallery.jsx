import { SHELLS, RARITY_LABELS, RARITY_COLORS } from './data/shells.js'
import SHELL_COMPONENTS from './components/shells/index.js'

const RARITY_ORDER = ['common', 'uncommon', 'rare', 'very_rare', 'legendary']

const RARITY_BG = {
  common: '#2a2a2a',
  uncommon: '#1a2a1a',
  rare: '#1a1a2a',
  very_rare: '#2a1a2a',
  legendary: '#2a1e10',
}

const SIZES = [32, 56, 80]

function ShellCard({ shell }) {
  const Component = SHELL_COMPONENTS[shell.svgComponent]
  const rarityColor = RARITY_COLORS[shell.rarity]

  return (
    <div style={{
      background: RARITY_BG[shell.rarity],
      border: `2px solid ${rarityColor}`,
      borderRadius: 12,
      padding: '12px 8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      minWidth: 120,
    }}>
      {/* Shell at three sizes */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8 }}>
        {SIZES.map(sz => (
          <div key={sz} style={{
            background: '#111',
            borderRadius: 8,
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {Component ? (
              <Component size={sz} colors={shell.colors} />
            ) : (
              <div style={{ width: sz, height: sz, background: '#333', borderRadius: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#666', fontSize: 10 }}>
                ?
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Labels under each size */}
      <div style={{ display: 'flex', gap: 8 }}>
        {SIZES.map(sz => (
          <div key={sz} style={{ width: sz + 8, textAlign: 'center', fontSize: 9, color: '#666' }}>
            {sz}px
          </div>
        ))}
      </div>

      {/* Shell name */}
      <div style={{ color: '#fff', fontWeight: 'bold', fontSize: 13, textAlign: 'center' }}>
        {shell.name}
      </div>

      {/* Rarity badge */}
      <div style={{
        background: rarityColor,
        color: '#000',
        fontSize: 10,
        fontWeight: 'bold',
        padding: '2px 8px',
        borderRadius: 99,
      }}>
        {RARITY_LABELS[shell.rarity]}
      </div>

      {/* Description */}
      <div style={{ color: '#888', fontSize: 10, textAlign: 'center', lineHeight: 1.4 }}>
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
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 16,
        paddingBottom: 8,
        borderBottom: `2px solid ${rarityColor}`,
      }}>
        <div style={{
          background: rarityColor,
          color: '#000',
          fontWeight: 'bold',
          padding: '4px 14px',
          borderRadius: 99,
          fontSize: 14,
        }}>
          {RARITY_LABELS[rarity]}
        </div>
        <span style={{ color: '#888', fontSize: 13 }}>
          {rarity === 'common' && 'Levels 1–50'}
          {rarity === 'uncommon' && 'Unlocks at Level 11'}
          {rarity === 'rare' && 'Unlocks at Level 21'}
          {rarity === 'very_rare' && 'Unlocks at Level 31'}
          {rarity === 'legendary' && 'Unlocks at Level 41'}
        </span>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        {shells.map(shell => (
          <ShellCard key={shell.id} shell={shell} />
        ))}
      </div>
    </section>
  )
}

export default function ShellGallery() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#111',
      padding: '24px 20px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <h1 style={{ color: '#fff', fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
          🐚 Shell-Sort — Graphics Review
        </h1>
        <p style={{ color: '#aaa', fontSize: 14, maxWidth: 560, margin: '0 auto' }}>
          All 25 seashell types shown at 32px, 56px, and 80px. Each shell uses SVG cartoon
          illustrations with its rarity-tier color palette. Please review and approve before
          full game implementation proceeds.
        </p>
      </div>

      {/* Color swatch legend */}
      <div style={{
        display: 'flex',
        gap: 12,
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 40,
      }}>
        {RARITY_ORDER.map(r => (
          <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 14, height: 14, borderRadius: 4, background: RARITY_COLORS[r] }} />
            <span style={{ color: '#ccc', fontSize: 12 }}>{RARITY_LABELS[r]}</span>
          </div>
        ))}
      </div>

      {/* All rarity sections */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {RARITY_ORDER.map(rarity => (
          <RaritySection key={rarity} rarity={rarity} />
        ))}
      </div>

      {/* Footer note */}
      <div style={{ textAlign: 'center', color: '#555', fontSize: 12, marginTop: 40 }}>
        Phase 1 preview — game logic, levels, and animations pending graphics approval
      </div>
    </div>
  )
}
