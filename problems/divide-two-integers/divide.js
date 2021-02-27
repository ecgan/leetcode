/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const divide = (dividend, divisor) => {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647
  }

  let a = Math.abs(dividend)
  const b = Math.abs(divisor)

  let count = 1
  let result = 0
  let base = b

  while (a >= b) {
    count = 1
    base = b

    while (base <= (a >> 1)) {
      base = base << 1
      count = count << 1
    }

    result += count
    a -= base
  }

  return ((dividend >= 0) === (divisor >= 0))
    ? result
    : -result
}

module.exports = divide
