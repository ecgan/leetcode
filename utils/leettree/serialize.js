const serialize = (tree) => {
  if (!tree) {
    return null
  }

  const result = [tree.val]
  const nodeQueue = [tree]
  let lastValueIndex = 0

  while (nodeQueue.length > 0) {
    const node = nodeQueue.shift()

    if (node.left === null || node.left === undefined) {
      result.push(null)
    } else {
      result.push(node.left.val)
      nodeQueue.push(node.left)
      lastValueIndex = result.length - 1
    }

    if (node.right === null || node.right === undefined) {
      result.push(null)
    } else {
      result.push(node.right.val)
      nodeQueue.push(node.right)
      lastValueIndex = result.length - 1
    }
  }

  result.splice(lastValueIndex + 1)

  return result
}

module.exports = serialize
