// Creating an empty array
let emptyArray = []

// Creating an array with initial values
let numbers = [1, 2, 3, 4, 5]
let fruits = ['Apple', 'Banana', 'Cherry']

console.log(fruits[0]) // Output: Apple
console.log(fruits[1]) // Output: Banana
console.log(fruits[2]) // Output: Cherry

// Adding to the end
fruits.push('Cherry')
console.log(fruits) // Output: ['Apple', 'Banana', 'Cherry']

// Adding to the beginning
fruits.unshift('Mango')
console.log(fruits) // Output: ['Mango', 'Apple', 'Banana', 'Cherry']

// Adding at a specific index
fruits.splice(2, 0, 'Grapes')
console.log(fruits) // Output: ['Mango', 'Apple', 'Grapes', 'Banana', 'Cherry']

// Adding to the end
fruits.push('Cherry')
console.log(fruits) // Output: ['Apple', 'Banana', 'Cherry']

// Adding to the beginning
fruits.unshift('Mango')
console.log(fruits) // Output: ['Mango', 'Apple', 'Banana', 'Cherry']

// Adding at a specific index
fruits.splice(2, 0, 'Grapes')
console.log(fruits) // Output: ['Mango', 'Apple', 'Grapes', 'Banana', 'Cherry']

// Finding the index of an element
let index = numbers.indexOf(3)
console.log(index) // Output: 2

// Checking if an element exists
let exists = numbers.includes(4)
console.log(exists) // Output: true

// Finding an element with a condition
let evenNumber = numbers.find(num => num % 2 === 0)
console.log(evenNumber) // Output: 2

// Finding the index with a condition
let evenIndex = numbers.findIndex(num => num % 2 === 0)
console.log(evenIndex) // Output: 1

// Using forEach
fruits.forEach(fruit => {
  console.log(fruit)
})
// Output: Apple
//         Banana
//         Cherry

// Using for...of
for (let fruit of fruits) {
  console.log(fruit)
}
// Output: Apple
//         Banana
//         Cherry

// Using map to create a new array
let upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log(upperFruits) // Output: ['APPLE', 'BANANA', 'CHERRY']

// Filtering even numbers
evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4]

// Filtering even numbers
evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4]

numbers = [1, 2, 3, 4, 5]

// Filtering even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4]
