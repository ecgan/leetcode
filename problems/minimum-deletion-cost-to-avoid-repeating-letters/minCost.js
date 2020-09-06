/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
const minCost = function (s, cost) {
  let result = 0
  let max = cost[0]
  let sum = cost[0]

  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      result += sum - max
      sum = cost[i]
      max = cost[i]
    } else {
      sum += cost[i]
      max = Math.max(max, cost[i])
    }
  }

  result += sum - max

  return result
}

module.exports = minCost
