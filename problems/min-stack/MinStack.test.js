const MinStack = require('./MinStack')

test('Example 1', () => {
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  const min1 = minStack.getMin()
  minStack.pop()
  const top = minStack.top()
  const min2 = minStack.getMin()

  expect(min1).toBe(-3)
  expect(top).toBe(0)
  expect(min2).toBe(-2)
})

test('edge case with empty stack', () => {
  const minStack = new MinStack()
  minStack.pop()
  const min = minStack.getMin()
  const top = minStack.top()

  expect(min).toBe(undefined)
  expect(top).toBe(undefined)
})
