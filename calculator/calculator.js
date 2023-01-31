window.onload = function () {
    const screen = document.querySelector('.screen');
  
    let buffer = "0";
  
    function buttonClick(value) {
        if (isNaN(value)) {
            handleOperator(value);
        } else {
            handleNumber(value);
        }
        screen.textContent = buffer;
    }
  
    function handleOperator(symbol) {
        /*switch (symbol) {
            /*case 'C':
                buffer = "0";
                break;
            case '←':
                buffer = buffer.substring(0, buffer.length - 1);
                break;
            case '+':
            case '/':
            case '*':
            case '-':
                buffer += symbol;
                break;
            case '=':
                try {
                    buffer = eval(buffer).toString();
                } catch (error) {
                    buffer = "Error";
                }
                break;
            default:
                console.log('No sign detected')
                buffer = "Error";
            break;           
        }*/

        if (symbol == 'C') {
            buffer = '0'
        } else if (symbol == '←') {
            buffer = buffer.substring(0, buffer.length - 1)
        } else if (symbol == '+' || symbol == '/' || symbol == '*' || symbol == '-') {
            buffer = `${buffer}${symbol}`
        } else if (symbol == '=') {
            try {
                buffer = eval(buffer).toString();
            } catch (error) {
                buffer = "Error";
            }
        } else {
            buffer = "Error";
        }
    }
  
    function handleNumber(number) {
        if (buffer === '0') {
            buffer = number;
        } else {
            buffer += number;
        }
    }
  
    document.querySelectorAll('.calc-button').forEach(function(button) {
        button.addEventListener('click', function() {
            buttonClick(button.textContent);
            console.log(button.textContent.toString())
        });
    });
};
