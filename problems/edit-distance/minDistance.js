/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
const minDistance = function (word1, word2) {
  const m = word1.length
  const n = word2.length
  const dp = [
    [0]
  ]

  for (let i = 1; i <= m; i++) {
    dp.push([i])
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const upleft = dp[i - 1][j - 1]

      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = upleft
      } else {
        const up = dp[i - 1][j]
        const left = dp[i][j - 1]

        dp[i][j] = Math.min(upleft, up, left) + 1
      }
    }
  }

  return dp[m][n]
}

module.exports = minDistance
