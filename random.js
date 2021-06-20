const guessBtn = document.getElementById('guess')
const inputElement = document.getElementById('input')
const replayBtn = document.getElementById('replay')
const answerDiv = document.getElementById('guessanswer')
const generateBtn = document.getElementById('generateBtn')
const genNumber = document.getElementById('genNumber')
const generateContainer = document.getElementById('generateContainer')
const guessContainer = document.getElementById('guessContainer')


function checkIfRandomNumberExist() {
    const randomNumber = localStorage.getItem('randomNumber')

    if (randomNumber) {
        generateContainer.style.display = "none"
    } else {
        guessContainer.style.display = "none"
    };
}

checkIfRandomNumberExist()


function getRndInteger(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum.toString();
}


function toMatchNum(value, randomNumber) {
    const valArr = value.split('')//'123456' => ['1','2'....]
    const randonArr = randomNumber.split('')

    let matched = 0;
    if (value == "") {
        alert("Enter a number")
        return;
    }
    for (let i = 0; i < randomNumber.length; i++) {
        if (valArr[i] == randomNumber[i]) {
            matched++
        } else {
            break;
        }
    }

    return matched
}

guessBtn.addEventListener('click', (event) => {
    const randomNumber = localStorage.getItem('randomNumber')
    const guessNumbers = toMatchNum(inputElement.value, randomNumber)
    answerDiv.innerHTML = `Guess Numbers: ${guessNumbers}`

})

generateBtn.addEventListener('click', () => {
    const randomNumber = getRndInteger(100000, 999999)
    localStorage.setItem('randomNumber', randomNumber);
    genNumber.innerText = `Number Generated is ${randomNumber}, Refresing in 5 sec`

    setTimeout(() => {
        window.location.reload()
    }, 5000);
})


replayBtn.addEventListener('click', () => {
    localStorage.removeItem('randomNumber')
    window.location.reload()
})
