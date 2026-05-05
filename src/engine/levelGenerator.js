// Mulberry32 — fast, good-quality 32-bit seeded PRNG
function mulberry32(seed) {
  let s = seed >>> 0
  return () => {
    s += 0x6D2B79F5
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 0xFFFFFFFF
  }
}

function shuffle(arr, rng) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function generateLevel(levelConfig) {
  const { shellPool, shellTypeCount, shelvesCount, shellsPerShelf, seed } = levelConfig
  const rng = mulberry32(seed)

  // Pick shellTypeCount shells from the pool
  const types = shuffle(shellPool, rng).slice(0, shellTypeCount)

  // Create exactly 3 instances of each type
  const tiles = types.flatMap(shellId =>
    Array.from({ length: 3 }, (_, i) => ({
      id: `${shellId}__${seed}__${i}`,
      shellId,
    }))
  )

  // Shuffle all tiles
  const shuffled = shuffle(tiles, rng)

  // Distribute evenly across shelves (some shelves get one extra tile)
  const total = shuffled.length
  const base = Math.floor(total / shelvesCount)
  const extras = total % shelvesCount

  const shelves = []
  let idx = 0
  for (let col = 0; col < shelvesCount; col++) {
    const count = Math.min(base + (col < extras ? 1 : 0), shellsPerShelf)
    // Shuffle within each shelf so the top (last element) is unpredictable
    shelves.push(shuffle(shuffled.slice(idx, idx + count), rng))
    idx += count
  }

  return shelves
}
