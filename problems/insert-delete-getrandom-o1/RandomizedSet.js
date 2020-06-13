function getRandomIndex (length) {
  return Math.floor(Math.random() * length)
}

/**
 * Initialize your data structure here.
 */
const RandomizedSet = function () {
  this.values = []
  this.valuesIndexMap = new Map()
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.valuesIndexMap.has(val)) {
    return false
  }

  this.values.push(val)
  this.valuesIndexMap.set(val, this.values.length - 1)
  return true
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.valuesIndexMap.has(val)) {
    return false
  }

  const valIndex = this.valuesIndexMap.get(val)
  const lastVal = this.values.pop()

  if (val !== lastVal) {
    this.values[valIndex] = lastVal
    this.valuesIndexMap.set(lastVal, valIndex)
  }

  this.valuesIndexMap.delete(val)
  return true
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const index = getRandomIndex(this.values.length)
  return this.values[index]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedSet
