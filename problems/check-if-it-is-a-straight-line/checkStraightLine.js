const getSlope = (point1, point2) => {
  const [x1, y1] = point1
  const [x2, y2] = point2
  const diffX = x2 - x1
  const diffY = y2 - y1

  return (diffX === 0)
    ? null
    : (diffY / diffX)
}

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  const slope = getSlope(coordinates[0], coordinates[1])

  for (let i = 2; i < coordinates.length; i++) {
    const curSlope = getSlope(coordinates[i - 1], coordinates[i])

    if (curSlope !== slope) {
      return false
    }
  }

  return true
}

module.exports = checkStraightLine
