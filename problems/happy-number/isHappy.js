/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  const processed = new Set()

  const process = (n) => {
    if (n === 1) {
      return true
    }

    if (processed.has(n)) {
      return false
    }

    const digits = n.toString()
      .split('')
      .map(el => parseInt(el))

    const nextN = digits.reduce((acc, cur) => {
      return acc + Math.pow(cur, 2)
    }, 0)

    processed.add(n)

    return process(nextN)
  }

  return process(n)
}

module.exports = isHappy
