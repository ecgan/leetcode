const Iterator = function (arr) {
  this.iterator = arr
  this.ptr = 0
}

Iterator.prototype.next = function () {
  const result = this.iterator[this.ptr]
  this.ptr++
  return result
}

Iterator.prototype.hasNext = function () {
  return this.ptr <= this.iterator.length - 1
}

module.exports = Iterator
