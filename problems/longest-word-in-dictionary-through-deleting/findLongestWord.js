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

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = (s, d) => {
  let result = ''

  for (const word of d) {
    if (isSubsequence(word, s)) {
      if (
        (word.length > result.length) ||
        (word.length === result.length && word < result)
      ) {
        result = word
      }
    }
  }

  return result
}

module.exports = findLongestWord
