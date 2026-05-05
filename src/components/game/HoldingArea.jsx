import HoldSlot from './HoldSlot.jsx'

export default function HoldingArea({ holdSlots, matchingSlotIndices }) {
  const matchSet = new Set(matchingSlotIndices || [])

  return (
    <div style={{
      background: 'var(--hold-bg)',
      borderRadius: 'var(--radius)',
      padding: '10px 8px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      justifyContent: 'center',
      minHeight: 64,
    }}>
      {holdSlots.map((shell, i) => (
        <HoldSlot key={i} shell={shell} isMatching={matchSet.has(i)} />
      ))}
    </div>
  )
}
