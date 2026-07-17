import { getScale, getStep, setScale } from './imageScale.ts'

export function incrementButton(button: HTMLButtonElement) {
  button.addEventListener('click', () => setScale(getScale() + getStep()))
  button.textContent = '+'
}
