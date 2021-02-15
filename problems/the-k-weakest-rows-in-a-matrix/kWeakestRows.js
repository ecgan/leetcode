const sortedLastIndexBy = require('lodash/sortedLastIndexBy')

class PriorityQueue {
  constructor (comparator = (a, b) => a > b) {
    this._top = 0
    this.parent = i => ((i + 1) >>> 1) - 1
    this.left = i => (i << 1) + 1
    this.right = i => (i + 1) << 1

    this._heap = []
    this._comparator = comparator
  }

  size () {
    return this._heap.length
  }

  isEmpty () {
    return this.size() === 0
  }

  peek () {
    return this._heap[this._top]
  }

  push (...values) {
    values.forEach(value => {
      this._heap.push(value)
      this._siftUp()
    })
    return this.size()
  }

  pop () {
    const poppedValue = this.peek()
    const bottom = this.size() - 1
    if (bottom > this._top) {
      this._swap(this._top, bottom)
    }
    this._heap.pop()
    this._siftDown()
    return poppedValue
  }

  replace (value) {
    const replacedValue = this.peek()
    this._heap[this._top] = value
    this._siftDown()
    return replacedValue
  }

  _greater (i, j) {
    return this._comparator(this._heap[i], this._heap[j])
  }

  _swap (i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]]
  }

  _siftUp () {
    let node = this.size() - 1
    while (node > this._top && this._greater(node, this.parent(node))) {
      this._swap(node, this.parent(node))
      node = this.parent(node)
    }
  }

  _siftDown () {
    let node = this._top
    while (
      (this.left(node) < this.size() && this._greater(this.left(node), node)) ||
      (this.right(node) < this.size() && this._greater(this.right(node), node))
    ) {
      const maxChild = (
        this.right(node) < this.size() &&
        this._greater(this.right(node), this.left(node))
      )
        ? this.right(node)
        : this.left(node)
      this._swap(node, maxChild)
      node = maxChild
    }
  }
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
const kWeakestRows = (mat, k) => {
  const pq = new PriorityQueue((a, b) => {
    const [[idxA, strengthA], [idxB, strengthB]] = [a, b]

    return (strengthA === strengthB)
      ? idxA < idxB
      : strengthA < strengthB
  })

  for (let i = 0; i < mat.length; i++) {
    const row = mat[i]
    const strength = sortedLastIndexBy(row, 1, (el) => -el)
    pq.push([i, strength])
  }

  const result = []
  for (let i = 0; i < k; i++) {
    const [idx] = pq.pop()
    result.push(idx)
  }

  return result
}

module.exports = kWeakestRows
