/**
 * @param {number[]} arr
 * @return {number}
 */
const findLengthOfShortestSubarray = function (arr) {
  const length = arr.length
  let left = 0
  let right = length - 1

  while (left + 1 < length && arr[left] <= arr[left + 1]) {
    left++
  }

  if (left === length - 1) {
    return 0
  }

  while (right > left && arr[right - 1] <= arr[right]) {
    right--
  }

  let result = Math.min(length - 1 - left, right)
  let i = 0
  let j = right

  while (i <= left && j < length) {
    if (arr[i] <= arr[j]) {
      result = Math.min(result, j - 1 - i)
      i++
    } else {
      j++
    }
  }

  return result
}

module.exports = findLengthOfShortestSubarray
