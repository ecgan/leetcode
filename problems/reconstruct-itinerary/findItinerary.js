const sortedIndex = require('lodash/sortedIndex')

const getFromTosMap = (tickets) => {
  const fromTosMap = new Map()

  for (const [from, to] of tickets) {
    const tos = fromTosMap.get(from) || []
    const index = sortedIndex(tos, to)
    tos.splice(index, 0, to)
    fromTosMap.set(from, tos)
  }

  return fromTosMap
}

const buildItinerary = (fromTosMap) => {
  const itinerary = []
  const stack = []
  stack.push('JFK')

  while (stack.length > 0) {
    let from = stack[stack.length - 1]

    while (
      fromTosMap.has(from) &&
      fromTosMap.get(from).length > 0
    ) {
      const tos = fromTosMap.get(from)
      const dest = tos.shift()
      stack.push(dest)

      from = dest
    }

    const dest = stack.pop()
    itinerary.unshift(dest)
  }

  return itinerary
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
const findItinerary = function (tickets) {
  const fromTosMap = getFromTosMap(tickets)
  const itinerary = buildItinerary(fromTosMap)
  return itinerary
}

module.exports = findItinerary
