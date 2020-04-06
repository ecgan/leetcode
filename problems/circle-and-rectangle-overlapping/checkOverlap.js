/* eslint-disable camelcase */
const getLength = (point1, point2) => {
  const [x1, y1] = point1
  const [x2, y2] = point2

  const diffX = x1 - x2
  const diffY = y1 - y2

  return Math.hypot(diffX, diffY)
}

const isOverlapVerticalEdge = (circle, corner1, corner2) => {
  const [x_center, y_center, radius] = circle
  const [x1, y1] = corner1
  const [, y2] = corner2

  if (
    x_center + radius >= x1 &&
    x_center - radius <= x1 &&
    y_center >= y1 &&
    y_center <= y2
  ) {
    return true
  }

  return false
}

const isOverlapHorizontalEdge = (circle, corner1, corner2) => {
  const [x_center, y_center, radius] = circle
  const [x1, y1] = corner1
  const [x2] = corner2

  if (
    y_center + radius >= y1 &&
    y_center - radius <= y1 &&
    x_center >= x1 &&
    x_center <= x2
  ) {
    return true
  }

  return false
}

const isOverlapCorner = (circle, corner) => {
  const [x_center, y_center, radius] = circle

  const pointCircle = [x_center, y_center]
  const length = getLength(pointCircle, corner)

  if (length <= radius) {
    return true
  }

  return false
}

const isCircleInRect = (circle, lowerLeft, upperRight) => {
  const [x_center, y_center] = circle
  const [x1, y1] = lowerLeft
  const [x2, y2] = upperRight

  return (
    x_center >= x1 && x_center <= x2 &&
    y_center >= y1 && y_center <= y2
  )
}

/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
const checkOverlap = function (radius, x_center, y_center, x1, y1, x2, y2) {
  const circle = [x_center, y_center, radius]
  const lowerLeft = [x1, y1]
  const upperLeft = [x1, y2]
  const upperRight = [x2, y2]
  const lowerRight = [x2, y1]

  if (
    isOverlapCorner(circle, lowerLeft) ||
    isOverlapCorner(circle, upperLeft) ||
    isOverlapCorner(circle, upperRight) ||
    isOverlapCorner(circle, lowerRight)
  ) {
    return true
  }

  if (
    isOverlapVerticalEdge(circle, lowerLeft, upperLeft) ||
    isOverlapVerticalEdge(circle, lowerRight, upperRight) ||
    isOverlapHorizontalEdge(circle, lowerLeft, lowerRight) ||
    isOverlapHorizontalEdge(circle, upperLeft, upperRight)
  ) {
    return true
  }

  if (isCircleInRect(circle, lowerLeft, upperRight)) {
    return true
  }

  return false
}

module.exports = checkOverlap
