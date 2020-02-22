const Cashier = require('./solution')

test('Example 1', () => {
  const cashier = new Cashier(3, 50, [1, 2, 3, 4, 5, 6, 7], [100, 200, 300, 400, 300, 200, 100])

  const bill1 = cashier.getBill([1, 2], [1, 2]) // return 500.0, bill = 1 * 100 + 2 * 200 = 500.
  expect(bill1).toBe(500)

  const bill2 = cashier.getBill([3, 7], [10, 10]) // return 4000.0
  expect(bill2).toBe(4000)

  const bill3 = cashier.getBill([1, 2, 3, 4, 5, 6, 7], [1, 1, 1, 1, 1, 1, 1]) // return 800.0, The bill was 1600.0 but as this is the third customer, he has a discount of 50% which means his bill is only 1600 - 1600 * (50 / 100) = 800.
  expect(bill3).toBe(800)

  const bill4 = cashier.getBill([4], [10]) // return 4000.0
  expect(bill4).toBe(4000)

  const bill5 = cashier.getBill([7, 3], [10, 10]) // return 4000.0
  expect(bill5).toBe(4000)

  const bill6 = cashier.getBill([7, 5, 3, 1, 6, 4, 2], [10, 10, 10, 9, 9, 9, 7]) // return 7350.0, Bill was 14700.0 but as the system counted three more customers, he will have a 50% discount and the bill becomes 7350.0
  expect(bill6).toBe(7350)

  const bill7 = cashier.getBill([2, 3, 5], [5, 3, 2]) // return 2500.0
  expect(bill7).toBe(2500)
})
