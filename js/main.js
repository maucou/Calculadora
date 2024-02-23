const display = document.querySelector('.display')
const buttons = document.querySelectorAll('.button__calculadora')
const specialChars = ['%', '*', '/', '-', '+', '=']
let output = ''

const calculate = (buttonValue) => {

    if(buttonValue === '=' && output !== '') {
        output = eval(output.replace('%', '/100'))
    } else if (buttonValue === 'ac') {
        output = ''
    } else if (buttonValue === 'del') {
        output = output.toString().slice(0, -1)
    } else {
        if(output === '' && specialChars.includes(buttonValue)) return
        output += buttonValue
    }

    display.value = output
}

buttons.forEach((button) => {
    button.addEventListener('click', e => calculate(e.target.dataset.value))
})

