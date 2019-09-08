const sortBy = require('lodash/sortBy')

const getPrefixSum = (distance) => {
  const prefixSum = [0]

  for (let i = 0; i < distance.length; i++) {
    prefixSum.push(prefixSum[i] + distance[i])
  }

  return prefixSum
}

const distanceBetweenBusStops = (distance, start, destination) => {
  const prefixSum = getPrefixSum(distance)

  const [startIndex, endIndex] = sortBy([start, destination])
  const totalSum = prefixSum[prefixSum.length - 1]

  const clockwise = Math.abs(prefixSum[endIndex] - prefixSum[startIndex])
  const counterClockwise = totalSum - clockwise

  return Math.min(clockwise, counterClockwise)
}

module.exports = distanceBetweenBusStops
