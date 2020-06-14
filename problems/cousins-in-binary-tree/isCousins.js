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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const queue = [root]
  let depthNodeCount = 1
  let parentNode = null

  while (queue.length !== 0) {
    const node = queue.shift()
    depthNodeCount--

    if (node.left) {
      if (node.left.val === x || node.left.val === y) {
        if (parentNode) {
          return true
        }

        parentNode = node
      }

      queue.push(node.left)
    }

    if (node.right) {
      if (node.right.val === x || node.right.val === y) {
        if (parentNode === node) {
          return false
        }

        if (parentNode) {
          return true
        }

        parentNode = node
      }

      queue.push(node.right)
    }

    if (depthNodeCount === 0) {
      if (parentNode) {
        return false
      }

      depthNodeCount = queue.length
    }
  }
}

module.exports = isCousins
