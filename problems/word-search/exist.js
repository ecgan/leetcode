const getDfsFn = (board, word) => {
  const dfs = (i, j, charIndex) => {
    if (!word[charIndex]) {
      return true
    }

    if (
      !board[i] ||
      !board[i][j] ||
      board[i][j] !== word[charIndex]
    ) {
      return false
    }

    const oldChar = board[i][j]
    board[i][j] = '#'

    const res = (
      dfs(i - 1, j, charIndex + 1) ||
      dfs(i, j + 1, charIndex + 1) ||
      dfs(i + 1, j, charIndex + 1) ||
      dfs(i, j - 1, charIndex + 1)
    )

    board[i][j] = oldChar

    return res
  }

  return dfs
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const dfs = getDfsFn(board, word)

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (
        board[i][j] === word[0] &&
        dfs(i, j, 0)
      ) {
        return true
      }
    }
  }

  return false
}

module.exports = exist
