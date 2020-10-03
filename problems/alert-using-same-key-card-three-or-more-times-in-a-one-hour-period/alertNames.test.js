const alertNames = require('./alertNames')

test('Example 1', () => {
  const keyName = ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis']
  const keyTime = ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']

  const result = alertNames(keyName, keyTime)

  expect(result).toStrictEqual(['daniel'])
})

test('Example 2', () => {
  const keyName = ['alice', 'alice', 'alice', 'bob', 'bob', 'bob', 'bob']
  const keyTime = ['12:01', '12:00', '18:00', '21:00', '21:20', '21:30', '23:00']

  const result = alertNames(keyName, keyTime)

  expect(result).toStrictEqual(['bob'])
})

test('Example 3', () => {
  const keyName = ['john', 'john', 'john']
  const keyTime = ['23:58', '23:59', '00:01']

  const result = alertNames(keyName, keyTime)

  expect(result).toStrictEqual([])
})

test('Example 4', () => {
  const keyName = ['leslie', 'leslie', 'leslie', 'clare', 'clare', 'clare', 'clare']
  const keyTime = ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49']

  const result = alertNames(keyName, keyTime)

  expect(result).toStrictEqual(['clare', 'leslie'])
})
