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

const BinaryMatrix = function (matrix) {
  this.calls = 0

  this.get = function (x, y) {
    this.calls++
    return matrix[x][y]
  }

  this.dimensions = function () {
    const n = matrix.length
    const m = matrix[0].length

    return [n, m]
  }
}

module.exports = BinaryMatrix
