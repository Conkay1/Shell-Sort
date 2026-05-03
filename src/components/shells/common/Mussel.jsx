export default function Mussel({ size = 64, colors = {} }) {
  const p = colors.primary || '#4A4060'
  const s = colors.secondary || '#6B5C80'
  const h = colors.highlight || '#8878A0'
  const d = colors.shadow || '#2E2840'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main body — elongated teardrop */}
      <ellipse cx="32" cy="36" rx="20" ry="26" fill={p} stroke={d} strokeWidth="2" />
      {/* Narrower top (beak) */}
      <ellipse cx="32" cy="14" rx="8" ry="8" fill={p} stroke={d} strokeWidth="2" />
      {/* Outer edge darker shade */}
      <path d="M14 36 Q12 56 32 62 Q52 56 50 36 Q50 16 32 8 Q14 16 14 36Z" fill="none" stroke={s} strokeWidth="1.5" />
      {/* Growth lines */}
      <path d="M18 42 Q32 48 46 42" fill="none" stroke={s} strokeWidth="1" />
      <path d="M16 50 Q32 56 48 50" fill="none" stroke={s} strokeWidth="1" />
      {/* Highlight sheen diagonal stripe */}
      <path d="M22 16 Q26 28 24 44" fill="none" stroke={h} strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Beak tip highlight */}
      <ellipse cx="30" cy="11" rx="3" ry="2" fill={h} opacity="0.5" />
    </svg>
  )
}
