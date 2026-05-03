export default function Conch({ size = 64, colors = {} }) {
  const p = colors.primary || '#F0A878'
  const s = colors.secondary || '#D07848'
  const h = colors.highlight || '#FFD0A8'
  const d = colors.shadow || '#B05830'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main body whorl (large oval) */}
      <ellipse cx="28" cy="40" rx="22" ry="20" fill={p} stroke={d} strokeWidth="2" />
      {/* Flared outer lip */}
      <path d="M6 40 Q2 52 10 58 Q18 64 30 60 Q48 56 52 44 Q56 32 50 22"
        fill={h} stroke={d} strokeWidth="1.5" />
      {/* Spire (pointed top) */}
      <path d="M28 20 Q34 8 44 4 Q50 2 52 8 Q54 14 48 20 Q42 26 36 26 Q30 26 28 20Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Spire whorls */}
      <path d="M34 12 Q40 8 46 10" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M32 18 Q38 14 44 16" fill="none" stroke={s} strokeWidth="1.2" />
      {/* Canal (siphon tip at bottom) */}
      <path d="M10 56 Q8 60 12 62" stroke={d} strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Inner pink of opening */}
      <path d="M8 42 Q6 52 12 58 Q20 62 30 58 Q42 54 48 44"
        fill="none" stroke={s} strokeWidth="2" />
      {/* Body whorl pattern */}
      <path d="M14 34 Q28 28 42 34" fill="none" stroke={s} strokeWidth="1" />
      <path d="M10 44 Q28 38 46 44" fill="none" stroke={s} strokeWidth="1" />
      {/* Highlight */}
      <ellipse cx="20" cy="34" rx="5" ry="7" fill={h} opacity="0.55" />
    </svg>
  )
}
