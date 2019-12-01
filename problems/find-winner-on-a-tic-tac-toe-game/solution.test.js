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

test('Player A win in the first row', () => {
  const moves = [[0, 0], [1, 0], [0, 1], [1, 1], [0, 2]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('A')
})

test('Player A win in the third row', () => {
  const moves = [[2, 0], [1, 0], [2, 1], [1, 1], [2, 2]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('A')
})

test('Player A win in the second column', () => {
  const moves = [[0, 1], [0, 0], [1, 1], [1, 0], [2, 1]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('A')
})

test('Player A win in the third column', () => {
  const moves = [[0, 2], [0, 1], [1, 2], [1, 1], [2, 2]]

  const result = tictactoe(moves)

  expect(result).toStrictEqual('A')
})
