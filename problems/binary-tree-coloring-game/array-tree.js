function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

const deserialize = (array) => {
  if (array.length === 0) {
    return null
  }

  const remainingValues = [...array]
  const nodeQueue = []

  const rootValue = remainingValues.shift()
  const tree = new TreeNode(rootValue)
  nodeQueue.push(tree)

  while (remainingValues.length > 0) {
    const node = nodeQueue.shift()

    const leftValue = remainingValues.shift()
    if (leftValue !== null && leftValue !== undefined) {
      node.left = new TreeNode(leftValue)
      nodeQueue.push(node.left)
    }

    const rightValue = remainingValues.shift()
    if (rightValue !== null && rightValue !== undefined) {
      node.right = new TreeNode(rightValue)
      nodeQueue.push(node.right)
    }
  }

  return tree
}

module.exports = {
  deserialize
}
