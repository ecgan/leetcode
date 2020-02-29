/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let curProfit = 0
  let posBuyDay = 0

  for (let i = 1; i < prices.length; i++) {
    const curPrice = prices[i]

    if (curPrice < prices[posBuyDay]) {
      posBuyDay = i
    }

    if (curPrice - prices[posBuyDay] > curProfit) {
      curProfit = curPrice - prices[posBuyDay]
    }
  }

  return curProfit
}

module.exports = maxProfit
