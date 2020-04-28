const FirstUnique = require('./FirstUnique')

test('Example 1', () => {
  const firstUnique = new FirstUnique([2, 3, 5])
  expect(firstUnique.showFirstUnique()).toBe(2) // return 2

  firstUnique.add(5) // the queue is now [2,3,5,5]

  expect(firstUnique.showFirstUnique()).toBe(2) // return 2

  firstUnique.add(2) // the queue is now [2,3,5,5,2]

  expect(firstUnique.showFirstUnique()).toBe(3) // return 3

  firstUnique.add(3) // the queue is now [2,3,5,5,2,3]

  expect(firstUnique.showFirstUnique()).toBe(-1) // return -1
})

test('Example 2', () => {
  const firstUnique = new FirstUnique([7, 7, 7, 7, 7, 7])
  expect(firstUnique.showFirstUnique()).toBe(-1) // return -1

  firstUnique.add(7) // the queue is now [7,7,7,7,7,7,7]
  firstUnique.add(3) // the queue is now [7,7,7,7,7,7,7,3]
  firstUnique.add(3) // the queue is now [7,7,7,7,7,7,7,3,3]
  firstUnique.add(7) // the queue is now [7,7,7,7,7,7,7,3,3,7]
  firstUnique.add(17) // the queue is now [7,7,7,7,7,7,7,3,3,7,17]

  expect(firstUnique.showFirstUnique()).toBe(17) // return 17
})

test('Example 3', () => {
  const firstUnique = new FirstUnique([809])
  expect(firstUnique.showFirstUnique()).toBe(809) // return 809

  firstUnique.add(809) // the queue is now [809,809]

  expect(firstUnique.showFirstUnique()).toBe(-1) // return -1
})
