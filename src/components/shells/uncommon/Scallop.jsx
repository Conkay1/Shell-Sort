export default function Scallop({ size = 64, colors = {} }) {
  const p = colors.primary || '#F8D8C0'
  const s = colors.secondary || '#E0A888'
  const h = colors.highlight || '#FFF0E8'
  const d = colors.shadow || '#C07848'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Scalloped bottom edge — the defining feature */}
      <path d="M8 54 Q11 48 14 54 Q17 60 20 54 Q23 48 26 54 Q29 60 32 54 Q35 48 38 54 Q41 60 44 54 Q47 48 50 54 Q53 60 56 54 Q52 62 32 62 Q12 62 8 54Z"
        fill={p} stroke={d} strokeWidth="1.5" />
      {/* Main fan body */}
      <path d="M32 8 Q8 12 6 38 Q6 50 32 54 Q58 50 58 38 Q56 12 32 8Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Hinge ears */}
      <path d="M24 8 Q20 4 16 6 Q12 10 16 14" fill={s} stroke={d} strokeWidth="1.5" />
      <path d="M40 8 Q44 4 48 6 Q52 10 48 14" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Radiating ribs from hinge */}
      <line x1="32" y1="8" x2="8" y2="48" stroke={s} strokeWidth="2" />
      <line x1="32" y1="8" x2="12" y2="40" stroke={s} strokeWidth="1.8" />
      <line x1="32" y1="8" x2="16" y2="30" stroke={s} strokeWidth="1.6" />
      <line x1="32" y1="8" x2="22" y2="20" stroke={s} strokeWidth="1.5" />
      <line x1="32" y1="8" x2="32" y2="54" stroke={s} strokeWidth="2" />
      <line x1="32" y1="8" x2="42" y2="20" stroke={s} strokeWidth="1.5" />
      <line x1="32" y1="8" x2="48" y2="30" stroke={s} strokeWidth="1.6" />
      <line x1="32" y1="8" x2="52" y2="40" stroke={s} strokeWidth="1.8" />
      <line x1="32" y1="8" x2="56" y2="48" stroke={s} strokeWidth="2" />
      {/* Highlight sheen */}
      <ellipse cx="23" cy="26" rx="5" ry="7" fill={h} opacity="0.55" />
    </svg>
  )
}
