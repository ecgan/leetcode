const deserialize = require('./deserialize')
const serialize = require('./serialize')
const flatten = require('./flatten')

test('Example 1', () => {
  const head = deserialize([1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12])

  const result = flatten(head)

  expect(serialize(result)).toStrictEqual([1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6])
})

test('Example 2', () => {
  const head = deserialize([1, 2, null, 3])

  const result = flatten(head)

  expect(serialize(result)).toStrictEqual([1, 3, 2])
})

test('Example 3', () => {
  const head = deserialize([])

  const result = flatten(head)

  expect(serialize(result)).toStrictEqual([])
})
