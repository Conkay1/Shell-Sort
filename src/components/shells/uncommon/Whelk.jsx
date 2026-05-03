export default function Whelk({ size = 64, colors = {} }) {
  const p = colors.primary || '#D0C8A0'
  const s = colors.secondary || '#A8A070'
  const h = colors.highlight || '#F0E8C8'
  const d = colors.shadow || '#807840'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Body whorl (large bottom) */}
      <ellipse cx="32" cy="46" rx="20" ry="16" fill={p} stroke={d} strokeWidth="2" />
      {/* Second whorl */}
      <ellipse cx="32" cy="30" rx="13" ry="11" fill={p} stroke={d} strokeWidth="2" />
      {/* Third whorl */}
      <ellipse cx="32" cy="18" rx="8" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Spire apex */}
      <path d="M28 12 Q32 4 36 12" fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Suture grooves between whorls */}
      <path d="M20 32 Q32 28 44 32" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M14 44 Q32 40 50 44" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Siphon canal at bottom */}
      <path d="M32 62 Q34 58 32 54" fill="none" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Spiral stripe */}
      <path d="M38 8 Q44 16 42 26 Q48 32 46 42" fill="none" stroke={s} strokeWidth="1.5" />
      {/* Shoulder ridge on body whorl */}
      <path d="M13 38 Q32 34 51 38" fill="none" stroke={s} strokeWidth="1.2" />
      {/* Highlight */}
      <ellipse cx="24" cy="42" rx="4" ry="6" fill={h} opacity="0.55" />
      <ellipse cx="26" cy="24" rx="3" ry="4" fill={h} opacity="0.45" />
    </svg>
  )
}
