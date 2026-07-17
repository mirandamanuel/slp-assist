import './style.css'
import letterR from './assets/letter-r.png'
import { incrementButton } from './incrementer.ts'
import { decrementButton } from './decrementer.ts'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="letter">
    <img src="${letterR}" class="base" width="170" height="179">
  </div>
  <div class="buttons">
    <button id="decrementer" type="button" class="decrementer"></button>
    <button id="incrementer" type="button" class="incrementer"></button>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

decrementButton(document.querySelector<HTMLButtonElement>('#decrementer')!)
incrementButton(document.querySelector<HTMLButtonElement>('#incrementer')!)

