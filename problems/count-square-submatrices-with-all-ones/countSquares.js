/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
  let count = 0

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        const up = (matrix[i - 1] && matrix[i - 1][j]) || 0
        const upleft = (matrix[i - 1] && matrix[i - 1][j - 1]) || 0
        const left = (matrix[i][j - 1]) || 0
        matrix[i][j] += Math.min(up, upleft, left)
        count += matrix[i][j]
      }
    }
  }

  return count
}

module.exports = countSquares
