export default function Auger({ size = 64, colors = {} }) {
  const p = colors.primary || '#B8C8E0'
  const s = colors.secondary || '#8098C0'
  const h = colors.highlight || '#D8E8FF'
  const d = colors.shadow || '#506080'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Very elongated tower — auger's most distinctive feature */}
      {/* Whorl 1 (bottom, widest) */}
      <ellipse cx="32" cy="56" rx="10" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 2 */}
      <ellipse cx="32" cy="48" rx="9" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 3 */}
      <ellipse cx="32" cy="40" rx="8" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 4 */}
      <ellipse cx="32" cy="32" rx="7" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 5 */}
      <ellipse cx="32" cy="24" rx="6" ry="7" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 6 */}
      <ellipse cx="32" cy="17" rx="5" ry="6" fill={p} stroke={d} strokeWidth="2" />
      {/* Whorl 7 (near tip) */}
      <ellipse cx="32" cy="11" rx="3.5" ry="5" fill={p} stroke={d} strokeWidth="1.5" />
      {/* Pointed tip */}
      <path d="M30 7 Q32 2 34 7" fill={p} stroke={d} strokeWidth="1.5" strokeLinejoin="round" />
      {/* Suture grooves */}
      <path d="M23 49 Q32 45 41 49" fill="none" stroke={d} strokeWidth="1.2" />
      <path d="M24 41 Q32 37 40 41" fill="none" stroke={d} strokeWidth="1.2" />
      <path d="M25 33 Q32 29 39 33" fill="none" stroke={d} strokeWidth="1.2" />
      <path d="M26 25 Q32 21 38 25" fill="none" stroke={d} strokeWidth="1.2" />
      <path d="M27 18 Q32 14 37 18" fill="none" stroke={d} strokeWidth="1.2" />
      {/* Spiral band stripe */}
      <path d="M42 52 Q44 44 40 36 Q36 28 38 20 Q40 12 38 6"
        fill="none" stroke={s} strokeWidth="1.5" />
      {/* Highlight */}
      <path d="M26 54 Q26 38 26 20" fill="none" stroke={h} strokeWidth="2.5" strokeLinecap="round" opacity="0.55" />
    </svg>
  )
}
