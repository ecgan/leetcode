/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  const length = mat.length
  let sum = 0

  for (let i = 0; i < length; i++) {
    sum += mat[i][i] + mat[i][length - 1 - i]
  }

  if (length % 2 === 1) {
    const middleIndex = (length - 1) / 2
    sum -= mat[middleIndex][middleIndex]
  }

  return sum
}

module.exports = diagonalSum
