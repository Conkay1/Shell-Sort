export default function ConeShell({ size = 64, colors = {} }) {
  const p = colors.primary || '#E8C8A0'
  const s = colors.secondary || '#C09060'
  const h = colors.highlight || '#FFF0D8'
  const d = colors.shadow || '#A07040'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Cone body — triangle with rounded bottom */}
      <path d="M18 8 Q46 8 52 10 L38 58 Q32 62 26 58 L12 10 Z"
        fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Flat top (spire platform) */}
      <rect x="16" y="8" width="32" height="6" rx="2" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Small spiral spire bumps at top */}
      <circle cx="32" cy="8" r="3" fill={p} stroke={d} strokeWidth="1.5" />
      <circle cx="24" cy="9" r="2" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="40" cy="9" r="2" fill={s} stroke={d} strokeWidth="1" />
      {/* Tent/triangular dot pattern — the cone shell signature */}
      <circle cx="32" cy="20" r="2.5" fill={d} opacity="0.6" />
      <circle cx="24" cy="25" r="2" fill={d} opacity="0.5" />
      <circle cx="40" cy="25" r="2" fill={d} opacity="0.5" />
      <circle cx="28" cy="32" r="2" fill={d} opacity="0.5" />
      <circle cx="36" cy="32" r="2" fill={d} opacity="0.5" />
      <circle cx="20" cy="36" r="2" fill={d} opacity="0.45" />
      <circle cx="44" cy="36" r="2" fill={d} opacity="0.45" />
      <circle cx="24" cy="42" r="2" fill={d} opacity="0.45" />
      <circle cx="32" cy="44" r="2" fill={d} opacity="0.45" />
      <circle cx="40" cy="42" r="2" fill={d} opacity="0.45" />
      <circle cx="28" cy="50" r="1.8" fill={d} opacity="0.4" />
      <circle cx="36" cy="50" r="1.8" fill={d} opacity="0.4" />
      {/* Horizontal growth lines */}
      <path d="M20 22 Q32 20 44 22" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M18 34 Q32 32 46 34" fill="none" stroke={s} strokeWidth="0.8" />
      <path d="M16 46 Q32 44 48 46" fill="none" stroke={s} strokeWidth="0.8" />
      {/* Highlight */}
      <path d="M20 14 Q22 36 22 50" fill="none" stroke={h} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
