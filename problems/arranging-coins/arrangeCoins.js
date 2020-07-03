/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
  return Math.floor((-1 + Math.sqrt(1 + (8 * n))) / 2)
}

module.exports = arrangeCoins
