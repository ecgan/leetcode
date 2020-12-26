/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
  const circularSandwiches = sandwiches.reduce((acc, cur) => {
    return (cur === 0)
      ? acc + 1
      : acc
  }, 0)

  const circularStudents = students.reduce((acc, cur) => {
    return (cur === 0)
      ? acc + 1
      : acc
  }, 0)

  const [moreSandwichType, lessStudentCount] = (circularSandwiches > circularStudents)
    ? [0, circularStudents]
    : [1, students.length - circularStudents]

  let count = 0
  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === moreSandwichType) {
      count++

      if (count === lessStudentCount + 1) {
        return sandwiches.length - i
      }
    }
  }

  return 0
}

module.exports = countStudents
