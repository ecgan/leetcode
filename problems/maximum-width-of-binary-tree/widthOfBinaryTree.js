/**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
/**
   * @param {TreeNode} root
   * @return {number}
   */
const widthOfBinaryTree = function (root) {
  const mins = []
  let max = 0

  function * dfs (node, depth = 0, pos = 0) {
    if (node) {
      if (mins[depth] === undefined) {
        mins[depth] = pos
      }

      const delta = pos - mins[depth]

      yield [depth, pos, delta]
      yield * dfs(node.left, depth + 1, delta * 2)
      yield * dfs(node.right, depth + 1, delta * 2 + 1)
    }
  }

  for (const [,, delta] of dfs(root)) {
    max = Math.max(max, delta + 1)
  }

  return max
}

module.exports = widthOfBinaryTree
