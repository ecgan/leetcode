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
const sumNumbers = function (root) {
  let sum = 0
  let cur = 0

  const process = (node) => {
    if (!node) {
      return
    }

    cur = (cur * 10) + node.val

    if (!node.left && !node.right) {
      sum += cur
      cur = (cur - node.val) / 10
      return
    }

    process(node.left)
    process(node.right)
    cur = (cur - node.val) / 10
  }

  process(root)

  return sum
}

module.exports = sumNumbers
