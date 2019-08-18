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

  let length = 0

  for (const word of words) {
    let ok = true
    const ws = word.split('')
    const wMap = new Map()

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
        ok = false
        break
      }
    }

    if (ok) {
      length += word.length
    }
  }

  return length
}

module.exports = countCharacters
