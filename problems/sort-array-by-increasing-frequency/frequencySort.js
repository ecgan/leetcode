const sortBy = require('lodash/sortBy')

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const frequencySort = function (nums) {
  const numFreqMap = new Map()
  const freqNumMap = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    const freq = (numFreqMap.get(num) || 0) + 1
    numFreqMap.set(num, freq)

    if (freq >= 2) {
      const oldSet = freqNumMap.get(freq - 1)
      oldSet.delete(num)
      freqNumMap.set(freq - 1, oldSet)
    }

    const set = freqNumMap.get(freq) || new Set()
    set.add(num)
    freqNumMap.set(freq, set)
  }

  const result = []

  const keys = sortBy([...freqNumMap.keys()])

  for (const key of keys) {
    const nums = sortBy([...freqNumMap.get(key).values()], (o) => -o)

    for (const num of nums) {
      const arr = new Array(key).fill(num)
      result.push(...arr)
    }
  }

  return result
}

module.exports = frequencySort
