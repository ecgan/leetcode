/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    const j = s.length - 1 - i
    ;[s[i], s[j]] = [s[j], s[i]]
  }
}

module.exports = reverseString
