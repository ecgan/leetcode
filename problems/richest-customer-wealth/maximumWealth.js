/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function (accounts) {
  return accounts.reduce((accMax, customer) => {
    const sum = customer.reduce((accSum, account) => {
      return accSum + account
    }, 0)

    return Math.max(accMax, sum)
  }, 0)
}

module.exports = maximumWealth
