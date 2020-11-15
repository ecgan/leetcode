const OrderedStream = require('./OrderedStream')

test('Example 1', () => {
  const os = new OrderedStream(5)
  expect(os.insert(3, 'ccccc')).toStrictEqual([])
  expect(os.insert(1, 'aaaaa')).toStrictEqual(['aaaaa'])
  expect(os.insert(2, 'bbbbb')).toStrictEqual(['bbbbb', 'ccccc'])
  expect(os.insert(5, 'eeeee')).toStrictEqual([])
  expect(os.insert(4, 'ddddd')).toStrictEqual(['ddddd', 'eeeee'])
})
