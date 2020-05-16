/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const dp = []
  let maxLength = 0

  for (let i = 0; i < matrix.length; i++) {
    let dpLeftUp = 0

    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        dp[j] = parseInt(matrix[i][j])
      } else {
        const dpUp = dp[j]
        const dpLeft = dp[j - 1] || 0

        dp[j] = (matrix[i][j] === '1')
          ? Math.min(dpLeft, dpUp, dpLeftUp) + 1
          : 0

        dpLeftUp = dpUp
      }

      maxLength = Math.max(maxLength, dp[j])
    }
  }

  return (maxLength * maxLength)
}

module.exports = maximalSquare
