export default function TritonsTrumpet({ size = 64, colors = {} }) {
  const p = colors.primary || '#D8C8E0'
  const s = colors.secondary || '#A088C0'
  const h = colors.highlight || '#F0E0FF'
  const d = colors.shadow || '#705898'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Large body whorl */}
      <ellipse cx="30" cy="44" rx="22" ry="18" fill={p} stroke={d} strokeWidth="2" />
      {/* Second whorl */}
      <ellipse cx="30" cy="28" rx="14" ry="12" fill={p} stroke={d} strokeWidth="2" />
      {/* Third whorl */}
      <ellipse cx="30" cy="16" rx="9" ry="9" fill={p} stroke={d} strokeWidth="2" />
      {/* Spire tip */}
      <ellipse cx="30" cy="9" rx="5" ry="6" fill={p} stroke={d} strokeWidth="1.8" />
      <circle cx="30" cy="4" r="2.5" fill={d} />
      {/* Sutures */}
      <path d="M17 30 Q30 25 43 30" fill="none" stroke={d} strokeWidth="1.5" />
      <path d="M10 44 Q30 38 50 44" fill="none" stroke={d} strokeWidth="1.5" />
      {/* Zig-zag pattern stripes — triton's signature markings */}
      <path d="M12 36 L16 32 L20 38 L24 32 L28 38 L32 32 L36 38 L40 32 L44 38 L48 32"
        fill="none" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      <path d="M12 48 L16 44 L20 50 L24 44 L28 50 L32 44 L36 50 L40 44 L44 50 L48 44"
        fill="none" stroke={s} strokeWidth="2" strokeLinejoin="round" />
      {/* Shoulder knobs */}
      <circle cx="12" cy="36" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="48" cy="36" r="3" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="18" cy="28" r="2.5" fill={s} stroke={d} strokeWidth="1.2" />
      <circle cx="42" cy="28" r="2.5" fill={s} stroke={d} strokeWidth="1.2" />
      {/* Siphon canal */}
      <path d="M8 54 Q6 60 10 62" fill="none" stroke={d} strokeWidth="2" strokeLinecap="round" />
      {/* Highlight */}
      <ellipse cx="18" cy="40" rx="5" ry="7" fill={h} opacity="0.5" />
    </svg>
  )
}
