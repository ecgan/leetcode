/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function (n) {
  const numbers = [1]
  let p2 = 0
  let p3 = 0
  let p5 = 0

  for (let i = 1; i < n; i++) {
    numbers[i] = Math.min(
      numbers[p2] * 2,
      numbers[p3] * 3,
      numbers[p5] * 5
    )

    if (numbers[i] === numbers[p2] * 2) {
      p2++
    }

    if (numbers[i] === numbers[p3] * 3) {
      p3++
    }

    if (numbers[i] === numbers[p5] * 5) {
      p5++
    }
  }

  return numbers[n - 1]
}

module.exports = nthUglyNumber
