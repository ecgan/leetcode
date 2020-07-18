const canFinish = require('./findOrder')

test('Example 1', () => {
  const numCourses = 2
  const prerequisites = [[1, 0]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toStrictEqual([0, 1])
})

test('Example 2', () => {
  const numCourses = 4
  const prerequisites = [[1, 0], [2, 0], [3, 1], [3, 2]]

  const result = canFinish(numCourses, prerequisites)

  expect(result).toStrictEqual([0, 1, 2, 3])
})
