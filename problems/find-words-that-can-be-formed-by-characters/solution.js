/**
 * Check if the word is within charMap.
 * @param {*} word
 * @param {*} charMap
 */
const isWordInCharMap = (word, charMap) => {
  const wMap = new Map()
  const ws = word.split('')

  for (const w of ws) {
    if (wMap.has(w)) {
      wMap.set(w, wMap.get(w) + 1)
    } else {
      wMap.set(w, 1)
    }

    if (
      (!charMap.get(w)) ||
      (wMap.get(w) > charMap.get(w))
    ) {
      return false
    }
  }

  return true
}

/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const countCharacters = function (words, chars) {
  const charMap = new Map()
  chars.split('').forEach((c) => {
    if (charMap.has(c)) {
      charMap.set(c, charMap.get(c) + 1)
    } else {
      charMap.set(c, 1)
    }
  })

  const length = words.reduce((acc, cur) => {
    return isWordInCharMap(cur, charMap)
      ? acc + cur.length
      : acc
  }, 0)

  return length
}

module.exports = countCharacters
