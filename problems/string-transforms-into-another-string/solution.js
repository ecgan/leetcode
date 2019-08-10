const isEqual = require('lodash/isEqual')
const difference = require('lodash/difference')

const canConvert = (str1, str2) => {
  if (str1 === str2) {
    return true
  }

  const chars2 = [...str2]
  const charMap2 = {}
  const segment2 = [0]
  for (let i = 0; i < chars2.length; i++) {
    const char = chars2[i]

    if (charMap2[char]) {
      charMap2[char].push(i)
    } else {
      charMap2[char] = [i]
    }

    if (i > 0 && (chars2[i] !== chars2[i - 1])) {
      segment2.push(i)
    }
  }

  const chars1 = [...str1]
  const charMap1 = {}
  const segment1 = [0]
  for (let i = 0; i < chars1.length; i++) {
    const char = chars1[i]

    if (charMap1[char]) {
      charMap1[char].push(i)
    } else {
      charMap1[char] = [i]
    }

    if (i > 0 && (chars1[i] !== chars1[i - 1])) {
      segment1.push(i)
    }
  }

  const usedChars1 = Object.keys(charMap1).length
  const usedChars2 = Object.keys(charMap2).length

  if (usedChars1 === 26 && usedChars2 === 26) {
    return false
  }

  if (usedChars1 < usedChars2) {
    return false
  }

  if (segment1.length < segment2.length) {
    return false
  }

  if (isEqual(segment1, segment2)) {
    return true
  }

  for (const char2 in charMap2) {
    const indexes = charMap2[char2]

    for (const i of indexes) {
      const char1 = chars1[i]
      const char1indexes = charMap1[char1]

      if (char1indexes.length > indexes.length) {
        return false
      }

      const diff = difference(char1indexes, indexes)
      if (diff.length > 0) {
        return false
      }
    }
  }

  return true
}

module.exports = canConvert
