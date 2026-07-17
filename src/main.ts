import './style.css'
import letterR from './assets/letter-r.png'
import { initImageScale } from './imageScale.ts'
import { incrementButton } from './incrementer.ts'
import { decrementButton } from './decrementer.ts'
import { resetButton } from './resetter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="stage">
    <div id="image" class="letter">
      <img src="${letterR}" class="base" width="170" height="179">
    </div>
    <div class="buttons">
      <button id="decrementer" type="button" class="decrementer"></button>
      <button id="resetter" type="button" class="resetter"></button>
      <button id="incrementer" type="button" class="incrementer"></button>
    </div>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

const image = document.querySelector<HTMLElement>('#image')!
const buttons = document.querySelector<HTMLElement>('.buttons')!

initImageScale(image, buttons)
decrementButton(document.querySelector<HTMLButtonElement>('#decrementer')!)
resetButton(document.querySelector<HTMLButtonElement>('#resetter')!)
incrementButton(document.querySelector<HTMLButtonElement>('#incrementer')!)
