export default function GoldenCowrie({ size = 64, colors = {} }) {
  const p = colors.primary || '#FFD040'
  const s = colors.secondary || '#E0A800'
  const h = colors.highlight || '#FFFF80'
  const d = colors.shadow || '#C07800'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Main oval body — perfectly smooth, solid gold */}
      <ellipse cx="32" cy="30" rx="23" ry="27" fill={p} stroke={d} strokeWidth="2" />
      {/* Gold gradient shading — darker sides */}
      <ellipse cx="10" cy="30" rx="8" ry="18" fill={d} opacity="0.2" />
      <ellipse cx="54" cy="30" rx="8" ry="18" fill={d} opacity="0.2" />
      {/* Dark band at base */}
      <ellipse cx="32" cy="54" rx="23" ry="5" fill={d} opacity="0.5" />
      {/* Toothed slit — identical to cowrie */}
      <line x1="12" y1="54" x2="52" y2="54" stroke={d} strokeWidth="3" />
      <line x1="16" y1="52" x2="16" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="20" y1="52" x2="20" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="24" y1="52" x2="24" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="28" y1="52" x2="28" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="32" y1="52" x2="32" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="36" y1="52" x2="36" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="40" y1="52" x2="40" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="44" y1="52" x2="44" y2="57" stroke={d} strokeWidth="1.8" />
      <line x1="48" y1="52" x2="48" y2="56" stroke={d} strokeWidth="1.8" />
      {/* Brilliant highlight — gold glow */}
      <ellipse cx="22" cy="18" rx="9" ry="6" fill={h} opacity="0.7" />
      <ellipse cx="18" cy="14" rx="4" ry="3" fill={h} opacity="0.9" />
      {/* Sparkle dots */}
      <circle cx="48" cy="14" r="2" fill={h} opacity="0.8" />
      <circle cx="52" cy="22" r="1.5" fill={h} opacity="0.7" />
    </svg>
  )
}
