const reconstructQueue = require('./reconstructQueue')

test('Example 1', () => {
  const people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]]

  const result = reconstructQueue(people)

  expect(result).toStrictEqual([[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]])
})
