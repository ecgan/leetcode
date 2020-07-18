/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  return (
    n > 0 &&
    (n & (n - 1)) === 0
  )
}

module.exports = isPowerOfTwo
