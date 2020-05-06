/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const unique = new Map()
  const duplicate = new Set()

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (!unique.has(char) && !duplicate.has(char)) {
      unique.set(char, i)
    } else {
      unique.delete(char)
      duplicate.add(char)
    }
  }

  if (unique.size === 0) {
    return -1
  }

  return unique.values().next().value
}

module.exports = firstUniqChar
