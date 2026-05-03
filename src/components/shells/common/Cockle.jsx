export default function Cockle({ size = 64, colors = {} }) {
  const p = colors.primary || '#E8C878'
  const s = colors.secondary || '#C8A048'
  const h = colors.highlight || '#F8E8A8'
  const d = colors.shadow || '#A07830'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main heart/round body */}
      <path d="M32 58 Q10 52 8 34 Q6 16 20 10 Q26 8 32 10 Q38 8 44 10 Q58 16 56 34 Q54 52 32 58Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Hinge dip at top */}
      <path d="M22 10 Q32 6 42 10" fill="none" stroke={d} strokeWidth="2" />
      {/* Bold radiating ribs — the cockle's defining feature */}
      <line x1="32" y1="8" x2="8" y2="40" stroke={s} strokeWidth="2.2" />
      <line x1="32" y1="8" x2="11" y2="30" stroke={s} strokeWidth="2" />
      <line x1="32" y1="8" x2="14" y2="20" stroke={s} strokeWidth="1.8" />
      <line x1="32" y1="8" x2="20" y2="13" stroke={s} strokeWidth="1.6" />
      <line x1="32" y1="8" x2="32" y2="58" stroke={s} strokeWidth="2.2" />
      <line x1="32" y1="8" x2="44" y2="13" stroke={s} strokeWidth="1.6" />
      <line x1="32" y1="8" x2="50" y2="20" stroke={s} strokeWidth="1.8" />
      <line x1="32" y1="8" x2="53" y2="30" stroke={s} strokeWidth="2" />
      <line x1="32" y1="8" x2="56" y2="40" stroke={s} strokeWidth="2.2" />
      {/* Edge scalloping between ribs */}
      <path d="M8 40 Q10 48 14 54 Q22 60 32 58 Q42 60 50 54 Q54 48 56 40"
        fill="none" stroke={d} strokeWidth="1.5" />
      {/* Highlight */}
      <ellipse cx="24" cy="26" rx="4" ry="5" fill={h} opacity="0.55" />
    </svg>
  )
}
