export default function Nautilus({ size = 64, colors = {} }) {
  const p = colors.primary || '#F0E8D0'
  const s = colors.secondary || '#C8A850'
  const h = colors.highlight || '#FFFFF0'
  const d = colors.shadow || '#A88030'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Outer shell */}
      <circle cx="32" cy="32" r="28" fill={p} stroke={d} strokeWidth="2" />
      {/* Brown spiral stripes — the nautilus signature */}
      <path d="M32 6 Q56 8 58 32 Q56 56 32 58" fill={s} stroke="none" opacity="0.6" />
      <path d="M32 6 Q10 8 6 32 Q6 46 14 54" fill={d} stroke="none" opacity="0.3" />
      {/* Logarithmic spiral chambers */}
      <path d="M32 32 Q44 20 44 32 Q44 44 32 44 Q20 44 20 32 Q20 20 32 20"
        fill="none" stroke={d} strokeWidth="1.8" />
      <path d="M32 32 Q40 26 40 32 Q40 38 32 38"
        fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M32 32 Q36 29 36 32 Q36 35 32 35"
        fill="none" stroke={d} strokeWidth="1.2" />
      {/* Chamber septa lines */}
      <line x1="32" y1="20" x2="44" y2="24" stroke={d} strokeWidth="1.2" />
      <line x1="32" y1="20" x2="38" y2="12" stroke={d} strokeWidth="1.2" />
      <line x1="32" y1="20" x2="24" y2="12" stroke={d} strokeWidth="1.2" />
      <line x1="44" y1="32" x2="52" y2="26" stroke={d} strokeWidth="1.2" />
      <line x1="44" y1="32" x2="52" y2="40" stroke={d} strokeWidth="1.2" />
      <line x1="32" y1="44" x2="38" y2="52" stroke={d} strokeWidth="1.2" />
      <line x1="32" y1="44" x2="24" y2="52" stroke={d} strokeWidth="1.2" />
      <line x1="20" y1="32" x2="12" y2="26" stroke={d} strokeWidth="1.2" />
      <line x1="20" y1="32" x2="12" y2="40" stroke={d} strokeWidth="1.2" />
      {/* Umbilicus center */}
      <circle cx="32" cy="32" r="4" fill={d} />
      <circle cx="32" cy="32" r="2" fill={s} />
      {/* Highlight */}
      <ellipse cx="20" cy="20" rx="6" ry="5" fill={h} opacity="0.6" />
    </svg>
  )
}
