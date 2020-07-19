/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const maxLength = Math.max(a.length, b.length)
  const paddedA = a.padStart(maxLength, '0')
  const paddedB = b.padStart(maxLength, '0')

  let carry = 0
  let result = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    const charA = paddedA[i]
    const charB = paddedB[i]

    if (charA === '1' && charB === '1') {
      result = (carry === 1 ? '1' : '0') + result
      carry = 1
    } else if (charA === '1' || charB === '1') {
      result = (carry === 1 ? '0' : '1') + result
      carry = (carry === 1 ? 1 : 0)
    } else {
      result = (carry === 1 ? '1' : '0') + result
      carry = 0
    }
  }

  if (carry === 1) {
    result = '1' + result
  }

  return result
}

module.exports = addBinary
