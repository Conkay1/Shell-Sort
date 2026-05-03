export default function Periwinkle({ size = 64, colors = {} }) {
  const p = colors.primary || '#8BA5C0'
  const s = colors.secondary || '#6080A0'
  const h = colors.highlight || '#B0C8E0'
  const d = colors.shadow || '#405870'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Outer whorl body */}
      <ellipse cx="32" cy="38" rx="24" ry="22" fill={p} stroke={d} strokeWidth="2" />
      {/* Second whorl */}
      <ellipse cx="32" cy="30" rx="14" ry="13" fill={s} stroke={d} strokeWidth="1.5" />
      {/* Third whorl (apex) */}
      <ellipse cx="32" cy="24" rx="7" ry="6" fill={p} stroke={d} strokeWidth="1.5" />
      {/* Apex tip */}
      <circle cx="32" cy="20" r="3" fill={d} />
      {/* Umbilicus (opening at base) */}
      <ellipse cx="32" cy="52" rx="8" ry="5" fill={d} opacity="0.4" />
      {/* Suture lines between whorls */}
      <path d="M18 28 Q32 24 46 28" fill="none" stroke={d} strokeWidth="1.2" />
      <path d="M10 40 Q32 35 54 40" fill="none" stroke={d} strokeWidth="1.2" />
      {/* Highlight */}
      <ellipse cx="24" cy="34" rx="4" ry="5" fill={h} opacity="0.5" />
    </svg>
  )
}
