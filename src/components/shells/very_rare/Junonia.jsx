export default function Junonia({ size = 64, colors = {} }) {
  const p = colors.primary || '#F8E8C8'
  const s = colors.secondary || '#C89848'
  const h = colors.highlight || '#FFF8E8'
  const d = colors.shadow || '#A07020'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Pear/spindle body */}
      <ellipse cx="32" cy="40" rx="20" ry="22" fill={p} stroke={d} strokeWidth="2" />
      {/* Narrowing spire */}
      <ellipse cx="32" cy="18" rx="10" ry="12" fill={p} stroke={d} strokeWidth="2" />
      <ellipse cx="32" cy="9" rx="5" ry="6" fill={p} stroke={d} strokeWidth="1.8" />
      <circle cx="32" cy="5" r="2.5" fill={d} />
      {/* Suture line */}
      <path d="M22 24 Q32 20 42 24" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Rows of square spots — the Junonia's defining pattern */}
      {/* Row 1 */}
      <rect x="21" y="28" width="6" height="6" rx="1" fill={s} opacity="0.75" />
      <rect x="29" y="28" width="6" height="6" rx="1" fill={s} opacity="0.75" />
      <rect x="37" y="28" width="6" height="6" rx="1" fill={s} opacity="0.75" />
      {/* Row 2 */}
      <rect x="17" y="37" width="6" height="6" rx="1" fill={s} opacity="0.7" />
      <rect x="25" y="37" width="6" height="6" rx="1" fill={s} opacity="0.7" />
      <rect x="33" y="37" width="6" height="6" rx="1" fill={s} opacity="0.7" />
      <rect x="41" y="37" width="6" height="6" rx="1" fill={s} opacity="0.7" />
      {/* Row 3 */}
      <rect x="19" y="46" width="6" height="6" rx="1" fill={s} opacity="0.65" />
      <rect x="27" y="46" width="6" height="6" rx="1" fill={s} opacity="0.65" />
      <rect x="35" y="46" width="6" height="6" rx="1" fill={s} opacity="0.65" />
      {/* Aperture */}
      <path d="M12 48 Q10 58 18 62 Q26 66 32 62" fill="none" stroke={d} strokeWidth="2" />
      {/* Highlight */}
      <ellipse cx="22" cy="36" rx="4" ry="6" fill={h} opacity="0.55" />
    </svg>
  )
}
