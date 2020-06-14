/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
const floodFill = function (image, sr, sc, newColor) {
  const startColor = image[sr][sc]

  if (startColor === newColor) {
    return image
  }

  const queue = [[sr, sc]]

  while (queue.length > 0) {
    const [row, col] = queue.shift()

    if (image[row][col] === newColor) {
      continue
    }

    image[row][col] = newColor

    if (image[row - 1] && image[row - 1][col] === startColor) {
      queue.push([row - 1, col])
    }

    if (image[row + 1] && image[row + 1][col] === startColor) {
      queue.push([row + 1, col])
    }

    if (image[row][col - 1] === startColor) {
      queue.push([row, col - 1])
    }

    if (image[row][col + 1] === startColor) {
      queue.push([row, col + 1])
    }
  }

  return image
}

module.exports = floodFill
