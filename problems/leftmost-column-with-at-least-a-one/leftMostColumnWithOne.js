/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

const getBinarySearch = (binaryMatrix) => {
  const binarySearch = (row, leftIdx, rightIdx) => {
    if (leftIdx > rightIdx) return -1

    const right = binaryMatrix.get(row, rightIdx)
    if (right === 0) {
      return -1
    }

    const left = binaryMatrix.get(row, leftIdx)
    if (left === 1) {
      return leftIdx
    }

    // at this point, left is 0, and right is 1.
    // find the middle value and
    // do recursive call with new leftIdx and rightIdx.

    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const mid = binaryMatrix.get(row, midIdx)
    if (mid === 0) {
      const foundRight = binarySearch(row, mid + 1, rightIdx - 1)
      return (foundRight !== -1)
        ? foundRight
        : rightIdx
    } else {
      const foundLeft = binarySearch(row, leftIdx + 1, midIdx - 1)
      return (foundLeft !== -1)
        ? foundLeft
        : midIdx
    }
  }

  return binarySearch
}

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
const leftMostColumnWithOne = function (binaryMatrix) {
  const binarySearch = getBinarySearch(binaryMatrix)
  const [n, m] = binaryMatrix.dimensions()
  let foundIdx = m

  for (let i = 0; i < n; i++) {
    const idx = binarySearch(i, 0, foundIdx - 1)

    if (idx !== -1) {
      foundIdx = idx
    }
  }

  return (foundIdx === m)
    ? -1
    : foundIdx
}

module.exports = leftMostColumnWithOne
