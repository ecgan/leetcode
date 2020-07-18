/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  return parseFloat(Math.pow(x, n).toFixed(5))
}

module.exports = myPow
