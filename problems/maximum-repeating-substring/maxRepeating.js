/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
const maxRepeating = function (sequence, word) {
  let maxK = 0
  let curK = 0
  let searchIdx = 0

  while (searchIdx >= 0) {
    const foundIdx = sequence.indexOf(word, searchIdx)

    if (foundIdx === searchIdx) {
      curK++
    } else if (foundIdx > searchIdx) {
      curK = 1
    }

    maxK = Math.max(maxK, curK)
    searchIdx = (foundIdx === -1)
      ? -1
      : foundIdx + word.length
  }

  return maxK
}

module.exports = maxRepeating
