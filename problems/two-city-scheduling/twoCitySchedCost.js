/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  let result = 0
  const diffs = []
  for (let i = 0; i < costs.length; i++) {
    const [a, b] = costs[i]
    result += a
    diffs.push(b - a)
  }

  diffs.sort((a, b) => a - b)

  for (let i = 0; i < diffs.length / 2; i++) {
    result += diffs[i]
  }

  return result
}

module.exports = twoCitySchedCost
