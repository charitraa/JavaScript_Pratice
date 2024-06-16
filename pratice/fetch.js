function fetchData () {
  return new Promise(resolve => {
    setTimeout(function () {
      resolve('Data fetched')
    }, 2000)
  })
}

async function getData () {
  const data = await fetchData()
  console.log(data)
}

getData()

const numners = [10, 20, 30, 40, 50]

const getNumber = numners.find(n => n > 30)
console.log(getNumber)

const getdata = numners.filter(n => (n = 30))
console.log(getdata)

const getda = numners.filter(n => n * 30)
console.log(getda)

const arr = [1, 2, 3, 4, 5]
const first = arr[0]
const rest = arr.slice(2)
console.log(first)
console.log(rest)



