/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.n = n
  this.discount = discount

  this.productPriceMap = {}
  for (let i = 0; i < products.length; i++) {
    this.productPriceMap[products[i]] = prices[i]
  }

  this.current = 0
}

/**
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  this.current++

  const totalBeforeDiscount = product.reduce((acc, cur, idx) => {
    const cost = this.productPriceMap[cur] * amount[idx]

    return acc + cost
  }, 0)

  const bill = (this.current % this.n === 0)
    ? totalBeforeDiscount - (this.discount / 100 * totalBeforeDiscount)
    : totalBeforeDiscount

  return bill
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

module.exports = Cashier
