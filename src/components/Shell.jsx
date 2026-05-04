import { SHELL_SVGS } from '../data/shellSvgs.js'

// Single component that renders any shell by id.
// Pulls its SVG body from src/data/shellSvgs.js (shared with the render script).
export default function Shell({ shellId, size = 64, colors }) {
  const svgFn = SHELL_SVGS[shellId]
  if (!svgFn) return null
  const inner = svgFn(colors || {})
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      dangerouslySetInnerHTML={{ __html: inner }}
    />
  )
}
