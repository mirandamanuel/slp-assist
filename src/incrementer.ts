export function incrementButton(
  button: HTMLButtonElement,
  image: HTMLElement,
) {
  const step = 0.1

  const getScale = () => {
    const match = image.style.transform.match(/scale\(([\d.]+)\)/)
    return match ? parseFloat(match[1]) : 1
  }

  const setScale = (nextScale: number) => {
    image.style.transform = `scale(${nextScale})`
    button.innerHTML = '+'
  }

  button.addEventListener('click', () => setScale(getScale() + step))
  button.innerHTML = '+'
}
