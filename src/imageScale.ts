const step = 0.1

let image: HTMLElement

export function initImageScale(imageEl: HTMLElement) {
  image = imageEl
}

export function getScale() {
  const match = image.style.transform.match(/scale\(([\d.]+)\)/)
  return match ? parseFloat(match[1]) : 1
}

export function setScale(nextScale: number) {
  image.style.transform = nextScale === 1 ? '' : `scale(${nextScale})`
}

export function getStep() {
  return step
}
