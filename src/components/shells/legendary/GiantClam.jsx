export default function GiantClam({ size = 64, colors = {} }) {
  const p = colors.primary || '#F8F8FF'
  const s = colors.secondary || '#C0D8E8'
  const h = colors.highlight || '#FFFFFF'
  const d = colors.shadow || '#8090A8'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Blue interior mantle */}
      <path d="M8 38 Q8 58 32 60 Q56 58 56 38 Q56 28 32 26 Q8 28 8 38Z"
        fill={s} stroke="none" />
      {/* Lower valve with dramatic wavy edge */}
      <path d="M4 40 Q8 34 12 40 Q16 46 20 40 Q24 34 28 40 Q32 46 36 40 Q40 34 44 40 Q48 46 52 40 Q56 34 60 40 Q60 56 32 62 Q4 56 4 40Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Upper valve with matching wavy edge */}
      <path d="M4 36 Q8 30 12 36 Q16 42 20 36 Q24 30 28 36 Q32 42 36 36 Q40 30 44 36 Q48 42 52 36 Q56 30 60 36 Q60 20 32 14 Q4 20 4 36Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Center seam */}
      <path d="M4 38 Q8 32 12 38 Q16 44 20 38 Q24 32 28 38 Q32 44 36 38 Q40 32 44 38 Q48 44 52 38 Q56 32 60 38"
        fill="none" stroke={d} strokeWidth="1.5" />
      {/* Hinge knob */}
      <ellipse cx="32" cy="14" rx="6" ry="4" fill={d} opacity="0.5" />
      {/* Bold growth ridges */}
      <path d="M10 32 Q32 26 54 32" fill="none" stroke={d} strokeWidth="1.8" />
      <path d="M8 26 Q32 20 56 26" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Blue iridescent interior glow */}
      <ellipse cx="32" cy="42" rx="18" ry="10" fill={s} opacity="0.5" />
      {/* Highlight */}
      <ellipse cx="18" cy="22" rx="7" ry="5" fill={h} opacity="0.7" />
    </svg>
  )
}
