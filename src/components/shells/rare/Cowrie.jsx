export default function Cowrie({ size = 64, colors = {} }) {
  const p = colors.primary || '#E8D888'
  const s = colors.secondary || '#C0B060'
  const h = colors.highlight || '#FFFFF0'
  const d = colors.shadow || '#909030'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main oval body — smooth egg shape */}
      <ellipse cx="32" cy="30" rx="22" ry="26" fill={p} stroke={d} strokeWidth="2" />
      {/* Dorsal spots — the cowrie's signature pattern */}
      <circle cx="22" cy="18" r="3" fill={s} opacity="0.7" />
      <circle cx="32" cy="14" r="3" fill={s} opacity="0.7" />
      <circle cx="42" cy="18" r="3" fill={s} opacity="0.7" />
      <circle cx="18" cy="28" r="2.5" fill={s} opacity="0.6" />
      <circle cx="46" cy="28" r="2.5" fill={s} opacity="0.6" />
      <circle cx="24" cy="36" r="2.5" fill={s} opacity="0.6" />
      <circle cx="40" cy="36" r="2.5" fill={s} opacity="0.6" />
      <circle cx="32" cy="40" r="2.5" fill={s} opacity="0.6" />
      {/* Dark band around base where slit is */}
      <ellipse cx="32" cy="54" rx="22" ry="5" fill={d} opacity="0.5" />
      {/* Toothed slit opening at base */}
      <line x1="14" y1="54" x2="50" y2="54" stroke={d} strokeWidth="2.5" />
      <line x1="18" y1="52" x2="18" y2="56" stroke={d} strokeWidth="1.5" />
      <line x1="22" y1="52" x2="22" y2="57" stroke={d} strokeWidth="1.5" />
      <line x1="26" y1="52" x2="26" y2="57" stroke={d} strokeWidth="1.5" />
      <line x1="30" y1="52" x2="30" y2="57" stroke={d} strokeWidth="1.5" />
      <line x1="34" y1="52" x2="34" y2="57" stroke={d} strokeWidth="1.5" />
      <line x1="38" y1="52" x2="38" y2="57" stroke={d} strokeWidth="1.5" />
      <line x1="42" y1="52" x2="42" y2="56" stroke={d} strokeWidth="1.5" />
      <line x1="46" y1="52" x2="46" y2="56" stroke={d} strokeWidth="1.5" />
      {/* Glossy highlight on dome */}
      <ellipse cx="24" cy="20" rx="7" ry="5" fill={h} opacity="0.65" />
    </svg>
  )
}
