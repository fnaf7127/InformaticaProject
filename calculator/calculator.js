const screen = document.querySelector('screen')

let buffer = '0'

function buttonClick(value) {
    if (isNaN(value)) {
        handleOperator(value)
    } else {
        handleNumber(value)
    }
    screen.innerText = buffer
}

function handleOperator(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0'
            break;
        case '←':
            buffer = substring(0, buffer.length - 1)
            break;
        case '+':
        case '÷':
        case '×':
        case '−':
            buffer += symbol
            break;
        case '=':
            buffer = eval(buffer)
    }
}

function handleNumber(number) {
    if (buffer === '0') {
        buffer = number
    } else {
        buffer += number
    }
}

function initialize() {
    document.querySelector('calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText)
    })
}

initialize()