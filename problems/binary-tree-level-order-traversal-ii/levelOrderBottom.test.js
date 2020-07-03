const { deserialize } = require('leettree')
const levelOrderBottom = require('./levelOrderBottom')

test('Example 1', () => {
  const root = deserialize([3, 9, 20, null, null, 15, 7])

  const result = levelOrderBottom(root)

  expect(result).toStrictEqual([
    [15, 7],
    [9, 20],
    [3]
  ])
})

test('Empty root', () => {
  const root = deserialize([])

  const result = levelOrderBottom(root)

  expect(result).toStrictEqual([])
})
