/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  points.sort((a, b) => {
    return Math.hypot(a[0], a[1]) - Math.hypot(b[0], b[1])
  })

  return points.slice(0, K)
}

module.exports = kClosest
