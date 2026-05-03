export default function PaperNautilus({ size = 64, colors = {} }) {
  const p = colors.primary || '#F8F0FF'
  const s = colors.secondary || '#C8A8E0'
  const h = colors.highlight || '#FFFFFF'
  const d = colors.shadow || '#9060B8'

  return (
    <svg viewBox="0 0 64 64" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* Boat/leaf hull shape — the paper nautilus is a very different shell */}
      {/* Main shell body (boat hull viewed from side) */}
      <path d="M4 36 Q6 20 32 14 Q58 20 60 36 Q58 52 32 56 Q6 52 4 36Z"
        fill={p} stroke={d} strokeWidth="1.5" />
      {/* Keel ridge at bottom */}
      <path d="M4 36 Q32 42 60 36" fill="none" stroke={d} strokeWidth="2" />
      {/* Prominent parallel ribs — paper nautilus signature */}
      <path d="M14 20 Q32 16 50 20" fill="none" stroke={s} strokeWidth="1.5" />
      <path d="M10 26 Q32 21 54 26" fill="none" stroke={s} strokeWidth="1.5" />
      <path d="M8 32 Q32 27 56 32" fill="none" stroke={s} strokeWidth="1.5" />
      <path d="M8 38 Q32 33 56 38" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M10 44 Q32 39 54 44" fill="none" stroke={s} strokeWidth="1.2" />
      <path d="M14 49 Q32 45 50 49" fill="none" stroke={s} strokeWidth="1" />
      {/* Spiral coil at one end (left) */}
      <ellipse cx="12" cy="36" rx="8" ry="10" fill={p} stroke={d} strokeWidth="1.5" />
      <ellipse cx="12" cy="36" rx="5" ry="6" fill={s} opacity="0.4" stroke={d} strokeWidth="1.2" />
      <ellipse cx="12" cy="36" rx="2.5" ry="3" fill={d} opacity="0.4" />
      {/* Translucency effect — faint inner view */}
      <ellipse cx="36" cy="34" rx="14" ry="10" fill={s} opacity="0.1" />
      {/* Delicate highlight — very shiny, translucent shell */}
      <ellipse cx="28" cy="22" rx="10" ry="5" fill={h} opacity="0.7" />
      <ellipse cx="22" cy="18" rx="5" ry="3" fill={h} opacity="0.9" />
      {/* Purple iridescent edge tint */}
      <path d="M14 20 Q32 14 50 20" fill="none" stroke={d} strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
