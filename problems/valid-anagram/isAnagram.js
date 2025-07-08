/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false
  }

  const charCountMap = new Map()

  for (const char of s.split('')) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1)
  }

  for (const char of t.split('')) {
    const count = charCountMap.get(char)

    if (!count) {
      return false
    }

    charCountMap.set(char, count - 1)
  }

  return true
}

module.exports = isAnagram
