const maxBy = require('lodash/maxBy')

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
  const numSubsetMap = new Map()
  numSubsetMap.set(-1, [])
  nums.sort((a, b) => a - b)

  for (const num of nums) {
    let largestSubset = []

    for (const [key, value] of numSubsetMap.entries()) {
      if (num % key === 0 && value.length > largestSubset.length) {
        largestSubset = [...value]
      }
    }

    largestSubset.push(num)
    numSubsetMap.set(num, largestSubset)
  }

  const result = maxBy([...numSubsetMap.values()], (s) => s.length)

  return result
}

module.exports = largestDivisibleSubset
