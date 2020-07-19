const serialize = (node) => {
  const result = []
  let ptr = node

  while (ptr) {
    result.push(ptr.val)
    ptr = ptr.next
  }

  return result
}

module.exports = serialize
