// Returns [i, i+1, i+2] for the first run of 3 consecutive identical non-null shells, or null.
export function findConsecutiveMatch(holdSlots) {
  for (let i = 0; i <= holdSlots.length - 3; i++) {
    const a = holdSlots[i]
    const b = holdSlots[i + 1]
    const c = holdSlots[i + 2]
    if (a && b && c && a.shellId === b.shellId && b.shellId === c.shellId) {
      return [i, i + 1, i + 2]
    }
  }
  return null
}

// Remove shells at matchIndices, shift remaining non-null shells left, pad right with nulls.
export function removeMatched(holdSlots, matchIndices) {
  const remove = new Set(matchIndices)
  const kept = holdSlots.filter((_, i) => !remove.has(i))
  while (kept.length < holdSlots.length) kept.push(null)
  return kept
}

// Shift all non-null shells to the left, nulls to the right.
export function compactHoldSlots(holdSlots) {
  const filled = holdSlots.filter(Boolean)
  return [...filled, ...Array(holdSlots.length - filled.length).fill(null)]
}
