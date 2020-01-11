const matrixBlockSum = (mat, K) => {
  if (K === 0) return mat

  const result = []

  for (let i = 0; i < mat.length; i++) {
    result.push([])

    for (let j = 0; j < mat[i].length; j++) {
      if (i === 0 && j === 0) {
        let value = 0

        for (let r = 0; r <= Math.min(mat.length - 1, i + K); r++) {
          for (let c = 0; c <= Math.min(mat[r].length - 1, j + K); c++) {
            value += mat[r][c]
          }
        }

        result[i][j] = value
      } else if (j === 0) {
        let value = result[i - 1][j]

        for (let c = 0; c <= Math.min(mat[i].length - 1, j + K); c++) {
          if (i + K < mat.length) {
            value += mat[i + K][c]
          }

          if (i - K - 1 >= 0) {
            value -= mat[i - K - 1][c]
          }
        }

        result[i][j] = value
      } else {
        let value = result[i][j - 1]

        for (let r = Math.max(0, i - K); r <= Math.min(mat.length - 1, i + K); r++) {
          if (j + K < mat[r].length) {
            value += mat[r][j + K]
          }

          if (j - K - 1 >= 0) {
            value -= mat[r][j - K - 1]
          }
        }

        result[i][j] = value
      }
    }
  }

  return result
}

module.exports = matrixBlockSum
