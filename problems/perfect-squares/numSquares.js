const isSquare = (n) => {
  const sqrt = Math.floor(Math.sqrt(n))
  return ((sqrt * sqrt) === n)
}

/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
  if (isSquare(n)) {
    return 1
  }

  while ((n & 3) === 0) {
    n >>= 2
  }

  if ((n & 7) === 7) {
    return 4
  }

  const sqrt = Math.sqrt(n)
  for (let i = 1; i <= sqrt; i++) {
    if (isSquare(n - (i * i))) {
      return 2
    }
  }

  return 3
}

module.exports = numSquares
