export default function Murex({ size = 64, colors = {} }) {
  const p = colors.primary || '#E8C0D0'
  const s = colors.secondary || '#C080A0'
  const h = colors.highlight || '#FFE0F0'
  const d = colors.shadow || '#A04070'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Core body */}
      <ellipse cx="32" cy="36" rx="14" ry="22" fill={p} stroke={d} strokeWidth="2" />
      {/* Spire */}
      <ellipse cx="32" cy="16" rx="7" ry="10" fill={p} stroke={d} strokeWidth="2" />
      <circle cx="32" cy="8" r="4" fill={p} stroke={d} strokeWidth="1.8" />
      <circle cx="32" cy="5" r="2" fill={d} />
      {/* Long spines — murex's defining feature */}
      {/* Upper spines */}
      <path d="M18 22 Q8 14 6 8" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 22 Q56 14 58 8" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      {/* Spine bases (blobs) */}
      <circle cx="18" cy="22" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="46" cy="22" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Middle spines */}
      <path d="M14 34 Q2 30 0 24" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 34 Q62 30 64 24" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="14" cy="34" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="50" cy="34" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Lower spines */}
      <path d="M18 46 Q6 46 2 40" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M46 46 Q58 46 62 40" fill="none" stroke={d} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="18" cy="46" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="46" cy="46" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Siphon canal spine at base */}
      <path d="M32 58 Q28 62 26 64" fill="none" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="26" cy="30" rx="4" ry="7" fill={h} opacity="0.5" />
    </svg>
  )
}
