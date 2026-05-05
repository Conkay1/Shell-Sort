import Shell from '../Shell.jsx'
import { SHELLS } from '../../data/shells.js'

export default function HoldSlot({ shell, isMatching }) {
  const def = shell ? SHELLS.find(s => s.id === shell.shellId) : null

  return (
    <div style={{
      width: 44,
      height: 44,
      background: '#FFFFFF',
      borderRadius: 8,
      border: `2px solid ${isMatching ? '#E8C137' : '#DDD'}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      animation: isMatching ? 'flash-match 0.4s ease-in-out' : undefined,
      transition: 'border-color 0.1s',
      flexShrink: 0,
    }}>
      {shell && def && (
        <Shell shellId={shell.shellId} size={34} colors={def.colors} />
      )}
    </div>
  )
}
