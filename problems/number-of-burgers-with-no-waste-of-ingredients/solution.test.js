const numOfBurgers = require('./solution')

test('Example 1', () => {
  const tomatoSlices = 16
  const cheeseSlices = 7

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([1, 6])
})

test('Example 2', () => {
  const tomatoSlices = 17
  const cheeseSlices = 4

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([])
})

test('Example 3', () => {
  const tomatoSlices = 4
  const cheeseSlices = 17

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([])
})

test('Example 4', () => {
  const tomatoSlices = 0
  const cheeseSlices = 0

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([0, 0])
})

test('Example 5', () => {
  const tomatoSlices = 2
  const cheeseSlices = 1

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([0, 1])
})

test('tomato must be at least two times of cheese', () => {
  const tomatoSlices = 6
  const cheeseSlices = 4

  const result = numOfBurgers(tomatoSlices, cheeseSlices)

  expect(result).toStrictEqual([])
})
