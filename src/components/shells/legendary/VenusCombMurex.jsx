export default function VenusCombMurex({ size = 64, colors = {} }) {
  const p = colors.primary || '#FFE8F0'
  const s = colors.secondary || '#E8A0C0'
  const h = colors.highlight || '#FFFFFF'
  const d = colors.shadow || '#C06088'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Narrow elongated body */}
      <ellipse cx="32" cy="36" rx="10" ry="26" fill={p} stroke={d} strokeWidth="2" />
      {/* Spire tip */}
      <path d="M28 10 Q32 4 36 10" fill={p} stroke={d} strokeWidth="2" strokeLinejoin="round" />
      {/* Many long parallel spines — the defining feature */}
      {/* Left row of spines */}
      <line x1="22" y1="18" x2="2" y2="14" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="24" x2="2" y2="20" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="30" x2="2" y2="26" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="36" x2="2" y2="32" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="42" x2="2" y2="38" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="48" x2="2" y2="44" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="22" y1="54" x2="2" y2="50" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Right row of spines */}
      <line x1="42" y1="18" x2="62" y2="14" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="24" x2="62" y2="20" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="30" x2="62" y2="26" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="36" x2="62" y2="32" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="42" x2="62" y2="38" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="48" x2="62" y2="44" stroke={d} strokeWidth="2" strokeLinecap="round" />
      <line x1="42" y1="54" x2="62" y2="50" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Spine attachment bumps */}
      <circle cx="22" cy="18" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="24" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="30" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="36" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="42" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="48" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="22" cy="54" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="18" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="24" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="30" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="36" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="42" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="48" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      <circle cx="42" cy="54" r="2.5" fill={s} stroke={d} strokeWidth="1" />
      {/* Highlight on body */}
      <path d="M26 14 Q26 36 26 56" fill="none" stroke={h} strokeWidth="2.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  )
}
