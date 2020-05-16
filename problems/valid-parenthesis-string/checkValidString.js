/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
  let minLeft = 0
  let maxLeft = 0

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (char === '(') {
      minLeft++
      maxLeft++
    }

    if (char === '*') {
      minLeft = Math.max(0, minLeft - 1)
      maxLeft++
    }

    if (char === ')') {
      minLeft = Math.max(0, minLeft - 1)
      maxLeft--

      if (maxLeft < 0) {
        return false
      }
    }
  }

  return minLeft === 0
}

module.exports = checkValidString
