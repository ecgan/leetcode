const sortedIndex = require('lodash/sortedIndex')

const getMap = (t) => {
  const map = new Array(26)

  for (let i = 0; i < t.length; i++) {
    const charCodeIdx = t[i].charCodeAt(0) - 97

    if (map[charCodeIdx] === undefined) {
      map[charCodeIdx] = []
    }

    map[charCodeIdx].push(i)
  }

  return map
}

const _isSubsequence = (s, map) => {
  let ptr = 0
  for (let i = 0; i < s.length; i++) {
    const charCodeIdx = s[i].charCodeAt(0) - 97
    const charPositions = map[charCodeIdx]

    if (charPositions === undefined) {
      return false
    }

    const foundIndex = sortedIndex(charPositions, ptr)
    if (foundIndex === charPositions.length) {
      return false
    }

    ptr = charPositions[foundIndex] + 1
  }

  return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
  const map = getMap(t)

  return _isSubsequence(s, map)
}

module.exports = isSubsequence
