/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let r = num

  while (r * r > num) {
    r = Math.floor((r + num / r) / 2)
  }

  return (r * r === num)
}

module.exports = isPerfectSquare
