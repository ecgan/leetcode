/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => {
  let row = 0
  let col = matrix[0].length

  while (row <= matrix.length - 1 && col >= 0) {
    const val = matrix[row][col]

    if (val === target) {
      return true
    } else if (val < target) {
      row++
    } else {
      col--
    }
  }

  return false
}

module.exports = searchMatrix
