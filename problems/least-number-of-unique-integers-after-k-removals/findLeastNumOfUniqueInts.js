/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const findLeastNumOfUniqueInts = function (arr, k) {
  const numCountMap = new Map()

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i]
    const count = numCountMap.get(num)
    numCountMap.set(num, count ? count + 1 : 1)
  }

  const sorted = [...numCountMap.entries()].sort((a, b) => a[1] - b[1])

  let idx = 0
  while (sorted[idx] && k >= sorted[idx][1]) {
    k -= sorted[idx][1]
    idx++
  }

  return sorted.length - idx
}

module.exports = findLeastNumOfUniqueInts
