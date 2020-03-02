const getCalculateCost = (cost, stepMinCostMap) => {
  const calculateCost = (dest) => {
    if (dest === 1) {
      return 0
    }

    if (dest === 2) {
      return Math.min(cost[0], cost[1])
    }

    if (!stepMinCostMap.has(dest - 2)) {
      stepMinCostMap.set(dest - 2, calculateCost(dest - 2))
    }

    if (!stepMinCostMap.has(dest - 1)) {
      stepMinCostMap.set(dest - 1, calculateCost(dest - 1))
    }

    const last2step = stepMinCostMap.get(dest - 2) + cost[dest - 2]
    const last1step = stepMinCostMap.get(dest - 1) + cost[dest - 1]

    const result = Math.min(last2step, last1step)

    return result
  }

  return calculateCost
}

const minCostClimbingStairs = (cost) => {
  const stepMinCostMap = new Map()
  const calculateCost = getCalculateCost(cost, stepMinCostMap)

  const result = calculateCost(cost.length)

  return result
}

module.exports = minCostClimbingStairs
