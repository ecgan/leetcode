/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let sum = 0

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1]
    if (profit > 0) {
      sum += profit
    }
  }

  return sum
}

module.exports = maxProfit
