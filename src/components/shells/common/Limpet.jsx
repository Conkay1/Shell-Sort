export default function Limpet({ size = 64, colors = {} }) {
  const p = colors.primary || '#C8B090'
  const s = colors.secondary || '#A08858'
  const h = colors.highlight || '#E0CCB0'
  const d = colors.shadow || '#786040'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Base shadow (oval footprint) */}
      <ellipse cx="32" cy="58" rx="24" ry="4" fill={d} opacity="0.25" />
      {/* Main cone body */}
      <path d="M8 52 Q32 4 56 52 Q44 60 32 60 Q20 60 8 52Z" fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Radiating ridges */}
      <line x1="32" y1="10" x2="8" y2="52" stroke={s} strokeWidth="1.2" />
      <line x1="32" y1="10" x2="14" y2="54" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="20" y2="58" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="26" y2="60" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="38" y2="60" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="44" y2="58" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="50" y2="54" stroke={s} strokeWidth="1" />
      <line x1="32" y1="10" x2="56" y2="52" stroke={s} strokeWidth="1.2" />
      {/* Growth ring arcs */}
      <path d="M18 42 Q32 16 46 42" fill="none" stroke={s} strokeWidth="1" />
      <path d="M12 50 Q32 28 52 50" fill="none" stroke={s} strokeWidth="1" />
      {/* Apex highlight */}
      <circle cx="32" cy="12" r="4" fill={h} opacity="0.7" />
      {/* Side sheen */}
      <path d="M16 44 Q22 28 30 16" fill="none" stroke={h} strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}
