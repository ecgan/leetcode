/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  let sum = 0
  let cur = n
  while (cur !== 0) {
    sum++
    cur &= (cur - 1)
  }

  return sum
}

module.exports = hammingWeight
