const Solution = require('./Solution')

test('Example 1', () => {
  const solution = new Solution([1])
  expect(solution.pickIndex()).toBe(0)
})
