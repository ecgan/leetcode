const findFirstLand = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  const [i, j] = findFirstLand(grid)

  let perimeter = 0

  const process = (i, j) => {
    if (!grid[i] || !grid[i][j]) {
      perimeter++
      return
    }

    if (grid[i][j] === -1) {
      return
    }

    grid[i][j] = -1

    process(i - 1, j)
    process(i, j + 1)
    process(i + 1, j)
    process(i, j - 1)
  }

  process(i, j)

  return perimeter
}

module.exports = islandPerimeter
