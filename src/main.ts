import './style.css'
import letterA from './assets/letter-a.png'
import letterB from './assets/letter-b.png'
import letterC from './assets/letter-c.png'
import letterD from './assets/letter-d.png'
import letterE from './assets/letter-e.png'
import letterF from './assets/letter-f.png'
import letterG from './assets/letter-g.png'
import letterH from './assets/letter-h.png'
import letterI from './assets/letter-i.png'
import letterJ from './assets/letter-j.png'
import letterK from './assets/letter-k.png'
import letterL from './assets/letter-l.png'
import letterM from './assets/letter-m.png'
import letterN from './assets/letter-n.png'
import letterO from './assets/letter-o.png'
import letterP from './assets/letter-p.png'
import letterQ from './assets/letter-q.png'
import letterR from './assets/letter-r.png'
import letterS from './assets/letter-s.png'
import letterT from './assets/letter-t.png'
import letterU from './assets/letter-u.png'
import letterV from './assets/letter-v.png'
import letterW from './assets/letter-w.png'
import letterX from './assets/letter-x.png'
import letterY from './assets/letter-y.png'
import letterZ from './assets/letter-z.png'
import { initImageScale } from './imageScale.ts'
import { incrementButton } from './incrementer.ts'
import { decrementButton } from './decrementer.ts'
import { resetButton } from './resetter.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const letterImages: Record<string, string> = {
  A: letterA,
  B: letterB,
  C: letterC,
  D: letterD,
  E: letterE,
  F: letterF,
  G: letterG,
  H: letterH,
  I: letterI,
  J: letterJ,
  K: letterK,
  L: letterL,
  M: letterM,
  N: letterN,
  O: letterO,
  P: letterP,
  Q: letterQ,
  R: letterR,
  S: letterS,
  T: letterT,
  U: letterU,
  V: letterV,
  W: letterW,
  X: letterX,
  Y: letterY,
  Z: letterZ,
}

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
  const visual = `<img src="${letterImages[letter]}" class="letter-art" alt="The letter ${letter}">`

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
