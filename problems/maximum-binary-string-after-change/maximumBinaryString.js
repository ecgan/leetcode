/**
 * @param {string} binary
 * @return {string}
 */
const maximumBinaryString = (binary) => {
  const digits = binary
    .split('')
    .map((el) => parseInt(el))

  let zeroIndex = null
  let zeroCount = 0
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) {
      zeroIndex = (zeroIndex === null) ? i : zeroIndex
      zeroCount++
    }
  }

  const result = new Array(binary.length).fill(1)
  result[zeroIndex + (zeroCount - 1)] = 0

  return result.join('')
}

module.exports = maximumBinaryString
