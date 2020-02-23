const getDivisor = (num) => {
  const sqrtfloor = Math.floor(Math.sqrt(num))

  for (let i = sqrtfloor; i >= 1; i--) {
    if (num % i === 0) {
      return [i, num / i]
    }
  }
}

const closestDivisors = (num) => {
  const divisor1 = getDivisor(num + 1)
  const divisor2 = getDivisor(num + 2)

  const diff1 = divisor1[1] - divisor1[0]
  const diff2 = divisor2[1] - divisor2[0]

  return (diff1 < diff2)
    ? divisor1
    : divisor2
}

module.exports = closestDivisors
