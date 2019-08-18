const createDistances = (grid) => {
  const distance = Array.from(grid, (rowEl, rowInd) => {
    return Array.from(rowEl, (colEl, colInd) => {
      return null
    })
  })

  return distance
}

const getNextSquares = (distanceGrid, newSquare, squares) => {
  if (
    distanceGrid[newSquare.row] &&
    distanceGrid[newSquare.row][newSquare.col] === null
  ) {
    squares.push(newSquare)
    distanceGrid[newSquare.row][newSquare.col] = -1
  }

  return squares
}

const calculateDistanceInfo = (distanceGrid, distanceSquares, distanceSumDiffs) => {
  const currentDistance = distanceSquares.length - 1
  const squares = distanceSquares[currentDistance]

  // const hrtimeSquares = process.hrtime()
  for (const square of squares) {
    distanceGrid[square.row][square.col] = currentDistance
  }
  // const hrtimeSquaresDiff = process.hrtime(hrtimeSquares)
  // console.log('hrtimeSquaresDiff: ', hrtimeSquaresDiff[1] / 1000000)

  // const hrtimeNextSquares = process.hrtime()
  let nextSquares = []
  for (const square of squares) {
    nextSquares = getNextSquares(distanceGrid, { row: square.row - 1, col: square.col, sum: square.row - 1 + square.col, diff: square.row - 1 - square.col }, nextSquares)
    nextSquares = getNextSquares(distanceGrid, { row: square.row, col: square.col - 1, sum: square.row + (square.col - 1), diff: square.row - (square.col - 1) }, nextSquares)
    nextSquares = getNextSquares(distanceGrid, { row: square.row, col: square.col + 1, sum: square.row + (square.col + 1), diff: square.row - (square.col + 1) }, nextSquares)
    nextSquares = getNextSquares(distanceGrid, { row: square.row + 1, col: square.col, sum: square.row + 1 + square.col, diff: square.row + 1 - square.col }, nextSquares)
  }

  // const hrtimeNextSquaresDiff = process.hrtime(hrtimeNextSquares)
  // console.log('hrtimeNextSquaresDiff: ', hrtimeNextSquaresDiff[1] / 1000000)

  if (nextSquares.length === 0) {
    return {
      distanceGrid: distanceGrid,
      distanceSquares: distanceSquares,
      distanceSumDiffs: distanceSumDiffs
    }
  }

  distanceSquares.push(nextSquares)

  const sumDiffs = nextSquares.reduce(
    (acc, cur) => {
      acc.minSum = Math.min(acc.minSum, cur.sum)
      acc.maxSum = Math.max(acc.maxSum, cur.sum)
      acc.minDiff = Math.min(acc.minDiff, cur.diff)
      acc.maxDiff = Math.max(acc.maxDiff, cur.diff)

      return acc
    },
    {
      minSum: Number.MAX_SAFE_INTEGER,
      maxSum: Number.MIN_SAFE_INTEGER,
      minDiff: Number.MAX_SAFE_INTEGER,
      maxDiff: Number.MIN_SAFE_INTEGER
    }
  )

  distanceSumDiffs.push(sumDiffs)

  return calculateDistanceInfo(distanceGrid, distanceSquares, distanceSumDiffs)
}

const getDistanceInfo = (grid, offices) => {
  const emptyDistanceGrid = createDistances(grid)

  const distanceOffices = []
  distanceOffices.push(offices)

  const distanceSumDiffs = []
  const sumDiffs = distanceOffices[0].reduce(
    (acc, cur) => {
      acc.minSum = Math.min(acc.minSum, cur.sum)
      acc.maxSum = Math.max(acc.maxSum, cur.sum)
      acc.minDiff = Math.min(acc.minDiff, cur.diff)
      acc.maxDiff = Math.max(acc.maxDiff, cur.diff)

      return acc
    },
    {
      minSum: Number.MAX_SAFE_INTEGER,
      maxSum: Number.MIN_SAFE_INTEGER,
      minDiff: Number.MAX_SAFE_INTEGER,
      maxDiff: Number.MIN_SAFE_INTEGER
    }
  )

  distanceSumDiffs.push(sumDiffs)

  return calculateDistanceInfo(emptyDistanceGrid, distanceOffices, distanceSumDiffs)
}

/// /////

const maxDistance = (input) => {
  const offices = []
  let hasLand = false
  let hasWater = false

  for (let i = 0; i < input.length; i++) {
    const eli = input[i]

    for (let j = 0; j < eli.length; j++) {
      const elj = eli[j]

      if (elj === 1) {
        hasLand = true

        offices.push({
          row: i,
          col: j
        })
      }

      if (elj === 0) {
        hasWater = true
      }
    }
  }

  if (!(hasLand && hasWater)) {
    return -1
  }

  const distanceInfo = getDistanceInfo(input, offices)

  return distanceInfo.distanceSquares.length - 1
}

module.exports = maxDistance
