const lastSubstring = (s) => {
  let i = 0 // index of final substring.
  let j = 1 // index of lookahead possible substring.
  let k = 0 // moving offset to compare i & j.

  while (j + k < s.length) {
    if (s[i + k] < s[j + k]) {
      i = Math.max(i + k + 1, j)
      j = i + 1
      k = 0
    }

    if (s[i + k] === s[j + k]) {
      k += 1
    }

    if (s[i + k] > s[j + k]) {
      j = j + k + 1
      k = 0
    }
  }

  return s.substring(i)
}

module.exports = lastSubstring
