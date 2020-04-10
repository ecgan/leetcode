/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const min = (this.stack.length === 0)
    ? x
    : Math.min(x, this.getMin())

  this.stack.push({
    value: x,
    min: min
  })
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length === 0) {
    return undefined
  }

  return this.stack[this.stack.length - 1].value
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length === 0) {
    return undefined
  }

  return this.stack[this.stack.length - 1].min
}

module.exports = MinStack
