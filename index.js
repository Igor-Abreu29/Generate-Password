let characters = ''

const inputRange = document.getElementById("input-range")
const count = document.getElementById('count')

function handleCharacterLenght() {
  count.textContent = inputRange.value
}
 
const smallCheckbox = document.getElementById("small")
const biggerCheckbox = document.getElementById("bigger")
const numbersCheckbox = document.getElementById("numbers")
const symbolsCheckbox = document.getElementById("symbols")
const password = document.getElementById("password")

function handleTransformLettersBigger() {
    const lettersBigger = 'ABCDFGHIJKLMNOPQRSTUVWXYZ'
    if (biggerCheckbox.checked === true) {
      characters += lettersBigger
  } else {
     const replaceBigger = characters.replace(lettersBigger, '')
     characters = replaceBigger
  }
}

function handleTransformLettersSmall() {
    const lettersSmall = 'abcdfghijklmnopqrstuvwxyz'
    if (smallCheckbox.checked === true) {
        characters += lettersSmall
  } else {
        const replaceSmall = characters.replace  (lettersSmall, '')
     characters = replaceSmall
  }
}

function handleWriteNumbers() {
      const numbers = 123456789
      if (numbersCheckbox.checked === true) {
        characters += numbers
  } else {
        const replaceNumbers = characters.replace(numbers, '')
        characters = replaceNumbers
  }
}

function handleWriteSymbols() {
    const symbolsContent = '!@#$%&*_-=+?';
    if (symbolsCheckbox.checked === true) {
        characters += symbolsContent
  } else {  
        const replaceSymbols = characters.replace(symbolsContent, '')
        characters = replaceSymbols
  }
}

function generateString(length) {
    let result = ''

    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    password.style.color = 'white'

    return result
}

let informationPassword = document.querySelector('.information-password')
let easy = document.querySelector('.easy')
let medium = document.querySelector('.medium')
let strong = document.querySelector('.strong')
let superStrong = document.querySelector('.super-strong')

function generateRandomPassword() {
  if (count.textContent === '0') {
      alert("Aumente os valores do input")
      password.textContent = 'I5n9@Y20!';
      easy.style.background = 'transparent';
      medium.style.background = 'transparent';
      strong.style.background = 'transparent'
      superStrong.style.background = 'transparent';
  } else {
    password.textContent = generateString(inputRange.value)

    if (biggerCheckbox.checked != true && smallCheckbox.checked != true && numbersCheckbox.checked != true && symbolsCheckbox.checked != true) {
        password.textContent = 'I5n9@Y20!'
        inputRange.value = 0
        count.textContent = 0
        informationPassword.innerHTML = ''
        easy.style.background = 'transparent';
        medium.style.background = 'transparent';
        strong.style.background = 'transparent'
        superStrong.style.background = 'transparent';
        
    } else {
        if (password.textContent.length >= 16) {
            informationPassword.innerHTML = 'SUPER STRONG'
            easy.style.background = 'green';
            medium.style.background = 'green';
            strong.style.background = 'green'
            superStrong.style.background = 'green';

        } else if (password.textContent.length >= 10) {

            informationPassword.innerHTML = 'STRONG'
            easy.style.background = 'greenyellow';
            medium.style.background = 'greenyellow';
            strong.style.background = 'greenyellow'
            superStrong.style.background = 'transparent';

        } else if (password.textContent.length >= 6) {

            informationPassword.innerHTML = 'MEDIUM'
            easy.style.background = 'orange';
            medium.style.background = 'orange';
            strong.style.background = 'transparent'
            superStrong.style.background = 'transparent';
            
        } else {

            informationPassword.innerHTML = 'WEAKEN'
            easy.style.background = 'red';
            medium.style.background = 'transparent';
            strong.style.background = 'transparent'
            superStrong.style.background = 'transparent';
            
        }
    }
  }
  console.log(characters)
}

function handleRemoveContent() {
  informationPassword.innerHTML = ''
  easy.style.background = 'transparent';
  medium.style.background = 'transparent';
  strong.style.background = 'transparent'
  superStrong.style.background = 'transparent';
  password.textContent = 'I5n9@Y20!'
  password.style.color = '#636262'
  inputRange.value = 0
  count.textContent = 0
}

function handleCopyContent() {
  navigator.clipboard.writeText(password.textContent)
  .then(() => alert("Copiado com sucesso!"))
}