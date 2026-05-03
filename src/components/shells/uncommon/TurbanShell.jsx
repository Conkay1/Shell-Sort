export default function TurbanShell({ size = 64, colors = {} }) {
  const p = colors.primary || '#485840'
  const s = colors.secondary || '#687860'
  const h = colors.highlight || '#789080'
  const d = colors.shadow || '#283020'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Flat white base (operculum) */}
      <ellipse cx="32" cy="56" rx="22" ry="6" fill="#F0EDE0" stroke="#C8C0A8" strokeWidth="1.5" />
      {/* Main globular body */}
      <ellipse cx="32" cy="36" rx="24" ry="22" fill={p} stroke={d} strokeWidth="2.5" />
      {/* Whorl ridge 1 */}
      <path d="M10 32 Q32 26 54 32" fill="none" stroke={s} strokeWidth="2" />
      {/* Whorl ridge 2 */}
      <path d="M12 22 Q32 16 52 22" fill="none" stroke={s} strokeWidth="1.8" />
      {/* Spire — small pointed top */}
      <ellipse cx="32" cy="16" rx="8" ry="7" fill={p} stroke={d} strokeWidth="2" />
      <ellipse cx="32" cy="10" rx="4" ry="4" fill={p} stroke={d} strokeWidth="1.8" />
      <circle cx="32" cy="7" r="2" fill={d} />
      {/* Granular texture dots */}
      <circle cx="20" cy="38" r="1.2" fill={s} />
      <circle cx="26" cy="42" r="1.2" fill={s} />
      <circle cx="34" cy="40" r="1.2" fill={s} />
      <circle cx="40" cy="36" r="1.2" fill={s} />
      <circle cx="44" cy="44" r="1.2" fill={s} />
      <circle cx="24" cy="30" r="1" fill={s} />
      <circle cx="38" cy="28" r="1" fill={s} />
      {/* Highlight */}
      <ellipse cx="22" cy="28" rx="5" ry="7" fill={h} opacity="0.45" />
    </svg>
  )
}
