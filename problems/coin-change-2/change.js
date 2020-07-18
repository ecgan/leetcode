/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0)
  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin]
    }
  }

  return dp[amount]
}

module.exports = change
