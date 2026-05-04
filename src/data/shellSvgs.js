// Single source of truth for all 25 shell SVGs.
// Each function returns the SVG body (children of <svg>), so it can be:
//   1. Wrapped in a React component (via dangerouslySetInnerHTML)
//   2. Rendered directly to PNG by a Node script for design review
//
// Style guide (matches reference flat-illustration aesthetic):
//   - Bold dark-navy outline: stroke="#2A2D4A", strokeWidth ~2.5
//   - Solid pastel base fills (no gradients, no shading)
//   - One bold contrasting pattern per shell (stripes, dots, network, etc.)
//   - viewBox 0 0 64 64

const OUTLINE = '#2A2D4A'
const SW = 2.5  // standard stroke width

// Helper: get colors with defaults baked in
const c = (colors = {}) => ({
  p: colors.primary || '#F5E8D5',
  s: colors.secondary || '#A5C6E0',
  h: colors.highlight || '#FFFFFF',
  d: colors.shadow || OUTLINE,
})

export const SHELL_SVGS = {

  // ── COMMON ─────────────────────────────────────────────────────────────────

  clam: (cl) => {
    const { p, s, h } = c(cl)
    // Fan-shaped bivalve, hinge at top, scalloped bottom
    return `
      <path d="M32 8 Q28 8 26 10 Q10 18 6 38 Q6 50 14 54 Q16 58 18 54 Q20 58 22 54 Q24 58 26 54
               Q28 58 30 54 Q32 58 34 54 Q36 58 38 54 Q40 58 42 54 Q44 58 46 54 Q48 58 50 54
               Q58 50 58 38 Q54 18 38 10 Q36 8 32 8Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M14 26 Q32 22 50 26" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M10 34 Q32 30 54 34" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M9 42 Q32 38 55 42" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M11 50 Q32 46 53 50" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <ellipse cx="32" cy="10" rx="5" ry="2" fill="${s}" stroke="${OUTLINE}" stroke-width="1.5"/>
      <ellipse cx="22" cy="22" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  mussel: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M22 6 Q14 14 12 28 Q10 44 18 54 Q28 60 36 56 Q48 50 50 36 Q52 22 44 12 Q34 4 22 6Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M18 14 Q28 18 38 14" fill="none" stroke="${s}" stroke-width="2.5"/>
      <path d="M14 22 Q30 28 46 22" fill="none" stroke="${s}" stroke-width="2.5"/>
      <path d="M12 32 Q30 38 50 32" fill="none" stroke="${s}" stroke-width="2.5"/>
      <path d="M14 42 Q30 48 48 42" fill="none" stroke="${s}" stroke-width="2.5"/>
      <path d="M18 52 Q28 56 38 52" fill="none" stroke="${s}" stroke-width="2.5"/>
      <ellipse cx="26" cy="14" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  periwinkle: (cl) => {
    const { p, s, h } = c(cl)
    // Snail shell with visible apex on top
    return `
      <path d="M14 40 Q10 24 22 14 Q34 8 46 18 Q56 30 50 46 Q42 58 26 58 Q14 56 14 40Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M44 26 Q44 18 36 16 Q26 16 24 26 Q24 36 34 38 Q44 36 44 28"
        fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M38 26 Q38 22 34 22 Q30 24 32 28 Q36 30 38 26"
        fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <ellipse cx="34" cy="26" rx="2" ry="2" fill="${OUTLINE}"/>
      <path d="M14 40 Q22 50 38 50 Q50 48 50 44" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <ellipse cx="22" cy="24" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  limpet: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M8 50 Q32 8 56 50 Q44 56 32 56 Q20 56 8 50Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <line x1="32" y1="14" x2="14" y2="50" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="14" x2="22" y2="54" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="14" x2="32" y2="56" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="14" x2="42" y2="54" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="14" x2="50" y2="50" stroke="${s}" stroke-width="2.2"/>
      <circle cx="32" cy="14" r="3" fill="${h}"/>
    `
  },

  cockle: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M32 8 Q14 8 8 22 Q4 36 10 48 Q14 56 18 56 Q19 50 19 56 Q22 56 23 56 Q24 50 24 56
               Q27 56 28 56 Q29 50 29 56 Q33 56 34 56 Q35 50 35 56 Q40 56 41 56 Q42 50 42 56
               Q46 56 50 56 Q56 50 60 36 Q60 22 50 12 Q40 6 32 8Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <line x1="32" y1="10" x2="14" y2="48" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="22" y2="54" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="32" y2="56" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="42" y2="54" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="50" y2="48" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="18" y2="32" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="32" y1="10" x2="46" y2="32" stroke="${OUTLINE}" stroke-width="2"/>
      <ellipse cx="22" cy="20" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  // ── UNCOMMON ───────────────────────────────────────────────────────────────

  conch: (cl) => {
    const { p, s, h } = c(cl)
    // Spiral body with tapered spire on top and flared lip wrapping around
    return `
      <path d="M14 38 Q10 22 22 16 Q22 10 28 6 Q36 4 38 12 Q44 12 46 18 Q44 24 38 22
               Q56 26 54 44 Q48 60 32 60 Q14 60 12 48 Q8 42 14 38Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M22 16 Q30 12 38 12" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M14 26 Q24 22 36 22" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M16 32 L20 28 L18 36 L24 32 L22 40 L28 36 L26 44 L32 40"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M30 32 L34 28 L32 36 L38 32 L36 40 L42 36 L40 44 L46 40 L44 48 L50 44"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M30 56 Q40 52 44 44" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <ellipse cx="20" cy="32" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  scallop: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M32 8 Q26 6 22 10 L18 12 Q12 14 8 22 Q4 32 6 42 Q8 50 12 52
               Q14 56 16 52 Q19 56 21 52 Q24 56 26 52 Q29 56 31 52 Q34 56 36 52
               Q39 56 41 52 Q44 56 46 52 Q49 56 51 52 Q56 50 58 42 Q60 32 56 22
               Q52 14 46 12 L42 10 Q38 6 32 8Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <line x1="32" y1="10" x2="14" y2="48" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="10" x2="22" y2="52" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="10" x2="32" y2="54" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="10" x2="42" y2="52" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="10" x2="50" y2="48" stroke="${s}" stroke-width="2.2"/>
      <line x1="32" y1="10" x2="18" y2="32" stroke="${OUTLINE}" stroke-width="1.8"/>
      <line x1="32" y1="10" x2="46" y2="32" stroke="${OUTLINE}" stroke-width="1.8"/>
      <ellipse cx="22" cy="22" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  oyster: (cl) => {
    const { p, s, h } = c(cl)
    // Irregular lumpy outline with layered ridges
    return `
      <path d="M10 22 Q6 14 14 8 Q22 4 28 8 Q34 4 42 6 Q52 8 56 18 Q60 28 56 38 Q58 50 50 56 Q40 62 30 58 Q18 62 12 54 Q4 46 8 36 Q4 28 10 22Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M12 16 Q22 12 32 14 Q44 12 52 18" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M10 24 Q22 22 32 24 Q44 22 56 26" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M9 34 Q22 32 32 34 Q46 32 56 36" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M11 44 Q24 42 34 44 Q46 42 54 46" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M14 52 Q26 50 34 52 Q44 50 50 54" fill="none" stroke="${s}" stroke-width="2"/>
      <ellipse cx="20" cy="18" rx="4" ry="3" fill="${h}" opacity="0.9"/>
    `
  },

  whelk: (cl) => {
    const { p, s, h } = c(cl)
    // Tall multi-whorl spiral, pointed spire on top
    return `
      <path d="M14 46 Q10 30 18 22 Q14 16 18 10 Q24 6 30 10 Q34 4 40 10 Q44 16 38 22
               Q50 30 50 44 Q46 58 32 58 Q18 58 14 46Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M16 22 Q28 18 40 22" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M14 34 Q28 28 50 34" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M18 14 Q24 12 30 14" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M18 28 L22 24 L24 30 L28 26 L30 32 L34 28 L36 34 L40 30"
        fill="none" stroke="${s}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M16 44 L22 40 L24 46 L30 42 L32 48 L38 44 L40 50 L46 46"
        fill="none" stroke="${s}" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M30 58 Q32 62 34 58" fill="none" stroke="${OUTLINE}" stroke-width="2" stroke-linecap="round"/>
      <ellipse cx="20" cy="40" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  turban_shell: (cl) => {
    const { p, s, h } = c(cl)
    // Globular dome with stacked whorls, small apex on top
    return `
      <path d="M10 38 Q8 22 24 14 Q40 8 52 18 Q62 30 58 44 Q52 58 36 60 Q18 60 12 50 Q6 44 10 38Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M14 24 Q22 18 32 18 Q42 18 50 24" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M10 38 Q22 32 32 32 Q44 32 56 38" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <ellipse cx="32" cy="20" rx="8" ry="4" fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}"/>
      <ellipse cx="32" cy="14" rx="4" ry="3" fill="${p}" stroke="${OUTLINE}" stroke-width="2"/>
      <circle cx="32" cy="10" r="2" fill="${OUTLINE}"/>
      <path d="M16 30 Q32 26 48 30" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M12 42 Q32 38 52 42" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M14 50 Q32 46 50 50" fill="none" stroke="${s}" stroke-width="2"/>
      <ellipse cx="22" cy="36" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  // ── RARE ───────────────────────────────────────────────────────────────────

  nautilus: (cl) => {
    const { p, s, h } = c(cl)
    // Round shell with a clear logarithmic spiral and chamber divider lines
    return `
      <circle cx="32" cy="32" r="26" fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}"/>
      <path d="M48 32 Q48 16 32 16 Q16 16 16 32 Q16 44 28 44 Q40 44 40 32 Q40 24 32 24 Q24 24 24 32 Q24 36 30 36"
        fill="none" stroke="${OUTLINE}" stroke-width="2.2"/>
      <line x1="32" y1="6" x2="32" y2="16" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="42" y1="10" x2="38" y2="18" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="50" y1="18" x2="44" y2="22" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="56" y1="28" x2="48" y2="30" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="56" y1="38" x2="48" y2="36" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="50" y1="48" x2="44" y2="42" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="40" y1="56" x2="38" y2="46" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="28" y1="58" x2="30" y2="46" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="16" y1="54" x2="22" y2="44" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="8" y1="44" x2="18" y2="40" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="6" y1="32" x2="16" y2="32" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="8" y1="20" x2="18" y2="24" stroke="${OUTLINE}" stroke-width="2"/>
      <line x1="16" y1="10" x2="22" y2="20" stroke="${OUTLINE}" stroke-width="2"/>
      <ellipse cx="20" cy="20" rx="3" ry="3" fill="${h}" opacity="0.9"/>
    `
  },

  cowrie: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <ellipse cx="32" cy="32" rx="22" ry="26" fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}"/>
      <ellipse cx="22" cy="18" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="34" cy="14" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="44" cy="20" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="18" cy="28" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="30" cy="26" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="42" cy="30" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="22" cy="38" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="36" cy="38" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="46" cy="40" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="26" cy="48" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="38" cy="48" rx="3" ry="2.5" fill="${s}"/>
      <ellipse cx="20" cy="48" rx="2.5" ry="2" fill="${s}"/>
      <ellipse cx="44" cy="50" rx="2.5" ry="2" fill="${s}"/>
      <ellipse cx="18" cy="20" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  cone_shell: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M22 6 Q42 6 50 10 L42 56 Q32 62 22 56 L14 10 Q18 6 22 6Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M20 14 Q24 12 28 14 Q26 18 22 18 Q18 16 20 14Z" fill="${OUTLINE}"/>
      <path d="M30 12 Q34 10 38 12 Q40 16 36 16 Q32 16 30 12Z" fill="${OUTLINE}"/>
      <path d="M40 14 Q44 12 46 16 Q42 18 38 16 Z" fill="${OUTLINE}"/>
      <path d="M16 22 Q22 20 26 22 Q22 26 18 26 Q14 24 16 22Z" fill="${OUTLINE}"/>
      <path d="M28 22 Q34 20 38 24 Q34 28 30 26 Q26 24 28 22Z" fill="${OUTLINE}"/>
      <path d="M40 24 Q46 22 48 26 Q44 28 40 26 Z" fill="${OUTLINE}"/>
      <path d="M16 34 Q22 32 26 34 Q22 38 18 38 Z" fill="${OUTLINE}"/>
      <path d="M30 34 Q36 32 40 36 Q34 40 30 36 Z" fill="${OUTLINE}"/>
      <path d="M42 36 Q46 34 48 38 Q44 40 42 38 Z" fill="${OUTLINE}"/>
      <path d="M18 46 Q24 44 28 46 Q24 50 20 50 Z" fill="${OUTLINE}"/>
      <path d="M32 46 Q38 44 42 48 Q36 52 32 50 Z" fill="${OUTLINE}"/>
      <ellipse cx="22" cy="14" rx="2" ry="3" fill="${h}" opacity="0.8"/>
    `
  },

  volute: (cl) => {
    const { p, s, h } = c(cl)
    // Oval body with pointed spire on top
    return `
      <path d="M14 40 Q10 24 22 18 Q18 10 24 6 Q30 4 32 10 Q34 4 40 6 Q46 10 42 18 Q56 24 52 42 Q46 60 32 60 Q18 60 14 40Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M22 18 Q32 14 42 18" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M14 28 L18 24 L22 28 L26 24 L30 28 L34 24 L38 28 L42 24 L46 28 L50 24"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M13 38 L17 34 L21 38 L25 34 L29 38 L33 34 L37 38 L41 34 L45 38 L49 34 L51 38"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M15 50 L19 46 L23 50 L27 46 L31 50 L35 46 L39 50 L43 46 L47 50"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="20" cy="32" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  auger: (cl) => {
    const { p, s, h } = c(cl)
    // Very tall, narrow tower of stacked whorls (like a screw/drill bit)
    return `
      <path d="M32 4 Q35 4 36 8 Q38 14 38 16 Q40 20 40 22 Q42 26 42 28 Q44 32 44 34 Q46 38 46 42
               Q48 46 46 50 Q44 56 32 58 Q20 56 18 50 Q16 46 18 42 Q20 38 20 34 Q22 32 22 28
               Q24 26 24 22 Q26 20 26 16 Q28 14 28 8 Q29 4 32 4Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M28 8 Q32 6 36 8" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M27 16 Q32 14 37 16" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M25 22 Q32 20 39 22" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M24 28 Q32 26 40 28" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M22 34 Q32 32 42 34" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M20 42 Q32 40 44 42" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <path d="M19 50 Q32 48 45 50" fill="none" stroke="${OUTLINE}" stroke-width="1.8"/>
      <circle cx="32" cy="12" r="1.5" fill="${s}"/>
      <circle cx="32" cy="19" r="1.5" fill="${s}"/>
      <circle cx="32" cy="25" r="1.8" fill="${s}"/>
      <circle cx="32" cy="31" r="2" fill="${s}"/>
      <circle cx="32" cy="38" r="2" fill="${s}"/>
      <circle cx="32" cy="46" r="2" fill="${s}"/>
      <ellipse cx="28" cy="40" rx="2" ry="4" fill="${h}" opacity="0.85"/>
    `
  },

  // ── VERY RARE ──────────────────────────────────────────────────────────────

  lightning_whelk: (cl) => {
    const { p, s, h } = c(cl)
    // Tall whelk with multiple whorls + dramatic lightning bolt stripe
    return `
      <path d="M16 46 Q12 30 18 22 Q14 16 20 10 Q26 6 32 10 Q38 4 44 10 Q48 16 42 22
               Q52 30 50 46 Q46 58 32 58 Q18 58 16 46Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M18 22 Q32 18 44 22" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M16 34 Q32 30 50 34" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M40 12 L30 24 L36 26 L24 42 L32 44 L20 56"
        fill="none" stroke="${OUTLINE}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M22 12 Q26 10 30 12" fill="none" stroke="${s}" stroke-width="1.8"/>
      <path d="M20 26 Q28 24 36 26" fill="none" stroke="${s}" stroke-width="1.8"/>
      <path d="M18 40 Q30 36 46 40" fill="none" stroke="${s}" stroke-width="1.8"/>
      <ellipse cx="42" cy="44" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  junonia: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M32 4 Q42 6 44 18 Q46 28 50 36 Q56 44 54 52 Q48 60 32 60 Q16 60 10 52 Q8 44 14 36 Q18 28 20 18 Q22 6 32 4Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <rect x="20" y="22" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="29" y="20" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="38" y="22" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="16" y="32" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="25" y="32" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="34" y="32" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="42" y="32" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="18" y="42" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="27" y="44" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="36" y="44" width="6" height="6" rx="1" fill="${s}"/>
      <rect x="44" y="42" width="6" height="6" rx="1" fill="${s}"/>
      <ellipse cx="24" cy="14" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  murex: (cl) => {
    const { p, s, h } = c(cl)
    // Spiral body with multiple curved spines branching from each whorl
    return `
      <path d="M16 38 Q12 18 28 10 Q44 6 52 20 Q58 36 50 50 Q42 60 28 58 Q14 54 14 44 Q10 42 16 38Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M22 14 Q14 6 8 8 Q14 12 18 16" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M44 14 Q52 6 58 8 Q52 12 48 16" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M14 26 Q4 22 2 28 Q8 30 14 30" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M50 26 Q60 22 62 28 Q56 30 50 30" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M14 42 Q4 44 4 50 Q10 48 16 46" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M50 42 Q60 44 60 50 Q54 48 48 46" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M22 54 Q16 60 22 62 Q26 58 28 54" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M42 54 Q48 60 42 62 Q38 58 36 54" fill="${p}" stroke="${OUTLINE}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M16 24 Q32 20 48 24" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M14 38 Q32 34 50 38" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <circle cx="32" cy="38" r="5" fill="${s}" stroke="${OUTLINE}" stroke-width="2"/>
      <circle cx="32" cy="38" r="2" fill="${OUTLINE}"/>
      <ellipse cx="22" cy="22" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  tritons_trumpet: (cl) => {
    const { p, s, h } = c(cl)
    // Large spiral trumpet with pointed spire on top
    return `
      <path d="M14 42 Q10 24 22 16 Q18 8 26 4 Q34 4 36 12 Q42 6 48 12 Q52 18 46 24
               Q58 34 54 48 Q46 60 30 60 Q14 58 14 42Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M24 14 Q32 12 38 14" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M22 24 Q34 20 46 24" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <path d="M14 38 L18 34 L22 38 L26 34 L30 38 L34 34 L38 38 L42 34 L46 38 L50 34"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <path d="M14 50 L18 46 L22 50 L26 46 L30 50 L34 46 L38 50 L42 46 L46 50 L50 46"
        fill="none" stroke="${s}" stroke-width="2.5" stroke-linejoin="round"/>
      <ellipse cx="22" cy="34" rx="3" ry="3" fill="${h}" opacity="0.85"/>
    `
  },

  helmet_shell: (cl) => {
    const { p, s, h } = c(cl)
    // Heavy rounded body with very wide flared lip at the bottom
    return `
      <path d="M32 6 Q14 8 10 22 Q6 32 12 38 Q4 42 4 50 Q8 60 22 60 Q32 62 42 60 Q56 60 60 50 Q60 42 52 38 Q58 32 54 22 Q50 8 32 6Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M12 38 Q32 34 52 38" fill="none" stroke="${OUTLINE}" stroke-width="2.5"/>
      <ellipse cx="32" cy="14" rx="6" ry="3" fill="${s}" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M12 22 Q32 18 52 22" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M14 30 Q32 26 50 30" fill="none" stroke="${s}" stroke-width="2"/>
      <ellipse cx="14" cy="48" rx="3" ry="2" fill="${s}"/>
      <ellipse cx="24" cy="52" rx="3" ry="2" fill="${s}"/>
      <ellipse cx="34" cy="54" rx="3" ry="2" fill="${s}"/>
      <ellipse cx="44" cy="52" rx="3" ry="2" fill="${s}"/>
      <ellipse cx="52" cy="48" rx="3" ry="2" fill="${s}"/>
      <ellipse cx="22" cy="22" rx="3" ry="2" fill="${h}" opacity="0.9"/>
    `
  },

  // ── LEGENDARY ──────────────────────────────────────────────────────────────

  giant_clam: (cl) => {
    const { p, s, h } = c(cl)
    // Two valves with dramatic wavy edges, blue mantle visible between
    return `
      <path d="M4 32 Q4 18 14 12 Q24 6 32 8 Q40 6 50 12 Q60 18 60 32
               Q58 34 56 30 Q54 36 50 30 Q48 36 44 30 Q42 36 38 30 Q36 36 32 30 Q30 36 26 30 Q24 36 20 30 Q18 36 14 30 Q10 36 8 30 Q6 34 4 32Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M4 32 Q6 30 8 34 Q10 28 14 34 Q18 28 20 34 Q24 28 26 34 Q30 28 32 34 Q36 28 38 34 Q42 28 44 34 Q48 28 50 34 Q54 28 56 34 Q58 30 60 32
               Q60 46 50 52 Q40 58 32 56 Q24 58 14 52 Q4 46 4 32Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <ellipse cx="32" cy="32" rx="22" ry="4" fill="${s}"/>
      <circle cx="20" cy="32" r="1.8" fill="${OUTLINE}"/>
      <circle cx="32" cy="32" r="1.8" fill="${OUTLINE}"/>
      <circle cx="44" cy="32" r="1.8" fill="${OUTLINE}"/>
      <path d="M12 22 Q32 16 52 22" fill="none" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M10 44 Q32 50 54 44" fill="none" stroke="${OUTLINE}" stroke-width="1.5"/>
      <ellipse cx="22" cy="20" rx="4" ry="3" fill="${h}" opacity="0.9"/>
    `
  },

  venus_comb_murex: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M28 6 Q24 8 24 14 L20 56 Q24 60 32 60 Q40 60 44 56 L40 14 Q40 8 36 6 Q32 4 28 6Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <line x1="22" y1="16" x2="6" y2="14" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="22" x2="4" y2="22" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="30" x2="2" y2="32" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="38" x2="2" y2="42" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="46" x2="4" y2="52" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="22" y1="54" x2="8" y2="60" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="16" x2="58" y2="14" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="22" x2="60" y2="22" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="30" x2="62" y2="32" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="38" x2="62" y2="42" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="46" x2="60" y2="52" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="42" y1="54" x2="56" y2="60" stroke="${OUTLINE}" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M28 16 Q32 14 36 16" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M28 30 Q32 28 36 30" fill="none" stroke="${s}" stroke-width="2"/>
      <path d="M28 44 Q32 42 36 44" fill="none" stroke="${s}" stroke-width="2"/>
    `
  },

  glory_of_the_sea: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <path d="M22 6 Q42 6 50 10 L42 56 Q32 62 22 56 L14 10 Q18 6 22 6Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <path d="M18 14 L22 12 L26 16 L22 18 Z" fill="${s}"/>
      <path d="M28 12 L32 10 L36 14 L32 16 Z" fill="${s}"/>
      <path d="M38 12 L42 14 L46 14 L42 18 Z" fill="${s}"/>
      <path d="M16 22 L20 20 L24 22 L20 26 Z" fill="${s}"/>
      <path d="M26 22 L30 20 L34 24 L30 26 Z" fill="${s}"/>
      <path d="M36 22 L40 20 L44 24 L40 26 Z" fill="${s}"/>
      <path d="M46 22 L48 24 L46 28 L44 24 Z" fill="${s}"/>
      <path d="M14 30 L18 28 L22 32 L18 34 Z" fill="${s}"/>
      <path d="M24 32 L28 30 L32 34 L28 36 Z" fill="${s}"/>
      <path d="M34 32 L38 30 L42 34 L38 36 Z" fill="${s}"/>
      <path d="M44 30 L48 32 L46 36 L44 34 Z" fill="${s}"/>
      <path d="M16 40 L20 38 L24 42 L20 44 Z" fill="${s}"/>
      <path d="M26 42 L30 40 L34 44 L30 46 Z" fill="${s}"/>
      <path d="M36 42 L40 40 L44 44 L40 46 Z" fill="${s}"/>
      <path d="M18 50 L22 48 L26 52 L22 54 Z" fill="${s}"/>
      <path d="M28 50 L32 48 L36 52 L32 54 Z" fill="${s}"/>
      <path d="M38 50 L42 48 L40 54 L36 52 Z" fill="${s}"/>
      <ellipse cx="22" cy="14" rx="2" ry="3" fill="${h}" opacity="0.8"/>
    `
  },

  golden_cowrie: (cl) => {
    const { p, s, h } = c(cl)
    return `
      <ellipse cx="32" cy="32" rx="22" ry="26" fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}"/>
      <path d="M14 50 Q32 56 50 50 Q48 54 32 56 Q16 54 14 50Z" fill="${s}"/>
      <path d="M16 50 L18 56" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M22 52 L23 58" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M28 53 L29 58" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M35 53 L36 58" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M41 52 L42 58" stroke="${OUTLINE}" stroke-width="1.5"/>
      <path d="M48 50 L46 56" stroke="${OUTLINE}" stroke-width="1.5"/>
      <ellipse cx="22" cy="20" rx="6" ry="4" fill="${h}" opacity="0.8"/>
      <ellipse cx="20" cy="18" rx="2.5" ry="1.5" fill="${h}"/>
      <circle cx="46" cy="14" r="2" fill="${h}" opacity="0.8"/>
      <circle cx="50" cy="22" r="1.5" fill="${h}" opacity="0.8"/>
    `
  },

  paper_nautilus: (cl) => {
    const { p, s, h } = c(cl)
    // Boat-shaped delicate ribbed shell — like a leaf or canoe with a coil at one end
    return `
      <path d="M6 32 Q8 18 32 12 Q56 18 58 32 Q56 46 32 50 Q8 46 6 32Z"
        fill="${p}" stroke="${OUTLINE}" stroke-width="${SW}" stroke-linejoin="round"/>
      <line x1="14" y1="18" x2="16" y2="46" stroke="${s}" stroke-width="2"/>
      <line x1="20" y1="14" x2="20" y2="48" stroke="${s}" stroke-width="2"/>
      <line x1="26" y1="13" x2="26" y2="49" stroke="${s}" stroke-width="2"/>
      <line x1="32" y1="12" x2="32" y2="50" stroke="${s}" stroke-width="2"/>
      <line x1="38" y1="13" x2="38" y2="49" stroke="${s}" stroke-width="2"/>
      <line x1="44" y1="14" x2="44" y2="48" stroke="${s}" stroke-width="2"/>
      <line x1="50" y1="18" x2="48" y2="46" stroke="${s}" stroke-width="2"/>
      <path d="M6 32 Q14 36 24 32 Q32 28 40 32 Q48 36 58 32" fill="none" stroke="${OUTLINE}" stroke-width="2"/>
      <ellipse cx="14" cy="32" rx="6" ry="8" fill="${p}" stroke="${OUTLINE}" stroke-width="2"/>
      <circle cx="14" cy="32" r="3" fill="${s}" stroke="${OUTLINE}" stroke-width="1.5"/>
      <ellipse cx="32" cy="20" rx="4" ry="2" fill="${h}" opacity="0.9"/>
    `
  },
}

export default SHELL_SVGS
