const countStudents = require('./countStudents')

test('Example 1', () => {
  const students = [1, 1, 0, 0]
  const sandwiches = [0, 1, 0, 1]

  const result = countStudents(students, sandwiches)

  expect(result).toBe(0)
})

test('Example 2', () => {
  const students = [1, 1, 1, 0, 0, 1]
  const sandwiches = [1, 0, 0, 0, 1, 1]

  const result = countStudents(students, sandwiches)

  expect(result).toBe(3)
})

test('circular sandwiches less than circular students', () => {
  const students = [1, 0, 1, 0, 1, 0]
  const sandwiches = [1, 0, 1, 1, 1, 1]

  const result = countStudents(students, sandwiches)

  expect(result).toBe(2)
})
