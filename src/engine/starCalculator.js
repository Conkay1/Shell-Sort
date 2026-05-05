export function calculateStars(timeRemaining, starThresholds) {
  if (timeRemaining >= starThresholds.three) return 3
  if (timeRemaining >= starThresholds.two) return 2
  return 1
}
