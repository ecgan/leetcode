const solve = require('./solve')

test('Example 1', () => {
  const board = [
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'O', 'X'],
    ['X', 'X', 'O', 'X'],
    ['X', 'O', 'X', 'X']
  ]

  solve(board)

  expect(board).toStrictEqual([
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X'],
    ['X', 'O', 'X', 'X']
  ])
})

test('Empty board', () => {
  const board = []

  solve(board)

  expect(board).toStrictEqual([])
})

test('corner and edge has 0', () => {
  const board = [
    ['0', '0', 'X', 'O', 'X', 'X', 'O'],
    ['X', 'X', 'X', 'O', 'X', 'X', 'X'],
    ['O', 'X', 'O', 'X', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'X', 'X', 'O', 'O']
  ]

  solve(board)

  expect(board).toStrictEqual([
    ['0', '0', 'X', 'O', 'X', 'X', 'O'],
    ['X', 'X', 'X', 'O', 'X', 'X', 'X'],
    ['O', 'X', 'O', 'X', 'X', 'O', 'X'],
    ['O', 'X', 'O', 'X', 'X', 'O', 'O']
  ])
})
