export const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

export const easeOutQuad = (t: number) => t * (2 - t)

export const easeInOutCubicIndex = (index: number, total: number) =>
  easeInOutCubic((index + 1) / total)
