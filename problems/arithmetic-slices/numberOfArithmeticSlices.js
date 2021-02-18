/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = (A) => {
  let count = 0
  let dp = 0

  for (let i = 2; i < A.length; i++) {
    if (A[i] - A[i - 1] === A[i - 1] - A[i - 2]) {
      dp++
      count += dp
    } else {
      dp = 0
    }
  }

  return count
}

module.exports = numberOfArithmeticSlices
