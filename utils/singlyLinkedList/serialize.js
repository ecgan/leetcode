const serialize = (list) => {
  const array = []
  let curNode = list

  while (curNode) {
    array.push(curNode.val)
    curNode = curNode.next
  }

  return array
}

module.exports = serialize
