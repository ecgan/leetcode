const lastStoneWeight = require('./lastStoneWeight')

test('Example 1', () => {
  const stones = [2, 7, 4, 1, 8, 1]

  const result = lastStoneWeight(stones)

  expect(result).toStrictEqual(1)
})

test('only 1 stone', () => {
  const stones = [100]

  const result = lastStoneWeight(stones)

  expect(result).toStrictEqual(100)
})

test('2 stones equal weight, no stone left', () => {
  const stones = [100, 100]

  const result = lastStoneWeight(stones)

  expect(result).toStrictEqual(0)
})

test('2 stones unequal weight', () => {
  const stones = [150, 100]

  const result = lastStoneWeight(stones)

  expect(result).toStrictEqual(50)
})

test('smashed get inserted in the middle, first stone never get touched', () => {
  const stones = [25, 50, 125, 125, 150, 200]

  const result = lastStoneWeight(stones)

  expect(result).toStrictEqual(25)
})
