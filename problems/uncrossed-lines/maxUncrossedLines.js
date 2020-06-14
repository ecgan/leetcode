/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = function (A, B) {
  const dp = []

  for (let i = 0; i < A.length; i++) {
    dp.push([])

    for (let j = 0; j < B.length; j++) {
      if (A[i] === B[j]) {
        const upleft = (dp[i - 1] && dp[i - 1][j - 1]) || 0
        dp[i][j] = 1 + upleft
      } else {
        const up = (dp[i - 1] && dp[i - 1][j]) || 0
        const left = (dp[i][j - 1]) || 0
        dp[i][j] = Math.max(up, left)
      }
    }
  }

  return dp[A.length - 1][B.length - 1]
}

module.exports = maxUncrossedLines
