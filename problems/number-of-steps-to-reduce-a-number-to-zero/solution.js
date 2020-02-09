const numberOfSteps = (num) => {
  let count = 0

  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2
    } else {
      num -= 1
    }
    count++
  }

  return count
}

module.exports = numberOfSteps
