/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = (s, c) => {
  const result = []
  let indexC = Number.MIN_SAFE_INTEGER

  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === c) {
      indexC = idx
    }

    result[idx] = idx - indexC
  }

  indexC = Number.MAX_SAFE_INTEGER

  for (let idx = s.length - 1; idx >= 0; idx--) {
    if (s[idx] === c) {
      indexC = idx
    }

    result[idx] = Math.min(result[idx], indexC - idx)
  }

  return result
}

module.exports = shortestToChar
