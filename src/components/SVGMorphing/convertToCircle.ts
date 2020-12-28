// @ts-ignore
import * as flubber from "flubber"

export function convertToCircle(
  source: SVGPathElement,
  targetX: number,
  targetY: number,
  targetR: number,
  begin: number,
  interpolatorMap: Map<string, (a: string, b: string) => string>,
  duration = 200,
  timingFunction = (t: number) => t
) {
  let interpolator
  if (interpolatorMap.has(source.id)) {
    interpolator = interpolatorMap.get(source.id)
  } else {
    interpolatorMap.set(
      source.id,
      (interpolator = flubber.toCircle(
        source.getAttribute("d"),
        targetX,
        targetY,
        targetR
      ))
    )
  }
  const t = timingFunction(Math.min(1, (Date.now() - begin) / duration))
  source.setAttribute("d", interpolator(t))
  if (t < 1) {
    requestAnimationFrame(() =>
      convertToCircle(
        source,
        targetX,
        targetY,
        targetR,
        begin,
        interpolatorMap,
        duration,
        timingFunction
      )
    )
  }
}
