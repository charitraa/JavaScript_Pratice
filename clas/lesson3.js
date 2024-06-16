// function Person (name, age) {
//   this.name = name
//   this.age = age
// }
// const nam = new Person('hello', 20)

// console.log(nam)

// function sub (a, b, add) {
//   add(a, b)
//   console.log(a - b)
// }

// function add (a, b) {
//   console.log(a + b)
// }
// sub(10, 20, add)

// const promise = new Promise((resolve, reject) => {
//   const sum = 110
//   if (sum == 10) {
//     resolve('Success')
//   } else {
//     reject('Error')
//   }
// })
// promise
//   .then(message => {
//     console.log(message)
//   })
//   .catch(err => {
//     console.log(err)
//   })

const promise = new Promise((resolve, reject) => {
  const sub = 100 - 90

  if (sub < 5) {
    resolve('Success')
    console.log(sub)
  } else {
    reject('Error')
    console.log(sub)
  }
})
promise
  .then(message => {
    console.log(message)
  })
  .catch(err => {
    console.log(err)
  })
