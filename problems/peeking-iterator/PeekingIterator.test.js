const Iterator = require('./Iterator')
const PeekingIterator = require('./PeekingIterator')

test('Example 1', () => {
  const arr = [1, 2, 3]
  const peekingIterator = new PeekingIterator(new Iterator(arr))

  expect(peekingIterator.next()).toBe(1)
  expect(peekingIterator.peek()).toBe(2)
  expect(peekingIterator.next()).toBe(2)
  expect(peekingIterator.next()).toBe(3)
  expect(peekingIterator.hasNext()).toBe(false)
})
