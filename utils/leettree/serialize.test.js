const serialize = require('./serialize')

test('Sample 1', () => {
  const tree = {
    val: 5,
    left: {
      val: 1,
      left: null,
      right: null
    },
    right: {
      val: 2,
      left: {
        val: 4
      },
      right: null
    }
  }

  const result = serialize(tree)

  expect(result).toStrictEqual([5, 1, 2, null, null, 4])
})
