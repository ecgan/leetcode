const sortBy = require('lodash/sortBy')

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function (people) {
  const sorted = sortBy(people, [
    (o) => -o[0],
    (o) => o[1]
  ])

  const result = []
  for (let i = 0; i < sorted.length; i++) {
    const [, idx] = sorted[i]
    result.splice(idx, 0, sorted[i])
  }

  return result
}

module.exports = reconstructQueue
