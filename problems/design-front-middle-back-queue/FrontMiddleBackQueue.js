
const FrontMiddleBackQueue = function () {
  this.queue = []
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.queue.unshift(val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  const idx = Math.floor(this.queue.length / 2)
  this.queue.splice(idx, 0, val)
}

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.push(val)
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  return this.queue.shift() || -1
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  const idx = (this.queue.length % 2 === 0)
    ? (this.queue.length / 2) - 1
    : Math.floor(this.queue.length / 2)

  const deleted = this.queue.splice(idx, 1)

  return deleted[0] || -1
}

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  return this.queue.pop() || -1
}

module.exports = FrontMiddleBackQueue
