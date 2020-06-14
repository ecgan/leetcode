const getMax = (A) => {
  let max = Number.MIN_SAFE_INTEGER
  let cur = Number.MIN_SAFE_INTEGER

  for (let i = 0; i < A.length; i++) {
    const num = A[i]
    cur = num + Math.max(cur, 0)
    max = Math.max(max, cur)
  }

  return max
}

const getSum = (A) => {
  return A.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}

const getMaxWithIndexes = (A, startIndex, endIndex, sum) => {
  let min = Number.MAX_SAFE_INTEGER
  let cur = Number.MAX_SAFE_INTEGER

  for (let i = startIndex; i <= endIndex; i++) {
    cur = A[i] + Math.min(cur, 0)
    min = Math.min(min, cur)
  }

  return sum - min
}

/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = function (A) {
  const ans1 = getMax(A)

  const sum = getSum(A)
  const ans2 = getMaxWithIndexes(A, 0, A.length - 2, sum)
  const ans3 = getMaxWithIndexes(A, 1, A.length - 1, sum)

  return Math.max(ans1, ans2, ans3)
}

module.exports = maxSubarraySumCircular
