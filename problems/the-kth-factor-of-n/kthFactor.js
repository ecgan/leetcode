/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = function (n, k) {
  const sqrt = Math.sqrt(n)
  const factors = []
  let idx = 0

  for (let i = 1; i <= sqrt; i++) {
    if (n % i === 0) {
      const num1 = i
      const num2 = n / i

      if (num1 === num2) {
        factors.splice(idx, 0, num1)
      } else {
        factors.splice(idx, 0, num1, num2)
      }

      idx++
    }
  }

  if (factors.length < k) {
    return -1
  }

  return factors[k - 1]
}

module.exports = kthFactor
