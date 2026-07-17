export function incrementButton(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `+`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}