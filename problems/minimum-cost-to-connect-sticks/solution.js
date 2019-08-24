const sortBy = require('lodash/sortBy')
const sortedIndex = require('lodash/sortedIndex')

const getCost = (sorted) => {
  let cost = 0

  while (sorted.length > 1) {
    const first = sorted.shift()
    const second = sorted.shift()

    const combined = first + second
    const insertIndex = sortedIndex(sorted, combined)
    sorted.splice(insertIndex, 0, combined)

    cost += combined
  }

  return cost
}

const connectSticks = (sticks) => {
  if (sticks.length === 1) {
    return 0
  }

  const sorted = sortBy(sticks)

  return getCost(sorted)
}

module.exports = connectSticks
