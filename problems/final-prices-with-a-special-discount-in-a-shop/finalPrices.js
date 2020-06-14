/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  const indexStack = []
  const result = []

  for (let i = 0; i < prices.length; i++) {
    while (
      indexStack.length > 0 &&
      prices[indexStack[indexStack.length - 1]] >= prices[i]
    ) {
      const index = indexStack.pop()
      result[index] -= prices[i]
    }

    result.push(prices[i])
    indexStack.push(i)
  }

  return result
}

module.exports = finalPrices
