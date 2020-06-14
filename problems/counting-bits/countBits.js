/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  const result = [0]

  for (let i = 1; i <= num; i++) {
    result[i] = result[i >> 1] + (i & 1)
  }

  return result
}

module.exports = countBits
