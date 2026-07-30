import './style.css'
import letterR from './assets/letter-r.png'
import { initImageScale } from './imageScale.ts'
import { incrementButton } from './incrementer.ts'
import { decrementButton } from './decrementer.ts'
import { resetButton } from './resetter.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function renderHome() {
  app.innerHTML = `
    <main class="home">
      <p class="eyebrow">SLP Assist</p>
      <h1>Choose a letter</h1>
      <p class="intro">Pick a letter to begin practicing.</p>
      <nav class="letter-grid" aria-label="Choose a letter">
        ${letters.map((letter) => `<a class="letter-choice" href="?letter=${letter}" aria-label="Practice letter ${letter}">${letter}</a>`).join('')}
      </nav>
    </main>
  `
}

function renderLetter(letter: string) {
  const visual = letter === 'R'
    ? `<img src="${letterR}" class="letter-art" width="170" height="179" alt="The letter R">`
    : `<span class="letter-character" aria-label="The letter ${letter}">${letter}</span>`

  app.innerHTML = `
    <main id="center">
      <a class="back-link" href="./">Choose another letter</a>
      <div class="image-area">
        <div id="image" class="letter" data-letter="${letter}">${visual}</div>
      </div>
      <div class="letter-label" aria-live="polite">Letter ${letter}</div>
      <div class="buttons">
        <button id="decrementer" type="button" class="decrementer" aria-label="Make letter smaller"></button>
        <button id="resetter" type="button" class="resetter" aria-label="Reset letter size"></button>
        <button id="incrementer" type="button" class="incrementer" aria-label="Make letter larger"></button>
      </div>
    </main>
  `

  const image = document.querySelector<HTMLElement>('#image')!
  initImageScale(image)
  decrementButton(document.querySelector<HTMLButtonElement>('#decrementer')!)
  resetButton(document.querySelector<HTMLButtonElement>('#resetter')!)
  incrementButton(document.querySelector<HTMLButtonElement>('#incrementer')!)
}

function render() {
  const selectedLetter = new URLSearchParams(window.location.search).get('letter')?.toUpperCase()
  document.title = selectedLetter && letters.includes(selectedLetter) ? `Letter ${selectedLetter} | SLP Assist` : 'SLP Assist'

  if (selectedLetter && letters.includes(selectedLetter)) {
    renderLetter(selectedLetter)
  } else {
    renderHome()
  }
}

window.addEventListener('popstate', render)
render()
