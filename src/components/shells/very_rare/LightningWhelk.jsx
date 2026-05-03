export default function LightningWhelk({ size = 64, colors = {} }) {
  const p = colors.primary || '#F8F0E0'
  const s = colors.secondary || '#D0C090'
  const h = colors.highlight || '#FFFFFF'
  const d = colors.shadow || '#B0A070'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Large body whorl */}
      <ellipse cx="30" cy="44" rx="24" ry="18" fill={p} stroke={d} strokeWidth="2" />
      {/* Second whorl */}
      <ellipse cx="30" cy="26" rx="15" ry="13" fill={p} stroke={d} strokeWidth="2" />
      {/* Third whorl */}
      <ellipse cx="30" cy="14" rx="9" ry="8" fill={p} stroke={d} strokeWidth="2" />
      {/* Spire — left-handed: tip goes left */}
      <path d="M24 8 Q22 2 28 4 Q34 6 32 12" fill={p} stroke={d} strokeWidth="1.8" strokeLinejoin="round" />
      {/* Sutures */}
      <path d="M16 30 Q30 25 44 30" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M8 44 Q30 38 52 44" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Shoulder knobs on body whorl */}
      <circle cx="10" cy="36" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="18" cy="32" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="26" cy="30" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="34" cy="30" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="42" cy="32" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="50" cy="36" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      {/* Lightning bolt stripe — the defining feature */}
      <path d="M38 6 L32 22 L38 22 L28 40 L36 38 L26 56"
        fill="none" stroke={d} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" opacity="0.55" />
      {/* Siphon canal */}
      <path d="M6 54 Q4 60 8 62" fill="none" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="18" cy="42" rx="5" ry="7" fill={h} opacity="0.5" />
    </svg>
  )
}
