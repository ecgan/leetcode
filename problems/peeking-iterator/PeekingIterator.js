/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = iterator
  this.peeked = undefined
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (this.peeked === undefined) {
    this.peeked = this.iterator.next()
  }

  return this.peeked
}

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  if (this.peeked === undefined) {
    return this.iterator.next()
  }

  const next = this.peeked
  this.peeked = undefined
  return next
}

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return (this.peeked !== undefined) || this.iterator.hasNext()
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

module.exports = PeekingIterator
