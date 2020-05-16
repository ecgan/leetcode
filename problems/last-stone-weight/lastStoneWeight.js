const sortBy = require('lodash/sortBy')
const sortedIndex = require('lodash/sortedIndex')

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  const sorted = sortBy(stones)

  while (sorted.length >= 2) {
    const a = sorted.pop()
    const b = sorted.pop()
    const smashed = Math.abs(a - b)

    if (smashed > 0) {
      const idx = sortedIndex(sorted, smashed)
      sorted.splice(idx, 0, smashed)
    }
  }

  return sorted[0] || 0
}

module.exports = lastStoneWeight
