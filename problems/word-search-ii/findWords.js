const charCodeA = 97

const getCharCodeIndex = (char) => {
  return char.charCodeAt(0) - charCodeA
}

const TrieNode = class {
  constructor () {
    this.next = new Array(26)
    this.word = undefined
  }
}

const buildTrie = (words) => {
  const root = new TrieNode()

  for (const word of words) {
    let node = root

    for (const char of word) {
      const idx = getCharCodeIndex(char)
      node.next[idx] = node.next[idx] || new TrieNode()
      node = node.next[idx]
    }

    node.word = word
  }

  return root
}

const dfs = (board, i, j, node, result) => {
  const char = board[i][j]
  const idx = getCharCodeIndex(char)
  if (char === '#' || node.next[idx] === undefined) {
    return
  }

  node = node.next[idx]

  if (node.word) {
    result.push(node.word)
    node.word = undefined
  }

  board[i][j] = '#'

  if (i > 0) dfs(board, i - 1, j, node, result)
  if (j > 0) dfs(board, i, j - 1, node, result)
  if (i < board.length - 1) dfs(board, i + 1, j, node, result)
  if (j < board[0].length - 1) dfs(board, i, j + 1, node, result)

  board[i][j] = char
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
  const root = buildTrie(words)
  const result = []

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      dfs(board, i, j, root, result)
    }
  }

  return result
}

module.exports = findWords
