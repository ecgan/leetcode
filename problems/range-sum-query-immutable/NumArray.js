/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.prefixSum = [0]

  for (let i = 0; i < nums.length; i++) {
    const curSum = this.prefixSum[this.prefixSum.length - 1] + nums[i]
    this.prefixSum.push(curSum)
  }
}

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
  return this.prefixSum[j + 1] - this.prefixSum[i]
}

module.exports = NumArray
