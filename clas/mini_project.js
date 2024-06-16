// 1.
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('http://dummyjson.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok')
          }
          return response.json()
        })
        .then(data => {
          resolve(data)
        })
        .catch(error => {
          reject(error)
        })
    }, 2000)
  })
}

fetchData()
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error('Error fetching data:', error)
  })

// // 2
const createCounter = () => {
  let count = 0
  return {
    increment: () => {
      count += 1
    },
    getCount: () => {
      return count
    }
  }
}
const coun = createCounte()
coun.increment()
console.log(coun.getCount())

// 3
const processData = (array, callback) => {
  return array.map(callback)
}

const square = num => num * num

const triple = num => num * 3

const numbers = [5, 10, 20, 40, 30]

const squaredNumbers = processData(numbers, square)
console.log(squaredNumbers)
const doubledNumbers = processData(numbers, double)
console.log(doubledNumbers)

// 4
const fetchData = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 2000))
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=2933cae520e958c54e974ed5617846c0`
    )

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    throw error
  }
}

const getData = async () => {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
getData()

// 5
let arr = [2, 4, 8, 24]
console.log(
  arr.map(arr => {
    return arr * 2
  })
)
// 6
console.log(
  arr.filter(arr => {
    return arr < 10
  })
)
// 7
console.log(arr.find(arr => arr > 15))

// 8
const sum = arr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 0)

console.log(sum)

// 9
function transformArrayToMap (users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user
    return acc
  }, {})
}

// 10
class Person {
  constructor (name, age) {
    this.name = name
    this.age = age
  }

  describe () {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor (name, age, grade) {
    super(name, age)
    this.grade = grade
  }

  study () {
    return `${this.name} is studying.`
  }
}

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        reject('Failed to fetch data')
      } else {
        resolve('Data fetched successfully')
      }
    }, 2000)
  })
}

fetchData()
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error))

const fetchData = async () => {
  try {
    const response = await new Promise(resolve => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve({ success: false, message: 'Failed to fetch data' })
        } else {
          resolve({ success: true, data: 'Data fetched successfully' })
        }
      }, 2000)
    })

    if (!response.success) {
      throw new Error(response.message)
    }

    return response.data
  } catch (error) {
    throw error
  }
}
;(async () => {
  try {
    const data = await fetchData()
    console.log(data)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})()

function getUniqueHobbies (users) {
  return users.reduce((uniqueHobbies, user) => {
    user.hobbies.forEach(hobby => {
      if (!uniqueHobbies.includes(hobby)) {
        uniqueHobbies.push(hobby)
      }
    })
    return uniqueHobbies
  }, [])
}
