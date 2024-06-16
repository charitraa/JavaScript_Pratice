function greet (name) {
  return console.log(`Hello ${name}`)
}

const message = greet('hello')
console.log(message)

function sum (a, b) {
  return a + b
}
const sumResult = sum(2, 3)
console.log(sumResult)

function sum (a, b) {
  return a - b
}
const subResult = sum(2, 3)
console.log(subResult)

let hello = () => {
  console.log('Hi my name is ravi. i am 6 years old')
}
hello()

const person = {
  name: 'ravi',
  age: 20,
  hobbies: ['readings', 'writing']
}

const persons = [1, 2, 3, 4]
number.push(5)

const rectangle = {
  width: 10,
  height: 5,
  getArea: function () {
    return this.width * this.height
  }
}
console.log(rectangle.getArea())
