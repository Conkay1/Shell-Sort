const VARIANTS = {
  primary:   { background: '#2A2D4A', color: '#fff', border: 'none' },
  secondary: { background: '#fff', color: '#2A2D4A', border: '2px solid #2A2D4A' },
  danger:    { background: '#E05050', color: '#fff', border: 'none' },
}

export default function Button({ children, onClick, variant = 'primary', disabled, style }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: '12px 24px',
        borderRadius: 8,
        cursor: disabled ? 'not-allowed' : 'pointer',
        fontSize: 15,
        fontWeight: 700,
        opacity: disabled ? 0.5 : 1,
        transition: 'opacity 0.15s, transform 0.1s',
        ...VARIANTS[variant],
        ...style,
      }}
    >
      {children}
    </button>
  )
}
