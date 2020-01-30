const hasWin = (char, board) => {
  if (
    (board[0][0] === char && board[0][1] === char && board[0][2] === char) ||
    (board[1][0] === char && board[1][1] === char && board[1][2] === char) ||
    (board[2][0] === char && board[2][1] === char && board[2][2] === char) ||
    (board[0][0] === char && board[1][0] === char && board[2][0] === char) ||
    (board[0][1] === char && board[1][1] === char && board[2][1] === char) ||
    (board[0][2] === char && board[1][2] === char && board[2][2] === char) ||
    (board[0][0] === char && board[1][1] === char && board[2][2] === char) ||
    (board[0][2] === char && board[1][1] === char && board[2][0] === char)
  ) {
    return true
  }

  return false
}

const tictactoe = (moves) => {
  const board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ]

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i]
    board[move[0]][move[1]] = (i % 2 === 0) ? 'X' : 'O'
  }

  if (hasWin('X', board)) return 'A'
  if (hasWin('O', board)) return 'B'
  if (moves.length === 9) return 'Draw'

  return 'Pending'
}

module.exports = tictactoe
