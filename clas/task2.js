let pass = prompt('Enter your password:')
let len = pass.length

if (len > 12) {
  console.log('The given password is strong')
} else if (len >= 8 && len <= 12) {
  console.log('The given password is medium')
} else {
  console.log('The given password is weak')
}

let character = prompt('Enter a character:').toLowerCase()

if ('aeiou'.includes(character)) {
  console.log(`${character} is a vowel.`)
} else {
  console.log(`${character} is a consonant.`)
}

let targetNum = Math.floor(Math.random() * 10) + 1
let userGuess = Number(prompt('Guess a number between 1 and 10:'))

let guessResult =
  userGuess === targetNum
    ? 'Correct!'
    : userGuess < targetNum
    ? 'Guess higher'
    : 'Guess lower'
console.log(guessResult)

let basePrice = parseFloat(prompt('Enter the product price:'))
let taxPercentage = parseFloat(prompt('Enter the tax rate (as a percentage):'))

let calculatedPrice = basePrice + taxPercentage * (taxPercentage / 100)
console.log(`The final price with tax is: ${calculatedPrice.toFixed(2)}`)

let num1 = parseFloat(prompt('Enter the first number:'))
let num2 = parseFloat(prompt('Enter the second number:'))
let operator = prompt('Enter the operator (+, -, *, /):')

let result
switch (operator) {
  case '+':
    result = num1 + num2
    break
  case '-':
    result = num1 - num2
    break
  case '*':
    result = num1 * num2
    break
  case '/':
    result = num1 / num2
    break
  default:
    result = 'Invalid operator'
}
console.log(`The result is: ${result}`)

let ageInput = parseInt(prompt('Enter your age:'))
let genreRecommendation =
  ageInput <= 12 ? 'Animation' : ageInput <= 17 ? 'Action' : 'Drama'
console.log(`Recommended genre: ${genreRecommendation}`)

let dateInput = new Date(prompt('Enter a date (YYYY-MM-DD):'))
let dayType =
  dateInput.getDay() === 6 || dateInput.getDay() === 0 ? 'weekend' : 'weekday'
console.log(`The date falls on a ${dayType}.`)

let inputNum = parseFloat(prompt('Enter a number:'))

if (inputNum > 0) {
  console.log('The number is positive.')
} else if (inputNum === 0) {
  console.log('The number is zero.')
} else {
  console.log('The number is negative.')
}

let checkNumber = parseInt(prompt('Enter a number:'))

let divisibility =
  checkNumber % 3 === 0 && checkNumber % 5 === 0
    ? 'The number is divisible by both 3 and 5.'
    : checkNumber % 3 === 0
    ? 'The number is divisible by 3.'
    : checkNumber % 5 === 0
    ? 'The number is divisible by 5.'
    : 'The number is not divisible by 3 or 5.'
console.log(divisibility)

let numberOne = parseInt(prompt('Enter the first number:'))
let numberTwo = parseInt(prompt('Enter the second number:'))

let sumOfNumbers = numberOne + numberTwo
let sumType = sumOfNumbers % 2 === 0 ? 'The sum is even.' : 'The sum is odd.'
console.log(sumType)
