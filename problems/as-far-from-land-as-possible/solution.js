/**
 * Convert land's adjacent waters into new lands, and return the new lands. This will mutate values in the input array.
 * @param {*} input
 * @param {*} land
 */
const getAdjacentLands = (input, land) => {
  const nextLands = []

  if (land.row - 1 >= 0) {
    if (input[land.row - 1] && input[land.row - 1][land.col] === 0) {
      input[land.row - 1][land.col] = 1
      nextLands.push({ row: land.row - 1, col: land.col })
    }
  }

  if (land.row + 1 < input.length) {
    if (input[land.row + 1] && input[land.row + 1][land.col] === 0) {
      input[land.row + 1][land.col] = 1
      nextLands.push({ row: land.row + 1, col: land.col })
    }
  }

  if (land.col - 1 >= 0) {
    if (input[land.row][land.col - 1] === 0) {
      input[land.row][land.col - 1] = 1
      nextLands.push({ row: land.row, col: land.col - 1 })
    }
  }

  const maxCol = input[land.row].length
  if (land.col + 1 < maxCol) {
    if (input[land.row][land.col + 1] === 0) {
      input[land.row][land.col + 1] = 1
      nextLands.push({ row: land.row, col: land.col + 1 })
    }
  }

  return nextLands
}

/**
 * Perform breadth-first search through the input array, converting 0 to 1 while calculating the distance from the original lands. This will mutate values in the input array.
 * @param {*} input Array.
 * @param {*} lands Current lands. Array of { row, col }.
 * @param {Number} distance Current distance of lands.
 */
const getDistance = (input, lands, distance) => {
  const nextLands = []

  for (const land of lands) {
    const tempNextLands = getAdjacentLands(input, land)
    nextLands.push(...tempNextLands)
  }

  if (nextLands.length === 0) {
    return distance
  }

  const nextDistance = distance + 1

  return getDistance(input, nextLands, nextDistance)
}

/**
 * Iterare through all cells in input[row][col] and returns { lands[{row, col}], hasLand, hasWater }.
 * @param {*} input
 */
const getInitialInfo = (input) => {
  const lands = []
  let hasLand = false
  let hasWater = false

  for (let i = 0; i < input.length; i++) {
    const eli = input[i]

    for (let j = 0; j < eli.length; j++) {
      const elj = eli[j]

      if (elj === 1) {
        hasLand = true

        lands.push({
          row: i,
          col: j
        })
      }

      if (elj === 0) {
        hasWater = true
      }
    }
  }

  return {
    lands,
    hasLand,
    hasWater
  }
}

const maxDistance = (input) => {
  const { lands, hasLand, hasWater } = getInitialInfo(input)

  if (!hasWater) {
    return -1
  }

  if (!hasLand) {
    return -1
  }

  return getDistance(input, lands, 0)
}

module.exports = maxDistance
