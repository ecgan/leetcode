const leettree = require('leettree')
const FindElements = require('./solution')

test('Example 1', () => {
  const root = leettree.deserialize([-1, null, -1])
  const findElements = new FindElements(root)

  expect(findElements.find(1)).toBe(false)
  expect(findElements.find(2)).toBe(true)
})

test('Example 2', () => {
  const root = leettree.deserialize([-1, -1, -1, -1, -1])
  const findElements = new FindElements(root)

  expect(findElements.find(1)).toBe(true)
  expect(findElements.find(3)).toBe(true)
  expect(findElements.find(5)).toBe(false)
})

test('Example 3', () => {
  const root = leettree.deserialize([-1, null, -1, -1, null, -1])
  const findElements = new FindElements(root)

  expect(findElements.find(2)).toBe(true)
  expect(findElements.find(3)).toBe(false)
  expect(findElements.find(4)).toBe(false)
  expect(findElements.find(5)).toBe(true)
})
