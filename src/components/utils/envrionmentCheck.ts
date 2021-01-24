import React from "react"
import { useEffect } from "react"

const checkValue = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(max-width: 768px)").matches

export function useIsOnTablet() {
  const [isOnTablet, setIsOnTablet] = React.useState(checkValue)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => setIsOnTablet(checkValue()))
    }
  }, [])

  return isOnTablet
}

export function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
}
