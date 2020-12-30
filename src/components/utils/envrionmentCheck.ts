export function isOnTablet() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 768px)").matches
  )
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}
