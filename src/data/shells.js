// Pastel palette inspired by reference flat-illustration art:
//   Coral pink, peach, cream, blue, yellow, lavender, teal, gold
// All shells share a dark navy outline (#2A2D4A) — applied in shellSvgs.js.

export const SHELLS = [
  // ── Common ─────────────────────────────────────────────────────────────────
  {
    id: 'clam',
    name: 'Clam',
    rarity: 'common',
    rarityTier: 1,
    colors: { primary: '#F5E2C8', secondary: '#D4A574', highlight: '#FFF5E6', shadow: '#2A2D4A' },
    description: 'Cream bivalve with concentric growth ridges',
  },
  {
    id: 'mussel',
    name: 'Mussel',
    rarity: 'common',
    rarityTier: 1,
    colors: { primary: '#A5C6E0', secondary: '#5C82A8', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Smooth blue elongated shell with curved bands',
  },
  {
    id: 'periwinkle',
    name: 'Periwinkle',
    rarity: 'common',
    rarityTier: 1,
    colors: { primary: '#B8A5D4', secondary: '#7A5FA0', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Compact lavender spiral snail shell',
  },
  {
    id: 'limpet',
    name: 'Limpet',
    rarity: 'common',
    rarityTier: 1,
    colors: { primary: '#F5D8C8', secondary: '#7FA4C7', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Cream cone with bold blue radiating ribs',
  },
  {
    id: 'cockle',
    name: 'Cockle',
    rarity: 'common',
    rarityTier: 1,
    colors: { primary: '#F5E8D5', secondary: '#2A2D4A', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Round ribbed shell with bold scalloped edge',
  },

  // ── Uncommon ───────────────────────────────────────────────────────────────
  {
    id: 'conch',
    name: 'Conch',
    rarity: 'uncommon',
    rarityTier: 2,
    colors: { primary: '#F4A88B', secondary: '#FFF5E6', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Coral spiral with cream zigzag bands',
  },
  {
    id: 'scallop',
    name: 'Scallop',
    rarity: 'uncommon',
    rarityTier: 2,
    colors: { primary: '#F5E8D5', secondary: '#E8A8C5', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Cream fan with pink and navy radiating ribs',
  },
  {
    id: 'oyster',
    name: 'Oyster',
    rarity: 'uncommon',
    rarityTier: 2,
    colors: { primary: '#E8C2C2', secondary: '#A86060', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Dusty pink irregular shell with stippled spots',
  },
  {
    id: 'whelk',
    name: 'Whelk',
    rarity: 'uncommon',
    rarityTier: 2,
    colors: { primary: '#F5D8C0', secondary: '#E88B8B', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Peach spiral with coral wave pattern',
  },
  {
    id: 'turban_shell',
    name: 'Turban Shell',
    rarity: 'uncommon',
    rarityTier: 2,
    colors: { primary: '#9CC5B8', secondary: '#4F7A6E', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Teal globular shell with darker spiral bands',
  },

  // ── Rare ───────────────────────────────────────────────────────────────────
  {
    id: 'nautilus',
    name: 'Nautilus',
    rarity: 'rare',
    rarityTier: 3,
    colors: { primary: '#F4A6A6', secondary: '#FFFFFF', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Coral spiral with chambered swirl and white spots',
  },
  {
    id: 'cowrie',
    name: 'Cowrie',
    rarity: 'rare',
    rarityTier: 3,
    colors: { primary: '#F5E2C8', secondary: '#D87474', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Smooth oval with red oval spots',
  },
  {
    id: 'cone_shell',
    name: 'Cone Shell',
    rarity: 'rare',
    rarityTier: 3,
    colors: { primary: '#F5E8D5', secondary: '#2A2D4A', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Cream cone with dark navy network pattern',
  },
  {
    id: 'volute',
    name: 'Volute',
    rarity: 'rare',
    rarityTier: 3,
    colors: { primary: '#F4B584', secondary: '#FFF5E6', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Orange oval with cream zigzag bands',
  },
  {
    id: 'auger',
    name: 'Auger',
    rarity: 'rare',
    rarityTier: 3,
    colors: { primary: '#A5C6E0', secondary: '#FFFFFF', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Tall blue tower spiral with banded whorls',
  },

  // ── Very Rare ──────────────────────────────────────────────────────────────
  {
    id: 'lightning_whelk',
    name: 'Lightning Whelk',
    rarity: 'very_rare',
    rarityTier: 4,
    colors: { primary: '#F5E8D5', secondary: '#D4A574', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Cream spiral with bold lightning bolt stripe',
  },
  {
    id: 'junonia',
    name: 'Junonia',
    rarity: 'very_rare',
    rarityTier: 4,
    colors: { primary: '#F5E2C8', secondary: '#7A4A2A', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Pear shape with rows of square brown spots',
  },
  {
    id: 'murex',
    name: 'Murex',
    rarity: 'very_rare',
    rarityTier: 4,
    colors: { primary: '#F4A6A6', secondary: '#FFF5E6', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Pink spiky shell with radiating spines',
  },
  {
    id: 'tritons_trumpet',
    name: "Triton's Trumpet",
    rarity: 'very_rare',
    rarityTier: 4,
    colors: { primary: '#F4DC8E', secondary: '#A86060', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Yellow spiral with coral zigzag bands',
  },
  {
    id: 'helmet_shell',
    name: 'Helmet Shell',
    rarity: 'very_rare',
    rarityTier: 4,
    colors: { primary: '#F4C5A6', secondary: '#A86040', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Heavy peach shell with brown spotted lip',
  },

  // ── Legendary ──────────────────────────────────────────────────────────────
  {
    id: 'giant_clam',
    name: 'Giant Clam',
    rarity: 'legendary',
    rarityTier: 5,
    colors: { primary: '#F5E8D5', secondary: '#7FA4C7', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Massive bivalve with wavy edges and blue mantle',
  },
  {
    id: 'venus_comb_murex',
    name: 'Venus Comb Murex',
    rarity: 'legendary',
    rarityTier: 5,
    colors: { primary: '#F4C5C5', secondary: '#A86888', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Pink comb with rows of long parallel spines',
  },
  {
    id: 'glory_of_the_sea',
    name: 'Glory of the Sea',
    rarity: 'legendary',
    rarityTier: 5,
    colors: { primary: '#F5E2C8', secondary: '#7A4A2A', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Cream cone with intricate brown tent network',
  },
  {
    id: 'golden_cowrie',
    name: 'Golden Cowrie',
    rarity: 'legendary',
    rarityTier: 5,
    colors: { primary: '#F4D870', secondary: '#C49830', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Pure gold smooth oval — the rarest cowrie',
  },
  {
    id: 'paper_nautilus',
    name: 'Paper Nautilus',
    rarity: 'legendary',
    rarityTier: 5,
    colors: { primary: '#E8DCFF', secondary: '#9070B8', highlight: '#FFFFFF', shadow: '#2A2D4A' },
    description: 'Delicate lavender boat shell with parallel ribs',
  },
]

export const SHELLS_BY_ID = Object.fromEntries(SHELLS.map(s => [s.id, s]))

export const RARITY_LABELS = {
  common: 'Common',
  uncommon: 'Uncommon',
  rare: 'Rare',
  very_rare: 'Very Rare',
  legendary: 'Legendary',
}

export const RARITY_COLORS = {
  common: '#9E9E9E',
  uncommon: '#4CAF50',
  rare: '#2196F3',
  very_rare: '#9C27B0',
  legendary: '#FF9800',
}
