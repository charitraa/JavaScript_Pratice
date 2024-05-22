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

let day = 2
switch (day) {
  case 1:
    console.log('Sunday')
    break
  case 2:
    console.log('Monday')
    break
  case 3:
    console.log('Tuesday')
    break
  case 4:
    console.log('Wednesday')
    break
  case 5:
    console.log('Thursday')
    break
  case 6:
    console.log('Friday')
    break
  case 7:
    console.log('Saturday')
    break
  default:
    console.log('Invalid day')
    break
}

bmi = 20
switch (true) {
  case bmi < 18.5:
    console.log('Underweight')
    break
  case bmi > 18.5 && bmi < 24:
    console.log('Normal')
    break
  case bmi > 25 && bmi < 29.9:
    console.log('Overweight')
    break
  case bmi > 30:
    console.log('Obese')
    break
}
