const ListNode = require('./ListNode')

const deserialize = (array) => {
  let list

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i]

    if (!list) {
      list = new ListNode(element)
    } else {
      const node = new ListNode(element)
      node.next = list
      list = node
    }
  }

  return list
}

module.exports = deserialize
