const RandomizedSet = require('./RandomizedSet')

test('Example 1', () => {
  const randomSet = new RandomizedSet()

  expect(randomSet.insert(1)).toBe(true)

  expect(randomSet.remove(2)).toBe(false)

  expect(randomSet.insert(2)).toBe(true)

  randomSet.getRandom()

  expect(randomSet.remove(1)).toBe(true)

  expect(randomSet.insert(2)).toBe(false)

  expect(randomSet.getRandom()).toBe(2)
})

test('remove the one and only value.', () => {
  const randomSet = new RandomizedSet()

  expect(randomSet.remove(0)).toBe(false)

  expect(randomSet.insert(0)).toBe(true)

  expect(randomSet.remove(0)).toBe(true)

  expect(randomSet.insert(0)).toBe(true)

  expect(randomSet.getRandom()).toBe(0)
})
