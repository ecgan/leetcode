/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function (S, T) {
  let i = S.length - 1
  let j = T.length - 1
  let backspaceS = 0
  let backspaceT = 0

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      const s = S[i]

      if (s === '#') {
        backspaceS++
        i--
        continue
      }

      if (backspaceS > 0) {
        backspaceS--
        i--
        continue
      }

      break
    }

    while (j >= 0) {
      if (T[j] === '#') {
        backspaceT++
        j--
        continue
      }

      if (backspaceT > 0) {
        backspaceT--
        j--
        continue
      }

      break
    }

    if (S[i] !== T[j]) {
      return false
    }

    i--
    j--
  }

  return true
}

module.exports = backspaceCompare
