const exist = require('./exist')

test('Example 1', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]
  const word = 'ABCCED'

  const result = exist(board, word)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]
  const word = 'SEE'

  const result = exist(board, word)

  expect(result).toBe(true)
})

test('Example 3', () => {
  const board = [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E']
  ]
  const word = 'ABCB'

  const result = exist(board, word)

  expect(result).toBe(false)
})
