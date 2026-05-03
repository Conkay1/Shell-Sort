export default function Oyster({ size = 64, colors = {} }) {
  const p = colors.primary || '#C8C0B0'
  const s = colors.secondary || '#A09888'
  const h = colors.highlight || '#E8E0D0'
  const d = colors.shadow || '#808070'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Irregular oyster shape — lumpy outline is its signature */}
      <path d="M12 20 Q8 12 16 8 Q22 4 28 8 Q34 4 42 6 Q52 8 56 18 Q60 28 56 40 Q52 52 42 58 Q32 62 22 58 Q12 54 8 44 Q4 34 12 20Z"
        fill={p} stroke={d} strokeWidth="2" />
      {/* Rough texture bumps along edge */}
      <path d="M12 20 Q10 16 14 14" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M16 8 Q18 6 22 8" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M42 6 Q46 5 50 10" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M56 18 Q58 22 56 28" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M56 40 Q54 46 50 50" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M22 58 Q16 58 12 52" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Layered rough growth lines */}
      <path d="M18 16 Q32 10 48 18" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M14 26 Q32 20 50 28" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M12 38 Q32 32 52 40" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M14 48 Q32 44 50 50" fill="none" stroke={s} strokeWidth="1.2" />
      {/* Inner sheen — pearlescent center */}
      <ellipse cx="32" cy="34" rx="14" ry="16" fill={h} opacity="0.4" />
      <ellipse cx="28" cy="30" rx="5" ry="6" fill={h} opacity="0.5" />
    </svg>
  )
}
