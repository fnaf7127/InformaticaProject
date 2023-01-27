window.onload = function () {

    const screen = document.querySelector('.text')

    let buffer = '0'

    function buttonClick(value) {
        if (isNaN(value)) {
            handleOperator(value)
        } else {
            handleNumber(value)
        }
        console.log(buffer)
        screen.innerHTML = buffer
    }

    function handleOperator(symbol) {
        switch (symbol) {
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
        let element = document.querySelectorAll('.calc-button')

        for (i of element) {
            i.addEventListener('click', function () {
                buttonClick(this.innerHTML);
            })
        }

    }

    initialize();
}