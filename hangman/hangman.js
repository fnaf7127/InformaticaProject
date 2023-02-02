window.onload = function () {

    let screen = document.querySelector('.screen-text')
    const possibleWords = ['school', 'jazz', 'score', 'ijstijd', 'carnaval', 'dextrose', 'picknick', 'kwarktaart', 'tornado', 'zevenenzestig', 'eucalyptus', 'magma', 'linnen', 'regenwoud', 'levertje', 'skelet', 'watermeloen']
    let guessedLetters = []
    let info = document.querySelector('.instructions')
    let health = 10
    let healthscreen = document.querySelector('.health')
    let drawing = document.querySelector('.drawing')
    let context = drawing.getContext("2d");

    function getRandomInt() {
        let max = possibleWords.length;
        let calc = Math.floor(Math.random() * max)
        if (calc >= possibleWords.length) {
            calc -= calc;
        }
        return calc
    }

    function disableButtons() {
        document.querySelectorAll('.button').forEach(function(button) {
            button.disabled = true;
            button.style.background = 'transparent';
            button.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0)';
        })
    }

    String.prototype.replaceAt = function(index, replacement) {
        return this.substring(0, index) + replacement + this.substring(index + 1)
    }

    function draw(fromX, fromY, toX, toY) {
        context.moveTo(fromX, fromY)
        context.lineTo(toX, toY)
        context.stroke()
    }

    function head() {
        context.beginPath();
        context.arc(150, 40, 10, 0, 2 * Math.PI);
        context.stroke();
    }

    function frame1() {
        draw(60, 140, 240, 140)
    }

    function frame2() {
        draw(60, 140, 60, 20)
        draw(60, 110, 90, 140)
    }

    function frame3() {
        draw(60, 20, 150, 20)
    }

    function frame4() {
        draw(150, 20, 150, 30)
    }

    function torso() {
        draw(150, 50, 150, 100)
    }

    function arm1() {
        draw(150, 60, 130, 80)
    }

    function arm2() {
        draw(150, 60, 170, 80)
    }

    function leg1() {
        draw(150, 100, 135, 125)
    }

    function leg2() {
        draw(150, 100, 165, 125)
    }

    function hangman() {
        switch (health) {
            case 9:
                frame1()
                break;
            case 8:
                frame2()
                break;
            case 7:
                frame3()
                break;
            case 6:
                frame4()
                break;
            case 5:
                head()
                break;
            case 4:
                torso()
                break;
            case 3:
                arm1()
                break;
            case 2:
                arm2()
                break;
            case 1:
                leg1()
                break;
            case 0:
                leg2()
                break;
        }
    }


    let setWord = 'linnen'

    let linelength = ''
    for (let i = 0; i < setWord.length; i++) {
        linelength = linelength + '_'
    }

    screen.textContent = linelength


    function init(input) {

        if (health > 0) {

            let position = setWord.indexOf(input.toLowerCase())


            if (position == -1) {

                health = health - 1

                healthscreen.textContent = `Levens over: ${health}`
                hangman()

                if (health == 0) {
                    info.textContent = 'Je hebt verloren... helaas. Herlaad de pagina om opnieuw te beginnen.'
                    disableButtons()
                }
            } else {

                let positionArray = []

                while (position !== -1) {
                    positionArray.push(position)
                    position = setWord.indexOf(input.toLowerCase(), position + 1)
                }


                for (let i = 0; i < positionArray.length; i++) {
                    linelength = linelength.replaceAt(positionArray[i], input.toLowerCase())
                }

                screen.textContent = linelength

                if (!linelength.includes('_')) {
                    disableButtons()
                    info.textContent = 'Gefeliciteerd! Je hebt gewonnen!'
                }

            }

        }

    }

    document.querySelectorAll('.button').forEach(function(button) {
        button.addEventListener('click', function() {
            init(button.innerText)
            button.disabled = true;
            button.style.background = 'transparent';
            button.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0)';
        })
    })


}