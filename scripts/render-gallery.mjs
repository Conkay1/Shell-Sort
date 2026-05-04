// Renders all 25 shells into a composite PNG for design review.
// Run: node scripts/render-gallery.mjs
import sharp from 'sharp'
import { writeFileSync } from 'node:fs'
import { SHELLS, RARITY_LABELS } from '../src/data/shells.js'
import { SHELL_SVGS } from '../src/data/shellSvgs.js'

const RARITY_ORDER = ['common', 'uncommon', 'rare', 'very_rare', 'legendary']
const TILE = 120          // tile cell size including padding
const SHELL_SIZE = 96     // actual shell rendering size
const COLS = 5
const ROW_HEADER = 36     // height of rarity-section header
const PADDING = 20

function buildShellSvg(shell) {
  const inner = SHELL_SVGS[shell.id](shell.colors)
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${SHELL_SIZE}" height="${SHELL_SIZE}">${inner}</svg>`
}

async function renderShellPng(shell) {
  return sharp(Buffer.from(buildShellSvg(shell))).png().toBuffer()
}

// Build composite gallery
async function main() {
  const sectionsByRarity = RARITY_ORDER.map(r => ({
    rarity: r,
    shells: SHELLS.filter(s => s.rarity === r),
  }))

  const totalRows = sectionsByRarity.length
  const width = PADDING * 2 + COLS * TILE
  const height = PADDING * 2 + totalRows * (ROW_HEADER + TILE + 30)  // +30 for label below shell

  // Background: warm cream like reference
  const bgColor = { r: 250, g: 247, b: 242, alpha: 1 }

  // Compose all shells onto background
  const composites = []
  let y = PADDING

  for (const section of sectionsByRarity) {
    // Section header label as SVG
    const headerSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${width - PADDING * 2}" height="${ROW_HEADER}">
        <rect x="0" y="${ROW_HEADER - 4}" width="${width - PADDING * 2}" height="2" fill="#2A2D4A"/>
        <text x="0" y="22" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#2A2D4A">
          ${RARITY_LABELS[section.rarity]}
        </text>
      </svg>
    `
    composites.push({
      input: Buffer.from(headerSvg),
      left: PADDING,
      top: y,
    })
    y += ROW_HEADER

    // Render each shell in this section
    for (let i = 0; i < section.shells.length; i++) {
      const shell = section.shells[i]
      const col = i
      const x = PADDING + col * TILE + (TILE - SHELL_SIZE) / 2
      const shellPng = await renderShellPng(shell)
      composites.push({ input: shellPng, left: Math.round(x), top: y })

      // Label under each shell
      const labelSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="28">
          <text x="${TILE / 2}" y="18" font-family="Arial, sans-serif" font-size="12"
                fill="#2A2D4A" text-anchor="middle">${shell.name}</text>
        </svg>
      `
      composites.push({
        input: Buffer.from(labelSvg),
        left: PADDING + col * TILE,
        top: y + SHELL_SIZE + 2,
      })
    }
    y += SHELL_SIZE + 30
  }

  await sharp({
    create: { width, height, channels: 4, background: bgColor },
  })
    .composite(composites)
    .png()
    .toFile('gallery-preview.png')

  console.log(`Rendered ${SHELLS.length} shells to gallery-preview.png (${width}x${height}px)`)
}

main().catch(err => { console.error(err); process.exit(1) })
