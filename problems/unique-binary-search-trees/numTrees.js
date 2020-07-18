/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
  const counts = new Array(n + 1).fill(0)
  counts[0] = counts[1] = 1

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      counts[i] += counts[j - 1] * counts[i - j]
    }
  }

  return counts[n]
}

module.exports = numTrees
