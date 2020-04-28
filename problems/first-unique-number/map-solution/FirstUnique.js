/**
 * @param {number[]} nums
 */
const FirstUnique = function (nums) {
  this.map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    this.add(num)
  }
}

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
  for (const [key, value] of this.map.entries()) {
    if (value === 1) {
      return key
    }
  }

  return -1
}

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
  if (this.map.has(value)) {
    this.map.set(value, this.map.get(value) + 1)
  } else {
    this.map.set(value, 1)
  }
}

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */

module.exports = FirstUnique
