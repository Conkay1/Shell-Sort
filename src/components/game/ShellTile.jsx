import Shell from '../Shell.jsx'
import { SHELLS } from '../../data/shells.js'

export default function ShellTile({ shell, onTap, isTop }) {
  const def = SHELLS.find(s => s.id === shell.shellId)
  if (!def) return null

  return (
    <div
      onClick={isTop ? onTap : undefined}
      style={{
        width: 52,
        height: 52,
        background: '#FFFFFF',
        borderRadius: 10,
        border: `2px solid ${isTop ? '#2A2D4A' : '#DDD'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isTop ? 'pointer' : 'default',
        transform: isTop ? 'scale(1.04)' : 'scale(1)',
        transition: 'transform 0.1s',
        boxShadow: isTop ? '0 2px 8px rgba(42,45,74,0.18)' : undefined,
        flexShrink: 0,
      }}
    >
      <Shell shellId={shell.shellId} size={40} colors={def.colors} />
    </div>
  )
}
