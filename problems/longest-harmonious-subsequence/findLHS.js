/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = (nums) => {
  const numCountMap = new Map()
  let max = 0

  for (const num of nums) {
    numCountMap.set(num, (numCountMap.get(num) || 0) + 1)

    const lowCurCount = numCountMap.get(num - 1)
      ? numCountMap.get(num) + numCountMap.get(num - 1)
      : 0

    const hiCurCount = numCountMap.get(num + 1)
      ? numCountMap.get(num) + numCountMap.get(num + 1)
      : 0

    max = Math.max(
      max,
      lowCurCount,
      hiCurCount
    )
  }

  return max
}

module.exports = findLHS
