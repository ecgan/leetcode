const getNextCells = (row, col) => {
  return [
    [row - 1, col - 1],
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col],
    [row + 1, col + 1]
  ]
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestPathBinaryMatrix = (grid) => {
  const length = grid.length
  if (
    grid[0][0] === 1 ||
    grid[length - 1][length - 1] === 1
  ) {
    return -1
  }

  const queue = [[0, 0, 1]]
  while (queue.length !== 0) {
    const [row, col, len] = queue.shift()

    if (row === length - 1 && col === length - 1) {
      return len
    }

    for (const [r, c] of getNextCells(row, col)) {
      if (
        (r >= 0 && r <= length - 1) &&
        (c >= 0 && c <= length - 1) &&
        grid[r][c] !== 1
      ) {
        queue.push([r, c, len + 1])
        grid[r][c] = 1
      }
    }
  }

  return -1
}

module.exports = shortestPathBinaryMatrix
