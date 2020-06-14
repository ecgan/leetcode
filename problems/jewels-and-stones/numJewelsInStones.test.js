const numJewelsInStones = require('./numJewelsInStones')

test('Example 1', () => {
  const J = 'aA'
  const S = 'aAAbbbb'

  const result = numJewelsInStones(J, S)

  expect(result).toBe(3)
})

test('Example 2', () => {
  const J = 'z'
  const S = 'ZZ'

  const result = numJewelsInStones(J, S)

  expect(result).toBe(0)
})
