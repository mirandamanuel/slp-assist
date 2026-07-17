import { setScale } from './imageScale.ts'

export function resetButton(button: HTMLButtonElement) {
  button.addEventListener('click', () => setScale(1))
  button.textContent = 'Reset'
}
