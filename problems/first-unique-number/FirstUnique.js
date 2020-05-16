/**
 * @param {number[]} nums
 */
const FirstUnique = function (nums) {
  this.unique = new Set()
  this.duplicate = new Set()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    this.add(num)
  }
}

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  if (this.unique.size === 0) {
    return -1
  }

  return this.unique.values().next().value
}

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (!this.unique.has(value) && !this.duplicate.has(value)) {
    this.unique.add(value)
    return
  }

  this.unique.delete(value)
  this.duplicate.add(value)
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

module.exports = FirstUnique
