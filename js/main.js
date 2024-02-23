const display = document.querySelector(".display")
const buttons = document.querySelectorAll(".button__calculadora")
const specialChars = []

const calculate = (buttonValue) => {
    console.log(buttonValue)
}

buttons.forEach((button) => {
    button.addEventListener('click', e => calculate(e.target.dataset.value))
})

