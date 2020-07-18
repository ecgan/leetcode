const findWords = require('./findWords')

test('Example 1', () => {
  const board = [
    ['o', 'a', 'a', 'n'],
    ['e', 't', 'a', 'e'],
    ['i', 'h', 'k', 'r'],
    ['i', 'f', 'l', 'v']
  ]
  const words = ['oath', 'pea', 'eat', 'rain']

  const result = findWords(board, words)

  expect(result).toStrictEqual(['oath', 'eat'])
})

test('board contains every character from every words', () => {
  const board = [
    ['a', 'b'],
    ['d', 'c']
  ]
  const words = ['abcd', 'dcba']

  const result = findWords(board, words)

  expect(result).toStrictEqual(['abcd', 'dcba'])
})
