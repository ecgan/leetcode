/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = []
  const queue = [[0, 0]]

  while (queue.length > 0) {
    const [i, j] = queue.shift()

    if (!dp[i]) {
      dp[i] = []
    }

    if (i === 0 && j === 0) {
      dp[i][j] = grid[i][j]
    } else {
      const up = (dp[i - 1] === undefined)
        ? Number.MAX_SAFE_INTEGER
        : dp[i - 1][j]

      const left = (dp[i][j - 1] === undefined)
        ? Number.MAX_SAFE_INTEGER
        : dp[i][j - 1]

      dp[i][j] = Math.min(up, left) + grid[i][j]
    }

    if (j < n - 1) {
      queue.push([i, j + 1])
    }

    if (j === 0 && i < m - 1) {
      queue.push([i + 1, j])
    }
  }

  return dp[m - 1][n - 1]
}

module.exports = minPathSum
