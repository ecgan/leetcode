const flatten = require('lodash/flatten')

const shiftGrid = (grid, k) => {
  const flat = flatten(grid)

  if (k % flat.length === 0) {
    return grid
  }

  const m = grid[0].length
  const minK = k % flat.length

  const removed = flat.splice(flat.length - minK)
  flat.unshift(...removed)

  const result = []
  for (let i = 0; i < flat.length; i++) {
    const el = flat[i]

    if (i % m === 0) {
      result.push([])
    }

    result[result.length - 1].push(el)
  }

  return result
}

module.exports = shiftGrid
