const sinkIsland = (grid, i, j) => {
  if (!grid[i] || !grid[i][j] || grid[i][j] === '0') {
    return
  }

  grid[i][j] = '0'

  sinkIsland(grid, i - 1, j)
  sinkIsland(grid, i, j - 1)
  sinkIsland(grid, i, j + 1)
  sinkIsland(grid, i + 1, j)
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  let num = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const cell = grid[i][j]

      if (cell === '1') {
        num++
        sinkIsland(grid, i, j)
      }
    }
  }

  return num
}

module.exports = numIslands
