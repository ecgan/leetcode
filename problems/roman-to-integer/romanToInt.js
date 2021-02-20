const symbolValueMap = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let int = 0

  for (let i = s.length - 1; i >= 0; i--) {
    const cur = symbolValueMap[s[i]]
    const prev = symbolValueMap[s[i + 1]]

    if (!prev || cur >= prev) {
      int += cur
    } else {
      int -= cur
    }
  }

  return int
}

module.exports = romanToInt
