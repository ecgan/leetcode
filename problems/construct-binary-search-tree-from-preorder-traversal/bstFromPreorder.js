/**
 * Definition for a binary tree node.
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  let i = 0
  const process = (bound) => {
    if (i === preorder.length || preorder[i] > bound) {
      return null
    }

    const num = preorder[i]
    const node = new TreeNode(num)
    i++

    node.left = process(node.val)
    node.right = process(bound)

    return node
  }

  const root = process(Number.MAX_SAFE_INTEGER)

  return root
}

module.exports = bstFromPreorder
