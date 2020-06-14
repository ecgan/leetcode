const StockSpanner = function () {
  this.priceCounts = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let count = 1

  while (
    this.priceCounts.length > 0 &&
    price >= this.priceCounts[this.priceCounts.length - 1].price
  ) {
    const prevPriceCount = this.priceCounts.pop()
    count += prevPriceCount.count
  }

  const newPriceCount = {
    price: price,
    count: count
  }
  this.priceCounts.push(newPriceCount)

  return count
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

module.exports = StockSpanner
