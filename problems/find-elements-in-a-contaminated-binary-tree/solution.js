const getSet = (root) => {
  root.val = 0

  const set = new Set()
  const nodeQueue = [root]

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()

    if (node.left) {
      const value = (2 * node.val) + 1
      node.left.val = value
      nodeQueue.push(node.left)
      set.add(value)
    }

    if (node.right) {
      const value = (2 * node.val) + 2
      node.right.val = value
      nodeQueue.push(node.right)
      set.add(value)
    }
  }

  return set
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
const FindElements = function (root) {
  this.set = getSet(root)
}

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.set.has(target)
}

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

module.exports = FindElements
