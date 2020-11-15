/**
 * @param {number} n
 */
const OrderedStream = function (n) {
  this.ptr = 1
  this.values = new Array(n + 1)
}

/**
 * @param {number} id
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (id, value) {
  this.values[id] = value

  if (this.ptr !== id) {
    return []
  }

  const result = []
  while (this.values[this.ptr] !== undefined) {
    result.push(this.values[this.ptr])
    this.ptr++
  }

  return result
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */

module.exports = OrderedStream
