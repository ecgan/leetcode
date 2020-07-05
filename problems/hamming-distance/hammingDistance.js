/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let num = x ^ y
  let count = 0

  while (num > 0) {
    num = num & (num - 1)
    count++
  }

  return count
}

module.exports = hammingDistance
