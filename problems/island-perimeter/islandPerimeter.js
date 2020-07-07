/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let lands = 0
  let neighbours = 0

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        lands++

        if (grid[i][j + 1] === 1) {
          neighbours++
        }

        if ((grid[i + 1] && grid[i + 1][j]) === 1) {
          neighbours++
        }
      }
    }
  }

  return lands * 4 - neighbours * 2
}

module.exports = islandPerimeter
