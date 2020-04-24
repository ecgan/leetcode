const LRUCache = require('./LRUCache')

test('Example 1', () => {
  const cache = new LRUCache(2 /* capacity */)

  cache.put(1, 1)
  cache.put(2, 2)

  const a = cache.get(1) // returns 1
  expect(a).toBe(1)

  cache.put(3, 3) // evicts key 2

  const b = cache.get(2) // returns -1 (not found)
  expect(b).toBe(-1)

  cache.put(4, 4) // evicts key 1

  const c = cache.get(1) // returns -1 (not found)
  expect(c).toBe(-1)

  const d = cache.get(3) // returns 3
  expect(d).toBe(3)

  const e = cache.get(4) // returns 4
  expect(e).toBe(4)
})
