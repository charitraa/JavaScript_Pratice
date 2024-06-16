function sub (...args) {
  return args.reduce((subtract, num) => subtract - num, 50)
}

console.log(sub(5, 5, 5))
