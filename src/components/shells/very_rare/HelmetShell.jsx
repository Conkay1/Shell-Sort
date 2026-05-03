export default function HelmetShell({ size = 64, colors = {} }) {
  const p = colors.primary || '#D0B880'
  const s = colors.secondary || '#A88840'
  const h = colors.highlight || '#F0D8A0'
  const d = colors.shadow || '#806020'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Heavy rounded body */}
      <ellipse cx="32" cy="38" rx="26" ry="20" fill={p} stroke={d} strokeWidth="2" />
      {/* Wide outer lip — the helmet's defining feature */}
      <path d="M6 42 Q4 52 10 58 Q20 64 32 62 Q44 64 54 58 Q60 52 58 42"
        fill={h} stroke={d} strokeWidth="2" />
      {/* Lip inner edge */}
      <path d="M10 42 Q10 52 18 56 Q24 60 32 58 Q40 60 46 56 Q54 52 54 42"
        fill="none" stroke={s} strokeWidth="1.5" />
      {/* Spire (small, squat) */}
      <ellipse cx="32" cy="22" rx="12" ry="10" fill={p} stroke={d} strokeWidth="2" />
      <ellipse cx="32" cy="14" rx="7" ry="7" fill={p} stroke={d} strokeWidth="2" />
      <circle cx="32" cy="9" r="4" fill={p} stroke={d} strokeWidth="1.8" />
      <circle cx="32" cy="6" r="2" fill={d} />
      {/* Spotted pattern on lip */}
      <circle cx="14" cy="52" r="3" fill={s} opacity="0.6" />
      <circle cx="22" cy="56" r="3" fill={s} opacity="0.6" />
      <circle cx="30" cy="58" r="3" fill={s} opacity="0.6" />
      <circle cx="38" cy="58" r="3" fill={s} opacity="0.6" />
      <circle cx="46" cy="56" r="3" fill={s} opacity="0.6" />
      <circle cx="52" cy="52" r="3" fill={s} opacity="0.6" />
      {/* Body whorl bands */}
      <path d="M8 34 Q32 28 56 34" fill="none" stroke={s} strokeWidth="1.5" />
      <path d="M10 40 Q32 34 54 40" fill="none" stroke={s} strokeWidth="1.2" />
      {/* Highlight */}
      <ellipse cx="18" cy="32" rx="6" ry="8" fill={h} opacity="0.55" />
    </svg>
  )
}
