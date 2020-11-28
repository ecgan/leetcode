const FrontMiddleBackQueue = require('./FrontMiddleBackQueue')

test('Example 1', () => {
  const q = new FrontMiddleBackQueue()
  q.pushFront(1) // [1]
  q.pushBack(2) // [1, 2]
  q.pushMiddle(3) // [1, 3, 2]
  q.pushMiddle(4) // [1, 4, 3, 2]
  expect(q.popFront()).toBe(1) // return 1 -> [4, 3, 2]
  expect(q.popMiddle()).toBe(3) // return 3 -> [4, 2]
  expect(q.popMiddle()).toBe(4) // return 4 -> [2]
  expect(q.popBack()).toBe(2) // return 2 -> []
  expect(q.popFront()).toBe(-1) // return -1 -> [] (The queue is empty)
})
