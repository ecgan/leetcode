const sortedLastIndex = require('lodash/sortedLastIndex')

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}

/**
 * @param {number[]} w
 */
const Solution = function (w) {
  this.all = []
  let sum = 0
  for (let i = 0; i < w.length; i++) {
    sum += w[i]
    this.all.push(sum)
  }
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const random = getRandomInt(this.all[this.all.length - 1])
  const index = sortedLastIndex(this.all, random)
  return index
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

module.exports = Solution
