const sortBy = require('lodash/sortBy')

const getPowerFn = () => {
  const dp = [undefined, 0]

  const getPower = (num) => {
    if (dp[num] !== undefined) {
      return dp[num]
    }

    const next = (num % 2 === 0)
      ? num / 2
      : (3 * num) + 1

    dp[num] = 1 + getPower(next)

    return dp[num]
  }

  return getPower
}

const getPowerArray = (lo, hi) => {
  const getPower = getPowerFn()

  const result = []
  for (let i = lo; i <= hi; i++) {
    const power = getPower(i)

    result.push({
      x: i,
      power: power
    })
  }

  return result
}

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const getKth = function (lo, hi, k) {
  const array = getPowerArray(lo, hi)
  const sorted = sortBy(array, ['power', 'x'])
  return sorted[k - 1].x
}

module.exports = getKth
