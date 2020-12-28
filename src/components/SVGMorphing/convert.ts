// @ts-ignore
import * as flubber from "flubber"

export function convert(
  source: SVGPathElement,
  targetD: string,
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
      (interpolator = flubber.interpolate(source.getAttribute("d"), targetD))
    )
  }
  const t = timingFunction(Math.min(1, (Date.now() - begin) / duration))
  source.setAttribute("d", interpolator(t))
  if (t < 1) {
    requestAnimationFrame(() =>
      convert(source, targetD, begin, interpolatorMap, duration, timingFunction)
    )
  }
}
