const sortedIndexBy = require('lodash/sortedIndexBy')

const getNumCountMap = (nums) => {
  const numCountMap = new Map()

  for (const num of nums) {
    const count = (numCountMap.get(num) || 0) + 1
    numCountMap.set(num, count)
  }

  return numCountMap
}

const getSortedNumCountArray = (numCountMap) => {
  const sorted = []

  for (const [num, count] of numCountMap.entries()) {
    const obj = { num, count }
    const idx = sortedIndexBy(sorted, obj, (o) => -o.count)
    sorted.splice(idx, 0, obj)
  }

  return sorted
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const numCountMap = getNumCountMap(nums)
  const sorted = getSortedNumCountArray(numCountMap)

  return sorted.slice(0, k).map(o => o.num)
}

module.exports = topKFrequent
