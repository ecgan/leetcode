const getPrefixSum = (distance) => {
  const prefixSum = [0]
  let sum = 0

  for (let i = 0; i < distance.length; i++) {
    const element = distance[i]
    sum += element
    prefixSum.push(sum)
  }

  return prefixSum
}

const distanceBetweenBusStops = (distance, start, destination) => {
  const prefixSum = getPrefixSum(distance)

  const startIndex = Math.min(start, destination)
  const endIndex = Math.max(start, destination)

  const startSum = prefixSum[startIndex]
  const endSum = prefixSum[endIndex]
  const totalSum = prefixSum[prefixSum.length - 1]

  const clockwise = Math.abs(endSum - startSum)
  const counterClockwise = totalSum - clockwise

  return Math.min(clockwise, counterClockwise)
}

module.exports = distanceBetweenBusStops
