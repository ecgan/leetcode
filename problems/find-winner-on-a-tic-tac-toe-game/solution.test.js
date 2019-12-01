const tictactoe = require('./solution')

test('Example 1', () => {
  const moves = [[0, 0], [2, 0], [1, 1], [2, 1], [2, 2]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('A')
})

test('Example 2', () => {
  const moves = [[0, 0], [1, 1], [0, 1], [0, 2], [1, 0], [2, 0]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('B')
})

test('Example 3', () => {
  const moves = [[0, 0], [1, 1], [2, 0], [1, 0], [1, 2], [2, 1], [0, 1], [0, 2], [2, 2]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('Draw')
})

test('Example 4', () => {
  const moves = [[0, 0], [1, 1]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('Pending')
})
