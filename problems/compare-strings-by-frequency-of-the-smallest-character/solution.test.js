const numSmallerByFrequency = require('./solution')

test('Example 1', () => {
  const queries = ['cbd']
  const words = ['zaaaz']

  const result = numSmallerByFrequency(queries, words)

  expect(result).toStrictEqual([1])
})

test('Example 2', () => {
  const queries = ['bbb', 'cc']
  const words = ['a', 'aa', 'aaa', 'aaaa']

  const result = numSmallerByFrequency(queries, words)

  expect(result).toStrictEqual([1, 2])
})

test('Contain very long query', () => {
  const queries = ['bbb', 'cc', 'ddddddddd']
  const words = ['a', 'aa', 'aaa', 'aaaa']

  const result = numSmallerByFrequency(queries, words)

  expect(result).toStrictEqual([1, 2, 0])
})

test('long arrays', () => {
  const queries = ['bba', 'abaaaaaa', 'aaaaaa', 'bbabbabaab', 'aba', 'aa', 'baab', 'bbbbbb', 'aab', 'bbabbaabb']
  const words = ['aaabbb', 'aab', 'babbab', 'babbbb', 'b', 'bbbbbbbbab', 'a', 'bbbbbbbbbb', 'baaabbaab', 'aa']

  const result = numSmallerByFrequency(queries, words)

  expect(result).toStrictEqual([6, 1, 1, 2, 3, 3, 3, 1, 3, 2])
})
