const Node = function (key, value) {
  this.key = key
  this.value = value
  this.prev = null
  this.next = null
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity
  this.count = 0
  this.map = {}

  this.head = new Node()
  this.tail = new Node()

  this.head.next = this.tail
  this.tail.prev = this.head
}

LRUCache.prototype.delete = function (node) {
  node.prev.next = node.next
  node.next.prev = node.prev
}

LRUCache.prototype.push = function (node) {
  node.prev = this.head
  node.next = this.head.next
  node.next.prev = node
  this.head.next = node
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map[key]

  if (!node) {
    return -1
  }

  this.delete(node)
  this.push(node)

  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.map[key]
  if (node) {
    node.value = value
    this.delete(node)
    this.push(node)
    return
  }

  if (this.count >= this.capacity) {
    const node = this.tail.prev
    this.delete(node)
    delete this.map[node.key]
    this.count--
  }

  const newNode = new Node(key, value)
  this.map[key] = newNode
  this.push(newNode)
  this.count++
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

module.exports = LRUCache
