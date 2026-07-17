const step = 0.1
const buttonGap = 16

let image: HTMLElement
let buttons: HTMLElement

export function initImageScale(imageEl: HTMLElement, buttonsEl: HTMLElement) {
  image = imageEl
  buttons = buttonsEl
  window.addEventListener('resize', updateButtonPosition)
  updateButtonPosition()
}

export function getScale() {
  const match = image.style.transform.match(/scale\(([\d.]+)\)/)
  return match ? parseFloat(match[1]) : 1
}

export function setScale(nextScale: number) {
  image.style.transform = nextScale === 1 ? '' : `scale(${nextScale})`
  updateButtonPosition()
}

export function getStep() {
  return step
}

function updateButtonPosition() {
  buttons.style.transform = ''
  const naturalTop = buttons.getBoundingClientRect().top
  const desiredTop = image.getBoundingClientRect().bottom + buttonGap

  if (desiredTop > naturalTop) {
    buttons.style.transform = `translateY(${desiredTop - naturalTop}px)`
  }
}
