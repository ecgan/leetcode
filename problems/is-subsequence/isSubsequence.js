/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  let fromIndex = 0
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    const foundIndex = t.indexOf(char, fromIndex)
    if (foundIndex === -1) {
      return false
    }

    fromIndex = foundIndex + 1
  }

  return true
}

module.exports = isSubsequence
