export default function Volute({ size = 64, colors = {} }) {
  const p = colors.primary || '#F0B8A0'
  const s = colors.secondary || '#D07858'
  const h = colors.highlight || '#FFE0D0'
  const d = colors.shadow || '#A85838'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main oval body */}
      <ellipse cx="32" cy="36" rx="20" ry="26" fill={p} stroke={d} strokeWidth="2" />
      {/* Shoulder ridge — volute's key feature */}
      <path d="M12 24 Q32 18 52 24" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Shoulder knobs */}
      <circle cx="16" cy="23" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="24" cy="20" r="3" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="32" cy="18" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="40" cy="20" r="3" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="48" cy="23" r="3.5" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Spire above shoulder */}
      <ellipse cx="32" cy="14" rx="8" ry="8" fill={p} stroke={d} strokeWidth="2" />
      <ellipse cx="32" cy="8" rx="4" ry="4" fill={p} stroke={d} strokeWidth="1.5" />
      <circle cx="32" cy="5" r="2" fill={d} />
      {/* Zig-zag pattern on body */}
      <path d="M14 32 L20 28 L26 34 L32 28 L38 34 L44 28 L50 32"
        fill="none" stroke={s} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 42 L20 38 L26 44 L32 38 L38 44 L44 38 L50 42"
        fill="none" stroke={s} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Aperture */}
      <path d="M12 46 Q10 56 18 60 Q26 64 32 62" fill="none" stroke={d} strokeWidth="2" />
      {/* Highlight */}
      <ellipse cx="22" cy="34" rx="4" ry="7" fill={h} opacity="0.55" />
    </svg>
  )
}
