/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
  const jewels = new Set(J)

  let count = 0
  for (const char of S) {
    if (jewels.has(char)) {
      count++
    }
  }

  return count
}

module.exports = numJewelsInStones
