const canFinish = require('./canFinish')

test('Example 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toBe(true)
})

test('Example 2', () => {
  const numCourses = 2
  const prerequisites = [[1, 0], [0, 1]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toBe(false)
})

test('Deep prerequisites with cycle', () => {
  const numCourses = 6
  const prerequisites = [[1, 2], [2, 3], [3, 4], [4, 1]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toBe(false)
})

test('Deep prerequisites with no cycle', () => {
  const numCourses = 6
  const prerequisites = [[1, 2], [2, 3], [3, 4], [4, 5]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toBe(true)
})

test('Course with multiple prerequisites', () => {
  const numCourses = 6
  const prerequisites = [[5, 1], [5, 2], [4, 3], [5, 4]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toBe(true)
})
