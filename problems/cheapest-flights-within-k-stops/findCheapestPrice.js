const sortedIndexBy = require('lodash/sortedIndexBy')

// get a src->dst->price map object based on flights.
const getSrcDstPriceMap = (flights) => {
  const srcDstPriceMap = new Map()

  for (let i = 0; i < flights.length; i++) {
    const [src, dst, price] = flights[i]
    srcDstPriceMap.set(src, (srcDstPriceMap.get(src) || new Map()).set(dst, price))
  }

  return srcDstPriceMap
}

/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, k) {
  const srcDstPriceMap = getSrcDstPriceMap(flights)

  // a priority queue that sorts based on accumulated price.
  // each item is in the format [accumulated price, current city, remaining flights].
  // note that remaining flights is equal to k+1.
  const queue = []
  queue.push([0, src, k + 1])

  while (queue.length > 0) {
    const [accPrice, city, remainingFlights] = queue.shift()

    if (city === dst) {
      return accPrice
    }

    if (remainingFlights > 0) {
      const adjDstPriceMap = srcDstPriceMap.get(city) || new Map()

      for (const [dst, price] of adjDstPriceMap.entries()) {
        const next = [accPrice + price, dst, remainingFlights - 1]
        const idx = sortedIndexBy(queue, next, (o) => o[0])
        queue.splice(idx, 0, next)
      }
    }
  }

  return -1
}

module.exports = findCheapestPrice
