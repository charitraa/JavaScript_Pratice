let marks = 85

if (marks >= 80) {
  console.log('A')
} else if (marks >= 70) {
  console.log('B')
} else if (marks >= 60) {
  console.log('C')
} else if (marks >= 50) {
  console.log('D')
} else if (marks >= 40) {
  console.log('E')
}

let bmi
let height = 1.7
let weight = 70

bmi = weight / (height * height)
if (bmi < 18.5) {
  console.log('Underweight')
} else if (bmi > 18.5 && bmi < 24.9) {
  console.log('Normal')
} else if (bmi > 25 && bmi < 29.9) {
  console.log('Overweight')
} else {
  console.log('Obese')
}
