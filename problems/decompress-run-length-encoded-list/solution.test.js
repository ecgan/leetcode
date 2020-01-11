const decompressRLElist = require('./solution')

test('Example 1', () => {
  const nums = [1, 2, 3, 4]

  const result = decompressRLElist(nums)

  expect(result).toStrictEqual([2, 4, 4, 4])
})
