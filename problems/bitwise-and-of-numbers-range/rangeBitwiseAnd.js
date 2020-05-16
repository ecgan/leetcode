/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function (m, n) {
  let i = 0

  while (m !== n) {
    i++

    m = m >> 1
    n = n >> 1
  }

  return m << i
}

module.exports = rangeBitwiseAnd
