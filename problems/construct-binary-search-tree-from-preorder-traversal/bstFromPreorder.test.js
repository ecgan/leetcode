const { serialize } = require('leettree')
const bstFromPreorder = require('./bstFromPreorder')

test('Example 1', () => {
  const preorder = [8, 5, 1, 7, 10, 12]

  const result = bstFromPreorder(preorder)

  const output = serialize(result)
  expect(output).toStrictEqual([8, 5, 10, 1, 7, null, 12])
})
