import { Modal } from './modal.js'
import { AlertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

inputWeight.oninput = () => {
  AlertError.close()
}
inputHeight.oninput = () => {
  AlertError.close()
}

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

// 3 maneiras de criar e atribuir
// form.onsubmit = function(event) {}
// function handleSubmit(event) {}
form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumvber = notANumber(weight) || notANumber(height)

  if (weightOrHeightIsNotANumvber) {
    AlertError.open()
    return
  }
  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
  form.reset()
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  // modalWrapper.classList.add('open')
  Modal.open()
}
