export default function Clam({ size = 64, colors = {} }) {
  const p = colors.primary || '#E8D5B0'
  const s = colors.secondary || '#C4A882'
  const h = colors.highlight || '#F5ECD8'
  const d = colors.shadow || '#A08060'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Left valve */}
      <path d="M32 12 Q14 12 8 30 Q5 44 10 54 Q20 62 32 60" fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Right valve */}
      <path d="M32 12 Q50 12 56 30 Q59 44 54 54 Q44 62 32 60" fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Hinge knob */}
      <ellipse cx="32" cy="12" rx="5" ry="4" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Ribs left */}
      <path d="M32 60 Q19 46 8 30" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M32 60 Q16 40 12 22" fill="none" stroke={s} strokeWidth="1" />
      <path d="M32 60 Q14 50 9 38" fill="none" stroke={s} strokeWidth="0.9" />
      {/* Ribs right */}
      <path d="M32 60 Q45 46 56 30" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M32 60 Q48 40 52 22" fill="none" stroke={s} strokeWidth="1" />
      <path d="M32 60 Q50 50 55 38" fill="none" stroke={s} strokeWidth="0.9" />
      {/* Center seam */}
      <line x1="32" y1="12" x2="32" y2="60" stroke={d} strokeWidth="1.5" />
      {/* Highlight sheen */}
      <ellipse cx="23" cy="28" rx="4" ry="6" fill={h} opacity="0.55" />
    </svg>
  )
}
