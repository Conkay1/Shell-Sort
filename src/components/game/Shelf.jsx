import ShellTile from './ShellTile.jsx'

export default function Shelf({ shells, shelfIndex, onTap }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column-reverse', // index 0 at bottom, last element at top
      alignItems: 'center',
      gap: 4,
      background: 'var(--shelf-bg)',
      borderRadius: 10,
      padding: '6px 4px',
      minHeight: 72,
    }}>
      {shells.map((shell, i) => (
        <ShellTile
          key={shell.id}
          shell={shell}
          isTop={i === shells.length - 1}
          onTap={() => onTap(shelfIndex)}
        />
      ))}
    </div>
  )
}
