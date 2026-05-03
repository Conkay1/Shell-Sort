export default function GloryOfTheSea({ size = 64, colors = {} }) {
  const p = colors.primary || '#F0D0A8'
  const s = colors.secondary || '#D09060'
  const h = colors.highlight || '#FFF8F0'
  const d = colors.shadow || '#A86030'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Cone body */}
      <path d="M16 10 Q48 10 54 12 L40 58 Q32 62 24 58 L10 12 Z"
        fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Spire platform */}
      <rect x="14" y="8" width="36" height="7" rx="2" fill={s} stroke={d} strokeWidth="1.5" />
      <circle cx="32" cy="8" r="3.5" fill={p} stroke={d} strokeWidth="1.5" />
      {/* Intricate tent/triangle network pattern — Glory of the Sea's signature */}
      {/* Row of triangular tent marks */}
      <path d="M22 20 L26 16 L30 20 L34 16 L38 20 L42 16 L46 20"
        fill="none" stroke={d} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M20 28 L24 24 L28 28 L32 24 L36 28 L40 24 L44 28"
        fill="none" stroke={d} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M18 36 L22 32 L26 36 L30 32 L34 36 L38 32 L42 36 L46 32"
        fill="none" stroke={d} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M16 44 L20 40 L24 44 L28 40 L32 44 L36 40 L40 44 L44 40 L48 44"
        fill="none" stroke={d} strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M18 52 L22 48 L26 52 L30 48 L34 52 L38 48 L42 52"
        fill="none" stroke={d} strokeWidth="1.2" strokeLinejoin="round" />
      {/* Horizontal grid lines */}
      <path d="M22 20 Q32 18 42 20" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M20 28 Q32 26 44 28" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M18 36 Q32 34 46 36" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M16 44 Q32 42 48 44" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M18 52 Q32 50 46 52" fill="none" stroke={s} strokeWidth="0.8" />
      {/* Highlight */}
      <path d="M18 16 Q20 36 20 52" fill="none" stroke={h} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
