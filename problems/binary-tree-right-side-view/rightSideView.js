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
 * @return {number[]}
 */
const rightSideView = (root) => {
  const result = []

  if (!root) {
    return result
  }

  const queue = [root]
  let levelLength = queue.length

  while (queue.length) {
    const node = queue.shift()
    levelLength--

    if (node.left) {
      queue.push(node.left)
    }

    if (node.right) {
      queue.push(node.right)
    }

    if (levelLength === 0) {
      result.push(node.val)
      levelLength = queue.length
    }
  }

  return result
}

module.exports = rightSideView
