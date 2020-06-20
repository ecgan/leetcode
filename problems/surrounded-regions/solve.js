const markDfs = (board, row, col) => {
  if (!board[row] || !board[row][col] || board[row][col] !== 'O') {
    return
  }

  board[row][col] = '!'
  markDfs(board, row - 1, col)
  markDfs(board, row, col + 1)
  markDfs(board, row + 1, col)
  markDfs(board, row, col - 1)
}

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  if (!board.length) {
    return
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 'O') {
      markDfs(board, i, 0)
    }

    const lastCol = board[i].length - 1
    if (board[i][lastCol] === 'O') {
      markDfs(board, i, lastCol)
    }
  }

  for (let j = 1; j < board[0].length - 1; j++) {
    if (board[0][j] === 'O') {
      markDfs(board, 0, j)
    }

    const lastRow = board.length - 1
    if (board[lastRow][j] === 'O') {
      markDfs(board, lastRow, j)
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === '!') {
        board[i][j] = 'O'
      }
    }
  }
}

module.exports = solve
