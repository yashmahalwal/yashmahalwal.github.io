export function checkIfElementOnTop(
  element: HTMLElement | null,
  callback: () => void
) {
  if (!element) return
  const elDistanceToTop =
    window.pageYOffset + element.getBoundingClientRect().top
  if (Math.abs(document.documentElement.scrollTop - elDistanceToTop) > 10)
    requestAnimationFrame(() => checkIfElementOnTop(element, callback))
  else callback()
}
