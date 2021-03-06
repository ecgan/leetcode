const search = require('./search')

test('Example 1', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 0

  const result = search(nums, target)

  expect(result).toBe(4)
})

test('Example 2', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(-1)
})

test('split point is near the end', () => {
  const nums = [1, 2, 4, 5, 6, 7, 0]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(-1)
})

test('nums is already sorted, not rotated, missing target should return -1', () => {
  const nums = [0, 1, 2, 4, 5, 6, 7]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(-1)
})

test('nums contain one element', () => {
  const nums = [1]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(-1)
})

test('[1], 1 should return 0', () => {
  const nums = [1]
  const target = 1

  const result = search(nums, target)

  expect(result).toBe(0)
})

test('[1, 3], 3 should return 1', () => {
  const nums = [1, 3]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(1)
})

test('[1, 3], 1 should return 0', () => {
  const nums = [1, 3]
  const target = 1

  const result = search(nums, target)

  expect(result).toBe(0)
})

test('[3, 1], 1 should return 1', () => {
  const nums = [3, 1]
  const target = 1

  const result = search(nums, target)

  expect(result).toBe(1)
})

test('[5, 1, 3], 3 should return 2', () => {
  const nums = [5, 1, 3]
  const target = 3

  const result = search(nums, target)

  expect(result).toBe(2)
})

test('[5, 1, 2, 3, 4], 1 should return 1', () => {
  const nums = [5, 1, 2, 3, 4]
  const target = 1

  const result = search(nums, target)

  expect(result).toBe(1)
})

test('[5, 1, 2, 3, 4], 2 should return 2', () => {
  const nums = [5, 1, 2, 3, 4]
  const target = 2

  const result = search(nums, target)

  expect(result).toBe(2)
})

test('[8, 1, 2, 3, 4, 5, 6, 7], 6 should return 6', () => {
  const nums = [8, 1, 2, 3, 4, 5, 6, 7]
  const target = 6

  const result = search(nums, target)

  expect(result).toBe(6)
})
