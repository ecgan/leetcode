/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(' ')
    .filter(word => word.length > 0)
    .reverse()
    .join(' ')
}

module.exports = reverseWords
