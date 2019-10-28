const leettree = require('leettree')
const twoSumBSTs = require('./solution')

test('Example 1', () => {
  const root1 = [2, 1, 4]
  const root2 = [1, 0, 3]
  const target = 5

  const result = twoSumBSTs(
    leettree.deserialize(root1),
    leettree.deserialize(root2),
    target
  )

  expect(result).toBe(true)
})

test('Example 2', () => {
  const root1 = [0, -10, 10]
  const root2 = [5, 1, 7, 0, 2]
  const target = 18

  const result = twoSumBSTs(
    leettree.deserialize(root1),
    leettree.deserialize(root2),
    target
  )

  expect(result).toBe(false)
})

test('very small value', () => {
  const root1 = [2, 1, 4]
  const root2 = [1, 0, 3]
  const target = -100

  const result = twoSumBSTs(
    leettree.deserialize(root1),
    leettree.deserialize(root2),
    target
  )

  expect(result).toBe(false)
})
